import React from 'react';
import './Service.css';

const Service = (props) => {
    console.log(props.service)
    const { name, image, price } = props.service;

    return (
        <div className="col-md-4">
            <div className="card service-cards shadow ">
                <img className="service-img" src={image} alt="" />
                <div className="card-body ">
                    <h4>{name}</h4>
                    <div className='mt-5'>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <button className='bg-dark service-btn text-white'><i className='' class="fas fa-cart-plus"></i> Enroll Now</button>
                            <h5><span className='prices'>$ {price}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;