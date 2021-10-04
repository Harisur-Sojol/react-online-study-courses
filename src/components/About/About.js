import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-center m-5'>About <span className='about-title'>Us</span></h1>

            <div className='container'>
                <div className='row'>
                    <div className="col-md-7">
                        <h2>Why choose Study</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique,       debitis adipisci facere quaerat sit culpa! Explicabo id repellendus exercitationem dicta       architecto reprehenderit tenetur eveniet voluptas magnam, quam laudantium fuga?</p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-9">
                        <h2>Our Vision</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, culpa ducimus. Vitae, necessitatibus voluptatem quam expedita vero id natus praesentium. Dicta dolor explicabo rem reiciendis eos! Assumenda voluptas sed perferendis iure exercitationem neque, esse inventore aut dicta doloribus atque unde.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <h2 className='feedback-title'>Our Learners Feedback</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio voluptate libero eveniet nemo itaque odit, maiores, quidem sequi ratione modi magnam recusandae repellendus obcaecati. Voluptates voluptas id cupiditate ipsam?</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <p className='text-info mb-1'>MORE ABOUT COMPANY</p>
                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;