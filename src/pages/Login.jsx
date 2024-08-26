import React from 'react';
import playlist from "../assets/video-playlist.png";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Login = () => {

    const navigate = useNavigate();

    const handleBack = () => navigate(-1)
    return (
        <div className='landing'>
            <div className="landing-wrapper">
                <div className="landing-container auth-container">
                    <div className='landing-header'>
                        <IoArrowBackCircleOutline size={30} onClick={handleBack} className='landing-back'/>
                    </div>
                    <div className="landing-logo">
                        <img className='landing-title-icon' src={playlist}></img>
                        <h3 className='landing-title'>Login Account</h3>
                    </div>
                    <form className='auth-form'>
                        <div className="form-fields">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' placeholder='Enter Email' className='auth-input'/>
                        </div>
                        <div className="form-fields">
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' placeholder='Enter Password' className='auth-input'/>
                        </div>
                        <div className="text-right">
                            <Link to="/forget-password" className='forget-password'>Forget Password!</Link>
                        </div>
                        <button className='auth-btn'>LOGIN</button>
                    </form>
                </div>
                <hr className='landing-hr' />
                <div className='landing-bottom'>
                    <p>Not a member ? <Link to="/register" className='bottom-link'>Create account</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login