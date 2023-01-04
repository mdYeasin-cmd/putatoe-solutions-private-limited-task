import React from 'react';
import logo from './../../assets/Logo/logo.png';
import './Navbar.css';
import { ImLocation } from 'react-icons/im';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IoIosChatbubbles } from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdKeyboardVoice } from 'react-icons/md';
import { GoSearch } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="flex-navbar">
                    <div className="logo">
                        <img className="logo-img" src={logo} alt="" />
                        <div className="company-info">
                            <h1 className="text-2xl font-bold">PUTATOE</h1>
                            <p className="company-title">One Solution</p>
                        </div>
                    </div>
                    <div className="location">
                        <ImLocation className='location-icon'></ImLocation>
                        <span className="location-name">Harhwa Fatak Nirala Nagar, Gorakhpur, ...</span>
                    </div>
                    <div className="search-box">
                        <div className="search-input">
                            <span className="search-icon flex items-center pl-2 bg-white">
                                <GoSearch className=""></GoSearch>
                            </span>
                            <input className="input-box" type="text" placeholder="Search for products and brands" />
                        </div>
                    </div>
                    <div className="buy-icon flex justify-center md:justify-start">
                        <IoIosChatbubbles className="navbar-icon"></IoIosChatbubbles>
                        <IoNotificationsSharp className="navbar-icon"></IoNotificationsSharp>
                        <AiOutlineShoppingCart className="navbar-icon"></AiOutlineShoppingCart>
                        <MdKeyboardVoice className="navbar-icon"></MdKeyboardVoice>
                    </div>
                    <div className="login-box">
                        <button className="login-btn">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;