import React from 'react';
import Design from '../images/design.svg';
import History from '../images/history.svg';
import Art from '../images/art.svg';

export default function Sections() {
    return(
        <div className='sections-container'>
            <a className='section-link' href='#'>
                <div className='sections-item'>
                    <img className='sections-img' src={Design} />
                    <h2 className='sections-name'>Design</h2>
                    <p className='sections-description'>The Faculty of Design offers modern teaching technologies in IT and applied fields</p>
                </div>
            </a>
            <a className='section-link' href='#'>
                <div className='sections-item'>
                    <img className='sections-img' src={History} />
                    <h2 className='sections-name'>History</h2>
                    <p className='sections-description'>Faculty of History presents a huge collection of knowledge about the history of design and art</p>
                </div>
            </a>
            <a className='section-link' href='#'>
                <div className='sections-item'>
                    <img className='sections-img' src={Art} />
                    <h2 className='sections-name'>Art</h2>
                    <p className='sections-description'>Faculty of Art offers the creation of new artistic preferences in drawing, painting </p>
                </div>
            </a>
        </div>
    )
}