import React from 'react';
import Addons from './Addons';

const Lunch = () => {
    return(
        <div className="container">
            <h1>Lunch</h1>
            <p className="center">Available weekdays until 2:30PM</p>
            <div className="cards">
                <div className="card">
                    <h2 className="center">Salad Bar <span>$7.49</span></h2>
                    <p>Your favorite part of Johnny Bull's</p>
                    <p>See below for salad bar options.</p>
                </div>
                <div className="card">
                    <h2 className="center">
                        Mix-N-Match<br/>
                        Any Two Items <span>$8.59</span><br/>
                        Any Three Items <span>$10.59</span> 
                    </h2>
                    <p>Choose between Salad Bar, Soup, Grilled Cheese, Steamed Veggies, Baked Potato, Sweet Potato, French Fries, <b>OR</b> Mac and Cheese</p>
                </div>
                <div className="card">
                    <h2 className="center">
                        Wraps
                    </h2>
                    <p>Our refreshing wraps come with cheese, shredded lettuce, diced tomatoes, and onions along with a choice of Ranch, Caesar, Honey Mustard, or Teriyaki Sauce</p>
                    <ul>
                        <li>Chicken <span>$9.49</span></li>
                        <li>Shrimp <span>$9.49</span></li>
                        <li>Steak <span>$9.49</span></li>
                    </ul>
                </div>
            </div>
            <h2 className="center">Burgers and Dogs</h2>
            <p className="center">Try the tastiest burger in town!  Our homemade Bull burgers are hand pattied and seasoned fresh daily.</p>
            <div className="cards">
                <div className="card">
                    <h3 className="center">
                        1/4 lb Burger <span>$6.99</span>
                    </h3>
                    <p>Served with Lettuce, Sliced Tomato, and Onion and choice of one side.</p>
                </div>
                <div className="card">
                    <h3 className="center">
                        1/2 lb Burger <span>$7.99</span>
                    </h3>
                    <p>Served with Lettuce, Sliced Tomato, and Onion and choice of one side.</p>
                </div>
                <div className="card">
                    <h3 className="center">
                        Hot Dogs <span>$5.89</span>
                    </h3>
                    <p>Two hot dogs, fixed any way you like.  Served with one side.</p>
                </div>
            </div>
            <h2 className="center">Chicken and Pork</h2>
            <div className="cards">            
                <div className="card">
                    <h2 className="center">
                        Chicken Breast <span>$9.99</span>
                    </h2>
                    <p>Marinated chicken breast, as a sandwich or an entrée, grilled or fried.</p>
                </div>
                <div className="card">
                    <h2 className="center">
                        Pork Chops <span>$10.99</span>
                    </h2>
                    <p>Two of our delicious boneless pork chops, grilled or fried.</p>
                </div>
                <div className="card">
                    <h2 className="center">
                        Chicken Tenders <span>$9.99</span>
                    </h2>
                    <p>Handbreaded chicken tenders served with ranch.</p>
                </div>
                <div className="card">
                    <h2 className="center">
                        Pulled Pork Sandwich <span>$6.99</span>
                    </h2>
                    <p>Slow cooked and pulled in house with homemade slaw served on Texas toast.</p>
                </div>
            </div>    
            <h2 className="center">Steak</h2>
            <div className="cards">
                <div className="card">
                    <h2>
                        Steak Sandwich <span>$11.99</span>
                    </h2>
                    <p>Delicious seasoned ribeye on a toast hoagie.</p>
                </div>
                <div className="card">
                    <h2>
                        French Dip <span>$11.99</span>
                    </h2>
                    <p>Rich prime rib, sliced thin, and piled on a toasted hoagie with au jus</p>
                </div>
                <div className="card">
                    <h2>
                        Lunch Steak <span>$11.99</span>
                    </h2>
                    <p>Seasoned ribeye steak, cooked to order with Texas toast.</p>
                </div>
            </div>
            <h2 className="center">Seafood</h2>
            <div className="cards">
                <div className="card">
                    <h2>Salmon <span>$12.99</span></h2>
                    <p>Everyone's favorite fish!  Cooked to your temp and served with dill mayo.</p>
                </div>
                <div className="card">
                    <h2>Shrimp <span>$9.99</span></h2>
                    <p>Two sekewers of grilled shrimp perfecrly seasoned and buttered</p>
                </div>
                <div className="card">
                    <h2>Fish'N'Chips <span>$8.99</span></h2>
                    <p>Beer battered cod, served with homemade slaw and hushpuppies.</p>
                </div>
            </div>  
        </div>
    )
};

export default Lunch