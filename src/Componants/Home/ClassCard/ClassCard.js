import React from 'react';
import { Link } from 'react-router-dom';
import './ClassCard.css'

const ClassCard = ({info}) => {
    return (
        
            <div className=" card ml-5 mb-5 col-md-4">
            <div className="logo">
                {
                    info.image ? <img src={`data:image/png;base64,${info.image.img}`} />
                    :
                    <img src={`https://pacific-depths-29780.herokuapp.com/${info.img}`} alt=""/>
                }
                
            </div>
            <div className="descriptions">
                <h3>{info.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa impedit fugit nam in non sequi totam! Suscipit architecto temporibus asperiores unde atque totam in. Soluta non expedita illum ullam.</p>
                <p className="text-danger">Monthly fee: $ {info.price}-------{info.duration}</p>
            </div>
            <Link to={`/book/${info._id}`}> <button className="btn-danger">Book Now</button></Link>   
        </div>
       
    );
};

export default ClassCard;