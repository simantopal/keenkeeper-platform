import React from 'react';
import Img from '../../assets/logo-xl.png'
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-green-950'>
            <footer className="footer footer-horizontal footer-center container mx-auto p-10 text-white">
                <nav className="grid grid-cols-1 gap-4">
                    <img src={Img} alt="logo" />
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </nav>
                <nav>
                    <div className="grid grid-cols-1 gap-4">
                        <p className='font-medium text-xl'>Social Links</p>
                        <div className='flex gap-3'>
                            <a className='text-3xl'><RiInstagramFill /></a>
                            <a className='text-3xl'><FaFacebookSquare /></a>
                            <a className='text-3xl'><FaXTwitter /></a>
                        </div>                
                    </div>
                </nav>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-7'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex gap-6'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;