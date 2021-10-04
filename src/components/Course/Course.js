import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, image, price} = props.course;
    return (
        <div className="col-md-4">
            <div className="card course-cards shadow ">
                <img className="course-img" src={image}alt="" />
                <div className="card-body ">
                    <h4>{name}</h4>
                    
                </div>
                <div className='d-flex d-flex align-items-center justify-content-between'>
                    <button className='bg-dark course-btn text-white ps-3'><i class="fas fa-cart-plus"></i> Enroll Now</button>
                    <h5><span className='prices pe-3'>$ {price}</span></h5>
                </div>
            </div>
        </div>
    );
};

export default Course;