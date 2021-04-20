import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Sidebar from '../Admin/SideBar/Sidebar';
import BookingHolder from '../BookingHolder/BookingHolder';


const BookingList = () => {
    const [user, setUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/book/${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, []);
    return (
        <div className="row" style={{backgroundColor:'#ADF10F'}}>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div>
                    <div style={{width: '850px',  marginLeft:'300px'}} className="pt-5">
                        <h1 style={{ backgroundColor:'yellowgreen', textAlign: 'center', color:'white'}}>Your Booking List</h1>
                        <Table style={{ backgroundColor:'#e84c3d', color:'white'}}>
                                <thead>
                                    <tr className=" text-center">
                                        <th style={{width:'180px'}}>Email</th>
                                        <th style={{width:'180px'}}>Name</th>
                                        <th style={{width:'100px'}}>duration</th>
                                        <th style={{width:'140px'}}>Price</th>
                                        <th style={{width:'200px'}}>Date</th>
                                        <th style={{width:'100px'}}>Payment</th>
                                        <th style={{width:'100px'}}>Status</th>
                                    </tr>
                                </thead>
                        </Table> 
                    </div>
                    <div>
                    {
                        bookings.length >0 && bookings.map(booking =><BookingHolder booking={booking}></BookingHolder>)
                    }
                    </div>
                </div>
                    
                    
        </div>
           
    );
};

export default BookingList;