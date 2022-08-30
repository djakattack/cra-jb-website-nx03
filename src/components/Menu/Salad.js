import React from 'react';

const Salad = () => {
    return (
        <div className="salad-bar">
            <h1>Salad Bar</h1>
            <div className="salad-bar-container">
                <div className="row">
                    <ul className="column">
                        <li>Lettuce</li>
                        <li>Spinach</li>
                        <li>Cottage Cheese</li>
                        <li>Peaches</li>
                        <li>Pineapple</li>
                        <li>Radish</li>
                        <li>Mushroom</li>
                        <li>Jalapeño</li>
                        <li>Pepperoncini</li>
                        <li>Oysters</li>
                        <li>Beets</li>
                        <li>Onions</li>
                        <li>Cucumber</li>
                    </ul>
                    <ul className="column">
                        <li>Pickles</li>
                        <li>Chives</li>
                        <li>Carrots</li>
                        <li>Sliced Tomato</li>
                        <li>Grape Tomato</li>
                        <li>Black Olive</li>
                        <li>Broccoli</li>
                        <li>Cheese</li>
                        <li>Ham</li>
                        <li>Bacon</li>
                        <li>Green Pepper</li>
                        <li>Eggs</li>
                        <li>Potato Salad</li>
                    </ul>
                </div><br/>
                <h3>Dressings</h3>
                <div className="row">
                    <ul className="column">
                        <li>Ranch</li>
                        <li>Thousand Island</li>
                        <li>Honey Mustard</li>
                        <li>Sweet French (Red)</li>
                        <li>Tangy French (Orange)</li>
                    </ul>
                    <ul className="column">
                        <li>Blue Cheese</li>
                        <li>Caeser</li>
                        <li>Italian</li>
                        <li>House (Greek)</li>
                    </ul>
                </div><br/>
                <h3>Toppers</h3>
                <div className="row">
                    <ul className="column">
                        <li>Croutons</li>
                        <li>Goldfish</li>
                        <li>French Fried Onions</li>
                    </ul>
                    <ul className="column">
                        <li>Raisins</li>
                        <li>Peanuts</li>
                        <li>Sunflower Seeds</li>
                    </ul>
                </div><br/>
                <ul>
                    <li className="addons">Add Chicken <span>$2.99</span></li>
                    <li className="addons">Add Shrimp <span>$3.99</span></li>
                    <li className="addons">Add Steak <span>$4.99</span></li>
                    <li className="addons">Add Salmon <span>$6.99</span></li>
                </ul>
            </div><br/>
        </div>
    )
};

export default Salad