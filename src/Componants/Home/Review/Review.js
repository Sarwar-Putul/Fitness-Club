import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    const [reviewData, setReviewData] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviewData(data))
    }, []);
    return (
        <section className='review'>
                <div className='text-center pt-5 pb-5'>
                    <h1>Public Review</h1>
                    <h4>Every opinion dose matter</h4>
                </div>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {
                            reviewData.map(review => <ReviewCard review={review}></ReviewCard>)
                        }
                    </div>
                </div>
            
            
        </section>
    );
};

export default Review;