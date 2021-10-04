import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo/logo1.png.png"
import './MenuBar.css'
const MenuBar = () => {
    return (
        <>
            <div className= 'menuBar mt-0'>
                <div className='container'>
                    <div className="row align-items-center w-100">
                        <div className="col-md-2">
                            <div className='logo-img'>
                                <img className='w-60' src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            {/* <div className="menu-container "> */}
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About Us</li>
                                </Link>
                                <Link to="/contact" className="items">
                                    <li>Contact Us</li>
                                </Link>
                            </ul>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuBar;