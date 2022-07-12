import React from 'react';
import Appetizers from "./Appetizers";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Salad from "./Salad";
import Specials from "./Specials";
import Soups from "./Soups";

const Menu = () => {
    return (
        <main className="menu-container">
            <div className='menu'>
                <h1 className="menu__name">Menu</h1>
            </div>
            
            <Appetizers />
            <Lunch />
            <Dinner />
            <Salad />
            <Specials />
            <Soups />
            
            <p className="info"> 
                Johnny Bull's Steakhouse<br/>
                32 Golden Leaf Dr<br/>
                Louisburg, NC 27549<br/><br/>

                Phone: (919)496-3800
            </p>

        </main>
    )
};

export default Menu