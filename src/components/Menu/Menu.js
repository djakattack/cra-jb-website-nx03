import React from 'react';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Salad from "./Salad";
import Steaks from './Steaks';
import Dinner from './Dinner';
import Specials from './Specials';
import Seafood from './Seafood';
import Sides from './Sides';
import Desserts from './Desserts';

const Menu = () => {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentTime = currentDate.getHours();
    let shift;
    let isLunch;

    if(currentTime < 15){
        shift = "lunch";
    }
    if(currentDay === 0){
        shift = "dinner";
    }
    if(currentDay === 6){
        shift = "dinner";
    };

    if(shift === "lunch"){
        isLunch = true
    } else{
        isLunch = false
    };

    return (
        <main className="menu-container">
            <div>
                <div className="buffer-2"></div>
                <Salad />
                { isLunch ? <Lunch /> : <Dinner />}
                <Steaks />
                <Appetizers />       
                <Seafood />
                <Sides />
                <Desserts />
            </div>
            <div className="buffer"></div>
        </main>
    )
};

export default Menu