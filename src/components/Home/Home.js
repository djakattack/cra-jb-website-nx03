import React from 'react';
import steak from '../../assets/images/IMG_1208.jpeg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro">
                <img src={steak} alt="steak"/>
            </div>
            <div className="lower">
                Hi
            </div>
        </div>
    )
}

export default Home;