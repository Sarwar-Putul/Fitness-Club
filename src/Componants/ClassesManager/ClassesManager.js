import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Admin/SideBar/Sidebar';
import ManageService from '../ManageService/ManageService';

const ClassesManager = () => {
    const [manageClasses, setManageClasses] = useState([]);

    useEffect(() => {
        fetch('https://pacific-depths-29780.herokuapp.com/classes')
        .then(res => res.json())
        .then(data => setManageClasses(data))
    }, []);
    return (
        <div className="row" style={{backgroundColor: '#ADF10F'}}>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
             <div style={{width: '700px',  marginLeft: '300px'}}>
                    <div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr style={{backgroundColor: 'tomato'}}>
                                    <th style={{width:'250px'}}>Name</th>
                                    <th style={{width:'150px'}}>Duration</th>
                                    <th style={{width:'150px'}}>Price</th>
                                    <th style={{width:'150px'}}>Delete</th>
                                    <th style={{width:'150px'}}>status</th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                    <div>
                            {
                                manageClasses.map(service => <ManageService service={service}></ManageService>)
                            }
                    </div>
                </div>
            
        </div>
    );
};

export default ClassesManager;