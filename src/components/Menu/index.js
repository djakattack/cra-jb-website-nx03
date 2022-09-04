import React from 'react';
import Menu from './Menu';


const MenuContainer = () => {
    return (
        <div>
            <div className="menu-container__nav">
                <ul>
                    <li>
                        <a href="#Appetizers">Appetizers</a>
                    </li>
                    <li>
                        <a href="#Lunch">Lunch</a>
                    </li>
                    <li>
                        <a href="#Steaks">Steaks</a>
                    </li>
                    <li>
                        <a href="#Salad">Salad</a>
                    </li>
                    <li>
                        <a href="#Sides">Sides</a>
                    </li>
                    <li>
                        <a href="#Desserts">Desserts</a>
                    </li>
                </ul>
            </div>
            <Menu/>
        </div>
    )
}

export default MenuContainer