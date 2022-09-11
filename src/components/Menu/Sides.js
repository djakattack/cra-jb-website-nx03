import React from 'react';

const Sides = () => {
    return(
        <div className="container">
            <h1>Sides</h1>
            <div className="row">
                <ul className="column">
                    <li>Baked Potato</li>
                    <li>French Fries</li>
                    <li>Steamed Vegetables</li>
                    <li>Sweet Potato</li>
                    <li>Potato Salad</li>
                </ul>
                <ul className="column">
                    <li>Green Beans</li>
                    <li>Steamed Broccoli</li>
                    <li>Slaw</li>
                    <li>Hush Puppies</li>
                    <li>Potato Chips</li>
                </ul>
            </div>
            <div className="buffer-1"></div>
            <h2 className="center">Special Sides</h2>
            <ul className="center">
                <li>Boiled Potatoes (Tuesday Only)</li>
                <li>Corn Pudding (Wednesday Only)</li>
                <li>Mashed Potatoes (Wednesday Only)</li>
            </ul>

        </div>
    )
}

export default Sides;