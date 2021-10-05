import React from 'react';
import aboutImage from '../../images/about.png'
import feedback from '../../images/feedback.png'
import infoArea from '../../images/info-area.webp'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-center m-5'>About <span className='about-title'>Us</span></h1>

            <div className='container'>
                <div className='row align-items-center mb-5'>
                    <div className='col-md-5'>
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className='col-md-7'>
                        <h3 className='pb-3 '>About Study</h3>
                        <p className='text-secondary fst-italic fw-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, architecto non voluptatibus perspiciatis consequuntur placeat laudantium. Incidunt fuga impedit assumenda!</p>
                        <button className='learn-now-btn'>Learn Now</button>
                    </div>
                </div>
                <div className="row align-items-center">

                    <div className="col-md-7">
                        <h3 className=''>Our Learners Feedback</h3>
                        <p className='text-secondary fst-italic fw-normal'> It's Had been a fear most experience me that I feel a great
                            assumption that never thoughts that will happens to But
                            great provocatives things appropities received without
                            realmost qualifier that happen that never thoughts that will happensto a fear most
                            experience. </p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                    <div className="col-md-5">
                        <img className='feedback-img' src={feedback} alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-7">
                        <h3>Why Choose Study</h3>
                        <p className='text-secondary fst-italic fw-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique,       debitis adipisci facere quaerat sit culpa! Explicabo id repellendus exercitationem dicta       architecto reprehenderit tenetur eveniet voluptas magnam, quam laudantium fuga?</p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col-md-9">
                        <h3>Our Mission</h3>
                        <p className='text-secondary fst-italic fw-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, culpa ducimus. Vitae, necessitatibus voluptatem quam expedita vero id natus praesentium. Dicta dolor explicabo rem reiciendis eos! Assumenda voluptas sed perferendis iure exercitationem neque, esse inventore aut dicta doloribus atque unde.</p>
                    </div>
                </div>
            </div>
            <div className="info-area">
                <div className="container mt-4 ">
                    <div className="row pt-4">
                        <div className="col-md-3 ">
                            <h2 className='text-white fs-1'>69+</h2>
                            <h4 className='text-white'>Teachers</h4>
                        </div>
                        <div className="col-md-3">
                            <h2 className='text-white fs-1'>850+</h2>
                            <h4 className='text-white'>Students</h4>
                        </div>
                        <div className="col-md-3">
                            <h2 className='text-white fs-1'>30+</h2>
                            <h4 className='text-white'>Courses</h4>
                        </div>
                        <div className="col-md-3">
                            <h2 className='text-white fs-1'>15+</h2>
                            <h4 className='text-white'>Countries</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;