import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';



const AddClass = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo ={...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleImageUpload = (e) =>{
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = event =>{
        event.preventDefault()
        const formData = new FormData()
            formData.append('file', file);
            formData.append('name', info.name);
            formData.append('price', info.price);
            formData.append('duration', info.duration);
            formData.append('status', info.status);

            fetch('http://localhost:5000/addClass', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('Your class added successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    

    
    return (
        <div className="" style={{backgroundColor:'#F1C40F'}}>
            <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div  className="add-form col-md-8 ml-5">        
                <container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", color: "red"}}>
                    <div  className = "w-100" style={{maxWidth:"400px"}}>
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group  controlId="class-name">
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control name="name" onBlur={handleBlur}  type="text" placeholder="Type Name" />
                            </Form.Group>
                            <Form.Group controlId="addPrice">
                                <Form.Label>Add Price</Form.Label>
                                <Form.Control name="price" onBlur={handleBlur} type="number" placeholder="Price" />
                            </Form.Group>
                            <Form.Group controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control name="duration" onBlur={handleBlur} type="text" placeholder="Duration" />
                            </Form.Group>  
                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control name="status" onBlur={handleBlur} type="text" placeholder="Status" />
                            </Form.Group> 
                            <Form.Group>
                                <Form.File name="file" type="file"  onChange={handleImageUpload} id="exampleFormControlFile1" label="Image" />
                            </Form.Group>
                            <button className="btn-primary" type="submit"><FontAwesomeIcon icon={faFileUpload} />  Submit</button>
                        </Form>
                    </div>
                </container>
            </div>
        </div>
    </div>
        
    )
}

export default AddClass;