import React from 'react';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Salad from "./Salad";
import Specials from "./Specials";
import Soups from "./Soups";
import Steaks from './Steaks';
import Sides from './Sides';
import Desserts from './Desserts';


const Menu = () => {
    return (
        <main className="menu-container">
                <h1>Menu</h1>
            <div>
                <div className="menu">
                <Appetizers />
                </div>            
                <Salad />
                <Sides />
                <Desserts />
                <Steaks />
                <Lunch />
                <Dinner />
            </div>
        </main>
    )
};

export default Menu