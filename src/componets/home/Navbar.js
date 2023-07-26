import React, { useState } from 'react';
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
                <li className='list-item'>Home</li>
                <li className='list-item'>About</li>
                <li className='list-item'>blog</li>
                <li className='list-item'>Collection</li>
                <li className='list-item'>Contact</li>
            </ul>
        </header>
    );
}
