import React from 'react';
import playlist from "../assets/video-playlist.png";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Register = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1)
    return (
        <div className='landing'>
            <div className="landing-wrapper">
                <div className="landing-container auth-container">
                    <div className='landing-header'>
                        <IoArrowBackCircleOutline size={30} onClick={handleBack} className='landing-back' />
                    </div>
                    <div className="landing-logo">
                        <img className='landing-title-icon' src={playlist}></img>
                        <h3 className='landing-title'>Create Account</h3>
                    </div>
                    <form className='auth-form'>
                        <div className="form-fields">
                            <label htmlFor="name">Channel Name</label>
                            <input type="text" name='name' id='name' placeholder='Enter Channel' className='auth-input' />
                        </div>
                        <div className="form-fields">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Enter Email' className='auth-input' />
                        </div>
                        <div className="form-fields">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name='phone' id='phone' placeholder='Enter Phone number' className='auth-input' />
                        </div>
                        <div className="form-fields">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Enter Password' className='auth-input' />
                        </div>
                        <button className='auth-btn auth-create'>CREATE</button>
                    </form>
                </div>
                <hr className='landing-hr' />
                <div className='landing-bottom'>
                    <p>Already have an account? <Link to="/login" className='bottom-link'>Login here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register