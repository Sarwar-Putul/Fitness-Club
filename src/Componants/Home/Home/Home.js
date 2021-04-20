import React from 'react';
import Blog from '../Blog/Blog';
import Classes from '../Classes/Classes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Classes></Classes>
            <Blog></Blog>
            <Trainers></Trainers>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;