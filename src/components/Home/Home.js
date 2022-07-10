import React from 'react';
import logo from '../../assets/images/logo-black.png';

const Home = () => {
    return (
        <div>
            <div className="logo-main">
            <img src={logo} alt="logo"/>
            </div>
            <p>
            Johnny Bull's Steakhouse
            </p>
            <p>
            <i>a great meal is around the corner!</i>
            </p>
        </div>
    )
}

export default Home;