import React from 'react';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Salad from "./Salad";
import Steaks from './Steaks';
import Sides from './Sides';
import Desserts from './Desserts';

const Menu = () => {
    return (
        <main className="menu-container">
            <div>
                <div className="buffer-2"></div>
                <Appetizers />       
                <Lunch />
                <Steaks />
                <Salad />
                <Sides />
                <Desserts />
            </div>
            <div className="buffer"></div>
        </main>
    )
};

export default Menu