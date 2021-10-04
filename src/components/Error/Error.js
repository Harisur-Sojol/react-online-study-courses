import React from 'react';

const Error = () => {
    return (
        <div className='text-center mt-5 mb-5'>
            <h1>Page Not Found</h1>
            <h2>Error 404</h2>
            <h2 className="">The page You are Looking for is Unavailable!!!</h2>
            <p style={{fontSize: "25px"}} className='text-info'>Try Again</p>
        </div>
    );
};

export default Error;