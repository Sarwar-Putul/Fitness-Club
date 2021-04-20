import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';

const ManageService = ({service}) => {

    const deleteService = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                alert('Your product deleted successfully');
            }
        })

    }
    const changeStatus = event =>{
        const status = event
        console.log(status)
        fetch(`http://localhost:5000/update/${service._id}`, {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({status})
        })
        .then(res => res.json())
        .then(result =>{
            if(result){
                alert('Your product updated successfully');
            }
        })

    }


    return (
        <div style={{width: '700px'}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th style={{width:'250px'}}>{service.name}</th>
                        <th style={{width:'150px'}}>{service.duration}</th>
                        <th style={{width:'150px'}}>$ {service.price}</th>
                        <th style={{width:'150px'}}><FontAwesomeIcon onClick={() =>deleteService(service._id)} icon={faTrash} /></th>
                        <th style={{width:'150px'}}>
                            <select name="select" onChange={(event) =>changeStatus(event.target.value)}id="select">
                                <option value=""></option>
                                <option value="Pending">Pending</option>
                                <option value="Done">Done</option>
                            </select>
                        </th>
                    </tr>
                </thead>
            </Table>

            
           
        </div>
    );
};

export default ManageService;