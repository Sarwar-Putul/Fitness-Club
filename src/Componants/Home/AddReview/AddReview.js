import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Sidebar from '../../Admin/SideBar/Sidebar';

const AddReview = () => {
    const [feedback, setFeedback] = useState({});

    const handleBlur = e => {
        const newFeedback ={...feedback};
        newFeedback[e.target.name] = e.target.value;
        setFeedback(newFeedback);
    }

    const handleSubmit = event =>{
        event.preventDefault()
        const formData = new FormData()
            formData.append('name', feedback.name);
            formData.append('email', feedback.email);
            formData.append('message', feedback.message);

            fetch('https://pacific-depths-29780.herokuapp.com/addReview', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                   alert('Your Review has been added successfully');
               }
            })
    }


    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
      
            <div className="col-md-8 mt-5 ml-5">
                <form onSubmit={handleSubmit} class="form" action="send.php" method="post">
                    <div class="mb-3">
                        <label class="col-md-3 control-label" for="name">Full Name</label>
                        <div class="col-md-7">
                            <input id="name" onBlur={handleBlur} name="name" type="text" placeholder="Your name" class="form-control"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-md-3 control-label" for="email">Your E-mail</label>
                        <div class="col-md-7">
                            <input id="email" onBlur={handleBlur} name="email" type="text" placeholder="Your email" class="form-control"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-md-3 control-label" for="message">Your message</label>
                        <div class="col-md-7">
                            <textarea class="form-control" onBlur={handleBlur} id="message" name="message" placeholder="Please enter your feedback here..." rows="5"></textarea>
                    </div>
                    </div>
                    <button type="submit" class="btn-danger btn-md"><FontAwesomeIcon icon={faFileUpload} /> Post</button>
                </form>
            </div>
        </div>






        
        
           
    
         
    );
};

export default AddReview;