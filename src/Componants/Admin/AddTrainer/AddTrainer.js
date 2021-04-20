import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Sidebar from '../SideBar/Sidebar';

const AddTrainer = () => {
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
            formData.append('type', info.type);
            formData.append('email', info.email);
            

            fetch('http://localhost:5000/addTrainer', {
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
        <div style={{backgroundColor: '#15232F'}}>
            <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="add-form col-md-9">        
                <container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh", backgroundColor: '#15232F', color: "red"}}>
                    <div  className = "w-100" style={{maxWidth:"400px"}}>
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group  controlId="class-name">
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control name="name" onBlur={handleBlur}  type="text" placeholder="Type Name" />
                            </Form.Group>
                            <Form.Group  controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" onBlur={handleBlur}  type="text" placeholder="Type Email" />
                            </Form.Group>
                            <Form.Group controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Control name="type" onBlur={handleBlur} type="text" placeholder="Type" />
                            </Form.Group>
                            <Form.Group>
                                <Form.File name="file" type="file"  onChange={handleImageUpload} id="exampleFormControlFile1" label="Image" />
                            </Form.Group>
                            <button className="btn-primary" type="submit"><FontAwesomeIcon icon={faFileUpload} /> Submit</button>
                        </Form>
                    </div>
                </container>
            </div>
        </div>
    </div>
        
    );
};

export default AddTrainer;