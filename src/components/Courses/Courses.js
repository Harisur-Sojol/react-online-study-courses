import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    return (
        <div className='m-4'>
            <h2 className="mt-5 text-center">OUR <span style={{ color: 'indianred' }}>DEPARTMENTS</span></h2>
            <p className='mb-4 mt-3 text-center fs-5 text-secondary fst-italic fw-normal'>You can see all of our departments</p>
            <div className="container">

                <div className="row g-4">
                    {
                        courses?.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;