import React from 'react';
import Orange from '../images/blood-orange.png';
import Pack from '../images/abstract-pack.png';
import Magazine from '../images/magazine.png';
import TableBook from '../images/table-book.png';
import OpenBook from '../images/open-book.png';
import BookShelf from '../images/book-shelf.png';

export default function News() {
    return(
        <div className='news-container'>
            <h2 className='news-label'>Art News</h2>
            <div className='news-pics'>
                <a className='news-link' href='#'>
                    <img className='news-image' src={Orange}  />
                    <h2 className='news-description'>Poligraphy 2023, The best style...</h2>
                </a>
                <a className='news-link' href='#'>
                    <img className='news-image' src={Pack}  />
                    <h2 className='news-description'>History of Abstract: The Fashio...</h2>
                </a>
                <a className='news-link' href='#'>
                    <img className='news-image' src={Magazine}  />
                    <h2 className='news-description'>Student in 2023, How will a futu...</h2>
                </a>
                <a className='news-link' href='#'>
                    <img className='news-image' src={TableBook}  />
                    <h2 className='news-description'>New book about photography...</h2>
                </a>
                <a className='news-link' href='#'>
                    <img className='news-image' src={OpenBook}  />
                    <h2 className='news-description'>Travel to Mexico. Who will go and...</h2>
                </a>
                <a className='news-link' href='#'>
                    <img className='news-image' src={BookShelf}  />
                    <h2 className='news-description'>New disciplines </h2>
                </a>
            </div>
        </div>
    )
}