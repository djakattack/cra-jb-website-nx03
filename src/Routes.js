import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeContainer from './components/Home';
import MenuContainer from './components/Menu';
import NXContainer from './components/NX';

const myLinks = () => {
    return(
        <Router>
            <Routes>
            <Route path="/" element={ <HomeContainer /> } />
            <Route path="menu" element={ <MenuContainer />} />
            <Route path="nx" element={<NXContainer />} />
            </Routes>
        </Router>
    )
}

export default myLinks;