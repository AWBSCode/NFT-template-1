import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='navbar'>

            {/* Logo */}
            <h1 className='logo'>Logo</h1>

            {/* Burger Menu */}
            <div className='burger-menu' onClick={toggleMenu}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>

            {/* List */}
            <ul className={`list ${showMenu ? 'show' : ''}`}>
                <li className='list-item'><Link to='/'>home</Link></li>
                <li className='list-item'><Link to='/about'>about</Link></li>
                <li className='list-item'><Link to='/blog'>blog</Link></li>
                <li className='list-item'><Link to='/collection'>collection</Link></li>
                <li className='list-item'><Link to='/contact'>contact</Link></li>
            </ul>
        </header>
    );
}
