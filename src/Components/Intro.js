import React from 'react';
import IntroPic from '../images/intro-img.png';
import IntroArr from '../images/arrow-squared.svg';
import IntroSegment from '../images/red-segment.svg';
import IntroRect from '../images/green-rect.svg';
import IntroVidArr from '../images/arrow-intro-video.svg';
import IntroNextPic from '../images/arrow-squared-begining.svg'


export default function Intro() {
    return(
        <div className='intro-container'>
            <div className='intro-text-part'>
                <h2 className='intro-text'>2023 | About us</h2>
                <h1 className='intro-heading'>Visual<br /> history</h1>
                <p className='intro-discription'>The Greatest temple of art that creates<br /> the future of Design and Art</p>
                <div className='intro-btn-links'>
                    <a className='intro-link-more' href='#'>more</a>
                    <a className='intro-link-video' href='#'>watch video</a>
                </div>
            </div>
            <div className='intro-img-part'>
                <div className='intro-slider-icons'>
                    <img className='intro-arrow' src={IntroArr} />
                    <img className='intro-segment' src={IntroSegment} />
                </div>
                <img className='intro-img' src={IntroPic} />
                <div className='intro-slider-bottom'>
                    <img className='intro-rect' src={IntroRect} />
                    <img className='intro-video-arrow' src={IntroVidArr}  />
                </div>
                <img className='intro-next-pic' src={IntroNextPic}  />
            </div>
        </div>
    )
}