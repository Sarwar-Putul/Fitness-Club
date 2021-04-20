import React from 'react';
import { Link } from 'react-router-dom';
import model from '../../../image/model2.png'
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 offset-md-1">
                <p className="Revelutionary">Revelutionary gym</p>
                <h1 className="title">THE BEST FITNESS</h1>
                <span className="grow">Grow your Strenght</span>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consectetur doloribus earum mollitia ducimus explicabo?</p>
                <Link to='/classes'><button style={{backgroundColor:'#e84c3d'}} className="btn-primary">BECOME A MEMBER</button></Link>
            </div>

            <div className="col-md-6 col-sm-6">
                <img style={{width:'798px', height:'620px'}} src={model} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;