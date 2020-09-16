import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="col-xl-11 mx-auto">
            <ul className="list-unstyled d-flex justify-content-center">
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block fb"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block instagram"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block linkedin"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block twitter"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block spotify"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block google-play"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block youtube"/>
                </li>
                <li className="social-icon">
                    <a href="" className="social-icon__link d-block apple"/>
                </li>
            </ul>
            <ul className="footer-menu d-flex justify-content-between list-unstyled flex-wrap position-relative">
                <li className="footer-menu__item">
                    <a href="" className="footer-menu__item__link text-decoration-none">About Us</a>
                </li>
                <li className="footer-menu__item">
                    <a href="" className="footer-menu__item__link text-decoration-none">Add Your Business & Deals For <span>FREE</span></a>
                </li>
                <li className="footer-menu__item">
                    <a href="" className="footer-menu__item__link text-decoration-none">Customer & Business App</a>
                </li>
                <li className="footer-menu__item">
                    <a href="" className="footer-menu__item__link text-decoration-none">Terms & Conditions</a>
                </li>
                <li className="footer-menu__item">© 2020 Mom&Pop. All rights reserved.</li>
            </ul>
        </footer>)
};

export default Footer;