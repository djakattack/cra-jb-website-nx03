import React from 'react';
import logo from '../../assets/images/logo-white.png';

const Nav = () => {
    return (
        <div className="container">
            <img src={logo} alt="alt" className="logo" />
            <div id="navigation-bar">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;