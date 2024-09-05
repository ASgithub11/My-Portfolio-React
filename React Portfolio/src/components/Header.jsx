import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Aisha Siddiqa</h1>
            <nav>
                <NavLink exact to="/" activeClassName= "active-link">About Me</NavLink>
                <NavLink to="/portfolio" activeClassName= "active-link">Portfolio</NavLink>
                <NavLink to="/contact" activeClassName= "active-link">Contact</NavLink>
                <NavLink to="/resume" activeClassName= "active-link">Resume</NavLink>
            </nav>
        </header>
    );
}

export default Header;
