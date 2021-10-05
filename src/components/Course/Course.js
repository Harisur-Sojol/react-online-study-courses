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
                    <h5 className='mt-3'><span className='prices'>Price: $ {price}</span></h5>   
                </div>
                <div className='text-center'>
                    <button className='bg-dark course-btn text-white ps-3'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Course;