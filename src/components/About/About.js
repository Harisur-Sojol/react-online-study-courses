import React from 'react';
import aboutImage from '../../images/about.png'
import feedback from '../../images/feedback.png'
import infoArea from '../../images/info-area.webp'
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className='text-center mt-4 mb-5'>About <span className='about-title'>Us</span></h1>

            <div className='container'>
                <div className='row align-items-center mb-5'>
                    <div className='col-md-5'>
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className='col-md-7'>
                        <h3 className='pb-3 '>About Study</h3>
                        <p className='text-secondary fst-italic fw-normal'>The STUDY has started its journey towards achieving excellence in higher education all over the world. The STUDY was established in 2018 and still run with dignity. The courses are conducted by the teachers of world famous university.Students from about 15 countries are doing these courses. So far, the number of our students is more than 8 lakh 50 thousand.</p>
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
                        <p className='text-secondary fst-italic fw-normal'>You will take courses at STUDY because we have courses run by more than 69 teachers here.If a student gets stuck with a course here, we will take extra time to solve the problem through online.we have over 30 courses here.These courses will be conducted by more than 69 teachers</p>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col-md-9">
                        <h3>Our Mission</h3>
                        <p className='text-secondary fst-italic fw-normal'>The mission of STUDY is to produce competent graduates in their selected disciplines who will have productive careers or choose to engage in advanced studies.</p>
                        <h6>Our students will be:</h6>
                        <ul>
                            <li>Life-long learners with good leadership skills</li>
                            <li>More proficient in oral, written and electronic communication </li>
                            <li>Critical thinkers with well-developed analytical skills</li>
                            <li>Ethical and socially responsible</li>
                            <li>Champions of diversity and tolerance</li>
                            <li>Globally aware with commitment to social justice and sustainability</li>
                        </ul>
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