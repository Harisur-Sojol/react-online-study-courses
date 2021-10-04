import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-center mt-5'>CONTACT <span style={{ color: 'indianred' }}>US</span></h1>
            <p className='text-center'>Do You want any information and give feedback to us Please fill the text box and click to submit.</p>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-9">
                        <form>
                            <div className="mb-2">

                                <label for="exampleInputEmail1" className="form-label">Enter First Name:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-2">

                                <label for="exampleInputEmail1" className="form-label">Enter Last Name:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-2">

                                <label for="exampleInputEmail1" className="form-label">Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-2">
                                <label for="exampleInputPassword1" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;