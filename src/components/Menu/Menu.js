import React from 'react';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Salad from "./Salad";
import Steaks from './Steaks';
import Sides from './Sides';
import Desserts from './Desserts';


const Menu = () => {
    return (
        <main className="menu-container">
            <h1>Menu</h1>
            <Appetizers />       
            <Salad />
            <Sides />
            <Desserts />
            <Steaks />
            <Lunch />
            <Dinner />
        </main>
    )
};

export default Menu