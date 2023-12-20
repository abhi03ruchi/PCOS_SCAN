import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import pic1 from './pic1.png';
import {signOut} from 'firebase/auth';
import { database } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const history = useNavigate();

    const handleClick = () => {
      signOut(database).then((val) => {
        console.log(val, "val");
        history('/login');
      });
    };
    return (
        <>
            <header className="l-header">
                <nav className="nav bd-contain">
                    <a href="#home" className="nav__logo">
                        <div className="nav__img"
                            data-aos="fade-right"
                            data-aos-duration="500">
                            <img src={pic1} alt="" />
                        </div>
                    </a>
                    <div className='nav__menu' id="nav-menu">
                        <ul className="nav__list" >
                            <li className="nav__item"><a href='#about' className="nav__link ">About</a></li>
                            <li className="nav__item"><a href='#features' className="nav__link ">Features</a></li>
                            <li className="nav__item"><a href='#team' className="nav__link ">Team</a></li>
                            <li className="nav__item"><Link to='/login' className="nav__link">Sign In</Link></li>
                            <li className="nav__item"><Link to='/' className="nav__link" onClick={handleClick}>Sign Out</Link></li>
                        </ul>
                    </div>
                    <Toggle />
                </nav>
            </header>
        </>
    )
}

export default Navbar;
