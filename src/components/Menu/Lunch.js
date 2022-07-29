import React from 'react';

const Lunch = () => {
    return (
        <div>
            <h1>Lunch</h1>
            
            <h2>Salad Bar</h2>
            <p>
                Endlass Salad Bar <span>$7.49</span><br/><br/>
                <ul>
                    <li>Add Chicken <span>$2.99</span></li>
                    <li>Add Shrimp <span>$3.99</span></li>
                    <li>Add Steak <span>$4.99</span></li>
                    <li>Add Salmon <span>$6.99</span></li>
                </ul>
            </p>
            
            <h2>Mix and Match</h2>
            <p>
                Any Two Items <span>$8.59</span> Any Three Items <span>$10.59</span><br/><br/>
                <ul className="combos">
                    <li>Salad Bar</li>
                    <li>Soup</li>
                    <li>Grilled Cheese</li>
                    <li>Steamed Veggies</li>
                    <li>Baked Potato</li>
                    <li>Sweet Potato</li>
                    <li>French Fries</li>
                </ul>
            </p>

            <h2>Wraps</h2>
            <p>
                Our refreshing wraps come with cheese, shredded lettuce, diced tomatoes, and onions along with Ranch, Caesar, Honey Mustard, or Teriyaki Sauce.  Comes with 1 side.<br/><br/>
                <ul>
                    <li>Chicken <span>$8.49</span></li>
                    <li>Shrimp <span>$9.49</span></li>
                    <li>Steak <span>$10.49</span></li>
                </ul>
            </p>

            <h2>Burgers and Dogs</h2>
            <p>
                Try the tastiest burger in town1   Oure homemade Bull burgers are hand pattied and seasoned fresh daily.  Dress it up any way you'd like!<br />

                All burgers come with lettuce, tomato, and onion.<br />
                <ul>
                    <li>Add cheese <span>$0.49</span></li>
                    <li>Add bacon <span>$0.99</span></li>
                </ul>
                <ul>
                    <li>1/4 lb Burger <span>$6.99</span></li>
                    <li>1/2 lb Burger <span>$7.99</span></li>
                </ul>
                <ul>
                    <li>2 Hot Dogs fixed any way you'd like. <span>$5.89</span></li>
                </ul>
            </p>
            
            <h2>Chicken and Pork</h2>
            <p>
                Chicken Breast -- mArinated chicken breast, as a sandwich or entrée, grilled, or fried.  $8.99
            </p>
            <p>
                
            </p>
            
            <h2>Steaks</h2>
            
            <h2>Seafood</h2>
            
            <h6>Lunch</h6>
            <p>Grilled Chicken or Porck Chop entrée with side and salad bar. <span className="price">$8.99</span></p>
            <h6>Dinner</h6>
            <p>Grilled Chicken or Porck Chop entrée with side and salad bar. <span className="price">$9.99</span></p>
        </div>
    )
};

export default Lunch