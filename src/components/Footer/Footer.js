import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer mt-5 mb-2 p-3 w-100'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white">
                            <h2>STUDY </h2>
                            <p className='study-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                                Repellat, fugit nihil. Fugiat illum quos <br /> corrupti dignissimos. Voluptate iusto totam maiores ad eum odit corrupti <br /> sint explicabo. Repudiandae esse totam hic.</p>
                        </div>
                        <div className="col-md-4 text-white">
                            <h2 className="mb-3">GET IN TOUCH</h2>

                            <div className='d-flex '>
                                <div className="pe-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <p className='footer-info'>+88 018 785 4589</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="pe-3">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div>
                                    <p className='footer-info'>devitems@email.com</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="pe-3">
                                    <i className="fas fa-globe-americas"></i>
                                </div>
                                <div>
                                    <p className='footer-info'>www.abc.com</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="pe-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <p className='footer-info'>Road No:"112",Building No: "56" Munabbor shaha Building, Chowhali,Sirajgong.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 style={{color: "white"}}>USEFUL LINKS</h2>
                            <ul className="footer-useFull-links">
                                <li>Teachers  Staff</li>
                                <li>Our Courses</li>
                                <li>Courses Categories</li>
                                <li>Support</li>
                                <li>Terms  Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
