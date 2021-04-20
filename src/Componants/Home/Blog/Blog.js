import React from 'react';
import { Link } from 'react-router-dom';
import model from '../../../image/model.png'
import './Blog.css'

const Blog = () => {
    return (
        <section className="blog">
            <div className="row d-flex ml-4">
                <div className="col-md-4 pl-5 pt-5">
                    <img  style={{height: '500px'}} src={model} alt=""/>
                </div>
                <div className=" blog-body col-md-8 mt-4 pt-5">
                    <div>
                        <h1>FITNESS AND HEALTH</h1>
                        <p style={{color: '#e84c3d', fontSize:'16px', fontWeight:'600'}}>A PLACE FOR YOUR FITNESS GOAL</p>
                    </div>
                    <div className="pt-5 pb-5">
                        <h4>TYPE SETTING REMAINING, ESSENTIALLY UNCHANGED ITS WAS POPULARISED</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quasi vero omnis corrupti, optio explicabo, commodi error eum repellendus exercitationem dolorum facilis. Aliquam nulla, praesentium rerum corporis ut illum dolorem molestiae totam soluta sint voluptatem, cum minus ullam similique quos et placeat quis optio eligendi ab ratione officiis perferendis? Aperiam?</p>
                    </div>
                    <Link to='/classes'><button className="btn-danger mb-5">BECOME A MEMBER</button></Link>
                </div>
            </div>
            
        </section>
    );
};

export default Blog;