import React, { useEffect, useState } from 'react';
import './Classes.css';
import ClassCard from '../ClassCard/ClassCard';


const Classes = () => {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    }, []);
    

    
    return (
        <section className="class-container">
            <div style={{color: '#ffffff'}} className='text-center'>
                <h1 className='pt-5'>OUR FEATURED CLASSES</h1>
                <p>CHECKOUT OUR FITNESS CLASSES</p>
            </div>
             <div className="container">
             <div className="row justify-content-center">
                 <div className='row mt-5'>
                        {
                            classes.map(info => <ClassCard key={info._id} info={info}></ClassCard>)
                        }
                 </div>
             </div>
             </div>
        </section>
    );
};

export default Classes;