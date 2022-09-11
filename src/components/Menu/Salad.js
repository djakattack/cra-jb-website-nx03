import React from 'react';
import Addons from './Addons';

const Salad = () => {
    return (
        <div className="container">
            <h1>Salad Bar</h1>
            <div className="buffer-3"></div>
            <Addons />
            <div className="buffer-2"></div>
            <div>
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
                <h3 className="center">Dressings</h3>
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
                <h3 className="center">Toppers</h3>
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
                </div>
            </div>
        </div>
    )
};

export default Salad