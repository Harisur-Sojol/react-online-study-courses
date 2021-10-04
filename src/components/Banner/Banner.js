import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id='banner' className='d-flex align-items-center'>
                <div className="container">
                    <div className="row ps-4">
                        <div className="col-md-6 mt-5">
                            <h3 className='title'>Welcome To Study</h3>
                            <h1 className='title'>The Best Learning Institution</h1>
                            <p className='title'>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which
                                don't look even slightly believable.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;