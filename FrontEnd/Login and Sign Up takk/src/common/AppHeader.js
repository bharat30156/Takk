import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import "./nav-bar.css";

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="takk-logo-yellow-2-parent">
                    <div className="app-branding">
                        <Link to="/" className="app-title">
                            <img
                            className="takk-logo-yellow-2"
                            alt=""
                            src="../takk-logo--yellow-2@2x.png"
                            />
                        </Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <div className="get-fundraise-parent">
                                        <li>
                                        <button className="get-fundraise">Get Fundraise</button>        
                                        </li>
                                        <li>
                                        <button className="donate">Donate</button>        
                                        </li>
                                        <li>
                                        <button className="community">Community</button>       
                                        </li>
                                        </div>
                                        <input className="frame-input" type="text" placeholder="Search" />
                                         <div className="image-6-wrapper">
                                         <img className="image-6-icon" alt="" src="../image-6@2x.png" />
                                         </div>
                                        <li>
                                            <NavLink to="/login"><button className="login">LOGIN</button></NavLink>        
                                        </li>
                                        <li>
                                        <button className="group-button">
                                                <button className="rectangle-button" />
                                        </button>
                                            <NavLink to="/signup"><button className="sign-up">SIGN UP</button></NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;