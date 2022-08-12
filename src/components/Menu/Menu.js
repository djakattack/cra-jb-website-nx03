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
                <Specials />
                <Soups />
                
                <p> 
                    Johnny Bull's Steakhouse<br/>
                    32 Golden Leaf Dr<br/>
                    Louisburg, NC 27549<br/><br/>

                    Phone: (919)496-3800
                </p>
            </div>
        </main>
    )
};

export default Menu