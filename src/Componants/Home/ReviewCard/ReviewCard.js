import React from 'react';
import './ReviewCard.css'
import photo from '../../../image/classesBg.png'



const ReviewCard = ({review}) => {


    return (
        <div className="review-card col-md-3 text-center mb-4 mr-3 ">
            <div>
                <h5>{review.name}</h5>
                <h6>{review.email}</h6>
            </div>
            <div>
                <p>{review.message}</p>
            </div>
        </div>
    );
};

export default ReviewCard;