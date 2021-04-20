import React from 'react';
import { Table } from 'react-bootstrap';

const BookingHolder = ({booking}) => {
    return (
        <div style={{width: '850px',  marginLeft:'300px'}}>
             <Table style={{ backgroundColor:'green', color:'white'}}>
                    <thead>
                        <tr className="">
                            <th style={{width:'180px', fontSize:"10px"}}>{booking.email}</th>
                            <th style={{width:'180px', fontSize:"10px"}}>{booking.name}</th>
                            <th style={{width:'100px', fontSize:"10px"}}>{booking.duration}</th>
                            <th style={{width:'140px', fontSize:"10px"}}>${booking.price}</th>
                            <th style={{width:'200px', fontSize:"10px"}}>{booking.date}</th>
                            <th style={{width:'100px', fontSize:"10px"}}>{booking.transactionDetails.card.brand}</th>
                            <th style={{width:'100px', fontSize:"10px"}}>{booking.status}</th>
                        </tr>
                    </thead>
            </Table> 
        </div>
    );
};

export default BookingHolder;