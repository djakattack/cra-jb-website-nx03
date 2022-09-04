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
            <div className="menu-container__buffer">
                <a id="Appetizers"></a>
                <Appetizers />       
                <a id="Lunch"></a>
                <Lunch />
                <a id="Steaks"></a>
                <Steaks />
                <a id="Salad"></a>
                <Salad />
                <a id="Sides"></a>
                <Sides />
                <a id="Desserts"></a>
                <Desserts />
            </div>
            <div className="buffer"></div>
        </main>
    )
};

export default Menu