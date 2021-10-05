import React from 'react';
import './Error.css'
import errorImage from '../../images/error.png'
const Error = () => {
    return (
        <>
        <div className='text-center error-area mt-5 mb-5'>
            <img className='error-img' src={errorImage} alt="" />
            <h3>Oops... Page Not Found!</h3>
            <p className="fs-5 text-secondary fw-normal">Sorry the page could not be found here</p>
            <i className="fas fa-exclamation-triangle"></i>
        </div>
        </>
    );
};

export default Error;