import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Admin/SideBar/Sidebar';
import PaymentSystem from '../PaymentSystem/PaymentSystem';
import '../PaymentSystem/CheckoutForm.css';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    
    const [lesson, setLesson] = useState({name:"", price:""});

    useEffect(() => {
        fetch(`https://pacific-depths-29780.herokuapp.com/class/${id}`)
        .then(res => res.json())
        .then(data => setLesson(data))
        
    }, [id]);

const [transactionDetails, setTransactionDetails]=useState(null)

    const handleBooking = () => {
        const {name,price,duration, status, paymentMethod}=lesson;
           const bookingPlacement = {...loggedInUser, name, price, duration, paymentMethod,transactionDetails, status, date: new Date()};
           fetch('https://pacific-depths-29780.herokuapp.com/booking', {
               method: 'POST',
               headers: {'content-type': 'application/json'},
               body: JSON.stringify(bookingPlacement)
           })
           .then(res => res.json())
           .then(data => {
               if(data){
                   alert('Your Booking placed successfully');
               }
           })
       }


    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8">
                <div style={{display: transactionDetails ? 'block': 'none' }} className="col-md-col- ml-5">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>Duration</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{lesson.name}</td>
                                <td>{lesson.duration}</td>
                                <td>$ {lesson.price}</td>
                                <td>$ {lesson.status}</td>
                            </tr>
                            <button className="btn-success" onClick={handleBooking}>Checkout</button>
                        </tbody>
                    </Table>            
                </div> 
                <div style={{display: transactionDetails ? 'none': 'block' }} className="col-md- ml-5">
                    <h3 style={{backgroundColor:'lightblue', color:'#3b4854'}}>Dear <span style={{color:'red'}}>{loggedInUser.name}</span> you select <span style={{color:'red'}}>{lesson.name}</span>, You have to pay <span style={{color:'red'}}>$ {lesson.price}</span> for the selected class. </h3>
                    <PaymentSystem setTransactionDetails={setTransactionDetails}></PaymentSystem>   
                </div> 
            </div>
            
        </div>
    );
};

export default Book;