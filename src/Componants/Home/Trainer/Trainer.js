import React from 'react';
import './Trainer.css'

const Trainer = ({coach}) => {
    return (
        <div className="trainer-card col-md-3 d-flex justify-content-between mb-4 mr-3 ">
            <div>
                {
                    coach.image ? <img style={{height:'100px', width:'100px'}} src={`data:image/png;base64,${coach.image.img}`} />
                    :
                    <img style={{height:'100px', width:'100px'}} src={`http://localhost:5000/${coach.img}`} alt=""/>
                }
            </div>
            <div className="">
                <h6>{coach.type}</h6>
                <h5>{coach.name}</h5>
                <p>{coach.email}</p>
            </div>
            
        </div>
    );
};

export default Trainer;