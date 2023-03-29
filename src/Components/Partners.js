import React from 'react';
import Google from '../images/google.svg';
import Nike from '../images/nike.svg';
import Samsung from '../images/samsung.svg';
import Apple from '../images/apple.svg';
import Intercom from '../images/intercom.svg';
import Adidas from '../images/adidas.svg';

export default function Partners() {
    return(
        <div className='partners-container'>
            <img className='partners-logo' src={Google} />
            <img className='partners-logo' src={Nike} />
            <img className='partners-logo' src={Samsung} />
            <img className='partners-logo' src={Apple} />
            <img className='partners-logo' src={Intercom} />
            <img className='partners-logo' src={Adidas} />
        </div>
    )
}