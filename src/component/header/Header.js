import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <h3>ABC Online School</h3>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className="container">
                    <a href="/about-us">About us</a>
                    <a href="/courses">Courses</a>
                    <a href="contact">Contact</a>
                </div>
                <a href="/cart"><i class="fa fa-shopping-cart"> 0</i></a>
            </nav>
        </div>
    );
};

export default Header;