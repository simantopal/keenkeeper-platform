import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import Img from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = 
    <>
        <li><NavLink to={"/"} className={({isActive}) => `font-semibold px-4 py-3 mr-1 ${isActive ? "text-white bg-green-900" : ""}`}><RiHome2Line />Home</NavLink></li>
        <li><NavLink to={"timeline"} className={({isActive}) => `font-semibold px-4 py-3 mr-1 ${isActive ? "text-white bg-green-900" : ""}`}><IoTimeOutline />Timeline</NavLink></li>
        <li><NavLink to={"/stats"} className={({isActive}) => `font-semibold px-4 py-3 ${isActive ? "text-white bg-green-900" : ""}`}><TfiStatsUp />Stats</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-5 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <img src={Img} alt="logo" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;