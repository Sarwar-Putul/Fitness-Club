import { faCalendar, faCog, faFileAlt, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isTrainer, setIsTrainer] = useState(false);

    useEffect(() => {
        console.log(loggedInUser.email)
        fetch('https://pacific-depths-29780.herokuapp.com/isTrainer', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setIsTrainer(data)
            console.log(data)
        });
        
    }, []);
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/book/:id" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
                    </Link>
                </li>
                
                
            {isTrainer && <div>
                <li>
                    <Link to="/addClass" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Add Class</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addTrainer" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Add Trainer</span>
                    </Link>
                </li>
                <li>
                    <Link to="/classManager" className="text-white" >
                        <FontAwesomeIcon icon={faCog} /> <span>Manage Class</span>
                    </Link>
                </li>
            </div> }
                
            </ul>
            <div>
                <Link to="/" onClick={() => setLoggedInUser({})}  className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;