import React, { useEffect, useState } from 'react';
import './Trainers.css';
import Trainer from '../Trainer/Trainer';


const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    
    useEffect(() => {
        fetch('https://pacific-depths-29780.herokuapp.com/trainers')
        .then(res => res.json())
        .then(data => setTrainers(data))
    }, []);
    
    
    return (
        <section className="trainers">
            <div className="trainers-title pt-5">
                <h1>OUR FITNESS TRAINERS</h1>
                <h5>BEST CELEBRITY TRAINERS</h5>
            </div>
            <div className="row justify-content-center">

                {
                    trainers.map(coach => <Trainer coach={coach}></Trainer>)
                }

            </div>
            
        </section>
    );
};

export default Trainers;