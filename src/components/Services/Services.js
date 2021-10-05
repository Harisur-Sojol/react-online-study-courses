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
            <h1 className='services-full-title text-center m-4'>OUR <span className='services-half-title'>SERVICES</span></h1>
            <h4 className='text-center text-secondary mb-5'>We also serve these course for you and we will arrange a orientation class for these courses</h4>
            <div className="container">

                <div className="row g-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;