import React from 'react';

const Appetizers = () => {
    return (
        <div className="container">
            <h1>Appetizers</h1>
            <div className="cards">
                <div className="card">
                    <h3>Chicken Tenders <span>$8.29</span></h3>
                    <p>Our signature marinated chicken, sliced and hand breaded, fried to perfection!  Served with home-made ranch</p>
                    <p><i>Buffalo Style <span>$8.79</span></i></p>
                </div>
                <div className="card">
                    <h3>Fried Pickle Chips <span>6.99</span></h3>
                    <p>Served with homemade ranch.</p>
                </div>
                <div className="card">
                    <h3>Jalapeño Poppers <span>$6.99</span></h3>
                    <p>Six cheddar stuff jalapeños served with homemade ranch.</p>
                </div>
                <div className="card">
                    <h3>Mozzarella Sticks <span>6.99</span></h3>
                    <p>Served with marinara sauce.</p>
                </div>
                <div className="card">
                    <h3>Potato Skins <span>$7.49</span></h3>
                    <p>Fried potato skins, smothered in cheddar and bacon, served with homemade ranch.</p>
                </div>
                <div className="card">
                    <h3>Sweet Potato Fries <span>$6.99</span></h3>
                    <p>Delicious waffle cut sweet potatoes, fried and topped with cinnamon sugar. </p>
                </div>
                <div className="card">
                    <h3>Onion Rings <span>$6.99</span></h3>
                    <p>Thick cut onion rings, firied and served with sauce.</p>
                </div>
            </div>
        </div>
    )
};

export default Appetizers