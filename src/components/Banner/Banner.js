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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;