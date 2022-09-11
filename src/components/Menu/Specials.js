import React from 'react';

const Specials = () => {
    return (
        <div className="container">
            <h1>Weekly Specials</h1>
            <h2>Monday</h2>
            <h6>Lunch</h6>
            <p>Grilled Chicken or Porck Chop entrée with side and salad bar. <span className="price">$8.99</span></p>
            <h6>Dinner</h6>
            <p>Grilled Chicken or Pork Chop entrée with side and salad bar. <span className="price">$9.99</span></p>
            
            <h2>Tuesday</h2>
            <h6>Lunch</h6>
            <p>Barbecue Chicken plate with choice of two sides (boiled potatoes, green beans, or slaw) <span className="price">$8.99</span></p>
            <h6>Dinner</h6>
            <p>Salad bar with any seafood entrée (Tilapia, Shrimp, Scallops, or Salmon) <span className="price">from $15.99</span></p>
            
            <h2>Wednesday</h2>
            <h6>Lunch</h6>
            <p>Country style steak with gravy and choice of two sides (mashed potatoes, corn pudding, or gren beans) <span className="price">$8.99</span></p>
            <h6>Dinner</h6>
            <p>FREE skewer of shrimp with any steak entrée (excludes Chopped Steak) <span className="price">from $16.99</span></p>

            <h2>Thursday</h2>
            <p>
                Alfredo with Salad bar <span className="price">$7.99</span><br/>
                add Chicken <span className="price">$2.99</span><br/>
                add Shrimp <span className="price">$3.99</span><br/>
                add Steak <span className="price">$4.99</span><br/>
            </p>

            <p>Spaghetti with Salad bar <span className="price">$8.99</span></p>

            <h2>Friday</h2>
            <h6>Lunch</h6>
            <p>Ask your server about our featured Friday special!</p>
            <p></p>
        </div>
    )
};

export default Specials