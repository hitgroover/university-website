import React from 'react';
import FooterLogo from '../images/footer-logo.svg';
import Behance from '../images/behance.svg';
import Facebook from '../images/facebook.svg';
import Insta from '../images/insta.svg';
import Reddit from '../images/reddit.svg';
import Linkedin from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import Google from '../images/google-footer.svg';
import SecondLogo from '../images/footer-second-logo.svg';

export default function Footer() {
    return(
        <div className='footer-container'>
            <div className='footer-wrap'>
                <div className='footer-options'>
                    <img className='footer-logo' src={FooterLogo} />
                    <ul className='footer-menu'>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>Facultyes</a></li>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>Grants</a></li>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>Dormitory</a></li>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>About</a></li>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>Academics</a></li>
                        <li className='menu-item'><a className='footer-menu-link' href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='main-footer-section'>
                    <ul className='footer-cities'>
                        <li className='cities-items'><a className='footer-cities-link' href='#'>Krakow</a></li>
                        <li className='cities-items'><a className='footer-cities-link' href='#'>Amsterdam</a></li>
                        <li className='cities-items'><a className='footer-cities-link' href='#'>Bali</a></li>
                        <li className='cities-items'><a className='footer-cities-link' href='#'>Krakow</a></li>
                        <li className='cities-items'><a className='footer-cities-link' href='#'>Kiev</a></li>
                    </ul>
                    <div className='social-part'>
                        <div className='websites'>
                            <a className='website-link' href='#'>www.eurouniversity.com</a>
                            <a className='website-link' href='#'>www.amsterdamunicity.com</a>
                            <ul className='social-icons'>
                                <li className='social-item'><a className='item-link' href='#'><img src={Behance} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Facebook} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Insta} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Reddit} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Linkedin} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Twitter} /></a></li>
                                <li className='social-item'><a className='item-link' href='#'><img src={Google} /></a></li>
                            </ul>
                        </div>
                        <img className='footer-second-logo' src={SecondLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}