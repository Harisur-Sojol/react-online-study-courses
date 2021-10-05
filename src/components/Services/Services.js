import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setServices(data.slice(4, 12)))
    }, [])

    return (
        <div>
            <h1 className='services-full-title text-center m-4'>OUR <span className='services-half-title'>Courses</span></h1>
            <p className='text-center text-secondary fs-5 fw-normal mb-5'>These courses will be conducted by more than 69 teachers.You can enroll in these courses if you want.</p>
            <div className='services-area'>
                <div className="container">

                    <div className="row g-4">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;