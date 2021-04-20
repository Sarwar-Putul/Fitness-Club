import React from 'react';
import logo from '../../../image/navlogo.png';
import './Navbar.css'

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span><img style={{height: '40px'}} src={logo} alt=""/></span> <span className="nav-title" style={{fontSize: '40px', color: 'white'}}>Fitness Club</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3 text-white" href="/login">Login</a>
                </li>


            </ul>
            
            </div>
        </div>
    </nav>
            
        
    );
};

export default Navbar;