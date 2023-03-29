import React from 'react';
import FormPic from '../images/form-pic.svg';

export default function Form() {
    return(
        <div className='form-container'>
            <div className='text-side'>
                <h2 className='form-label'>Lets study together</h2>
                <p className='form-description'>Apply for consideration  your resume, we’ll give you feedback. Note: the time of application is unlimited, if you are invited to the training you can study at any time</p>
                <img className='form-pic' src={FormPic}  />
            </div>
            <div className='form-side'>
                <form className='form'>
                    <input type="text" id="name" name="user_name" placeholder="Name"></input>
                    <input type="email" id="mail" name="user_email" placeholder="Email"></input>
                    <textarea id="msg" name="user_message" placeholder="Type your message here"></textarea>
                </form>
                <button className='btn'>Submit</button>
            </div>
        </div>
    )
}