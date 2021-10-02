import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/mvstream_logo.png';
import './Nav.css';

function Nav() {
    const [Show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className={`nav ${Show && "nav__black"}`}>
            <Link to="/">
                <img className="nav__logo" src={Logo} alt="mvstream" style={{width:"200px"}} />
            </Link>
        </div>
    )
}

export default Nav
