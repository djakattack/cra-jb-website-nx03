import React from 'react';

const Specials = () => {
    return (
        <div className="card">
            <h1>Specials</h1>
                <h2>Monday</h2>
                <p>Grilled Chicken or Pork Chop entrée with side and salad bar. <span className="price">$10.99</span></p>

                <h2>Tuesday</h2>
                <h3>Lunch</h3>
                <p>Barbecue Chicken plate with choice of two sides <span className="price">$10.99</span></p>
                <h3>Dinner</h3>
                <p>Salad bar with seafood entrées (excludes Fish and Chips and Seafood Lover's Combination) <span className="price">from $19.99</span></p>

                <h2>Wednesday</h2>
                <h3>Lunch</h3>
                <p>Country style steak with gravy and choice of two sides <span className="price">$10.99</span></p>
                <h3>Dinner</h3>
                <p>FREE skewer of shrimp with steak entrées<br/><p class="disclaimer">(Excludes Chopped Steak and Baby Bull)</p><br/><span className="price">from $16.99</span></p>

                <h2>Thursday</h2>
                <p>
                    Alfredo with Salad bar <span className="price">$9.99</span><br/>
                    add Chicken or Shrimp <span className="price">$3.99</span><br/>
                </p><br/>
                <p>Spaghetti with Salad bar <span className="price">$8.99</span></p>
        </div>
    )
};

export default Specials