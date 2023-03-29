import React from 'react';
import Logo from '../images/main-logo.svg'

export default function Header() {
    return(
        <div className='header-container'>
            <img className='header-logo-main' src={Logo} alt='university logo' />
            <ul className='header-menu'>
                <li className='menu-items'>
                    <a href='#' className='menu-link'>About</a>
                </li>
                <li className='menu-items'>
                    <a href='#' className='menu-link'>Academics</a>
                </li>
                <li className='menu-items'>
                    <a href='#' className='menu-link'>Contact</a>
                </li>
            </ul>
        </div>
    )
}