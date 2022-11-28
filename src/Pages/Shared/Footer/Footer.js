import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-12">
            <div className='footer p-10  text-gray-600'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Recondition</Link>
                    <Link to='' className="link link-hover">BMW</Link>
                    <Link to='' className="link link-hover">Mercedes Benz</Link>
                    <Link to='' className="link link-hover">Toyota</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='' className="link link-hover">About us</Link>
                    <Link to='' className="link link-hover">Contact</Link>
                    <Link to='' className="link link-hover">Jobs</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div>
                <p className='text-center py-10'>Copyright © 2022 - All right reserved by CAR HUT Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;