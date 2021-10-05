import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>CONTACT <span style={{ color: 'indianred' }}>US</span></h1>
            <p className=' text-center mt-4 fs-5 fst-italic fw-normal'>Do You want any information and  give feedback to us Please fill the text form and click to submit.</p>
            <div className='contact-form'>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-9">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label ">Enter First Name:</label>
                                    <input type="name" placeholder='First Name' className="form-control" id="exampleInputEmail1 " aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <label for="exampleInputEmail1" className="form-label ">Enter Last Name:</label>
                                    <input type="name" placeholder='Last Name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">

                                    <label for="exampleInputEmail1" className="form-label ">Email address:</label>
                                    <input type="email" placeholder='Your Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label ">Password:</label>
                                    <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button id='submit-btn' type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;