import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;