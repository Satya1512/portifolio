import React from "react";
import logo from "./images/logo.png";
import homeimg from "./images/homeimg.png";
import twitImg from "./images/twitter.png";
import fbImg from "./images/fb1.png";
import instaImg from "./images/instagram.png";
import { Link } from 'react-router-dom';
import './index.css';
function login() {
    return (
        <div className='container'>
            <div className="register">
                <div className='row'>
                    <div className='col-6'>
                        <div class="logoimg">
                            <img src={logo} alt="logo" height="30px" width="30px" />
                        </div>
                        <div class="homeimg">
                            <img src={homeimg} alt="logo" height="350px" width="400px" />
                        </div>
                    </div>
                    <div className='col-5'>
                        <div className='right-side'>
                            <div class="mb-3">
                                <label class="form-lable">Email Address:</label>
                                <input type='text' class="form-control" placeholder='Enter Email Address' />
                            </div>
                            <div class="mb-3">
                                <label class="form-lable password-css">Password:</label>
                                <input type='password' class="form-control" placeholder='Password' />
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label forget">Remember</label>
                                    Forgot password?
                                </div>
                            </div>
                            <button className="btn btn-warning login-size">LOGIN</button>
                            <div className="text-register">Don't have  an account?<Link to="/register" className = "regi"><span className="register-color">Register</span></Link></div>
                            <div className="social-media">
                                <img src={fbImg} alt="fblogo" width="50px" />
                                <img src={twitImg} alt="twitterlogo" height="50px" width="50px" />
                                <img src={instaImg} alt="fblogo" width="50px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login;