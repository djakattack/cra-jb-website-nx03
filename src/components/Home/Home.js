import React from 'react';
// import steak from '../../assets/images/IMG_1208.jpeg';
import Specials from '../Menu/Specials';
import logo from '../../assets/images/logo-white.png';

const Home = () => {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentTime = currentDate.getHours();
    let shift;
    let isLunch;

    if(currentTime < 15){
        shift = "lunch";
    } else {
        shift = "dinner"
    }
    if(currentDay === 0){
        shift = "dinner";
    }
    if(currentDay === 6){
        shift = "dinner";
    }

    if(shift === "lunch"){
        isLunch = true
    }else{
        isLunch = false
    };

    const offers = [
        {
            lunch: "No Special Today",
            dinner: "No Special Today",
            soup1: "Lobster Bisque",
            soup2: ""
        },
        {
            lunch: "Grilled Chicken or Pork Chop with side and salad. For $10.99",
            dinner: "Grilled Chicken or Pork Chop with side and salad. For $10.99",
            soup1: "Broccoli and Cheese",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Barbecue Chicken with choice of two sides for $10.99",
            dinner: "Salad Bar with Seafood Entrées for $19.99",
            soup1: "Potato Bacon",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Country Style Steak with choice of two sides for 108.99",
            dinner: "Free skewer of shrimp with Steak Entrées, starting at $19.99",
            soup1: "Clam Chowder",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Spaghetti or Alfredo with Salad for $10.99",
            dinner: "Spaghetti or Alfredo with Salad Bar for $11.99",
            soup1: "Chicken Pastry",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Chicken Salad Sandwich with choice of side for $7.99",
            dinner: "No Special Today",
            soup1: "Lobster Bisque",
            soup2: ""
        },
        {
            lunch: "No Special Today",
            dinner: "No Special Today",
            soup1: "Clam Chowder",
            soup2: ""
        },
    ]

    return (
        <div className="home_container">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="card">
                <h1>Today's Special</h1>
                <p>
                    { isLunch ? offers[currentDay].lunch : offers[currentDay].dinner}
                </p>
                <h1>Soup of the Day</h1>
                <p>
                    {offers[currentDay].soup1}
                </p>
                <p>
                    {offers[currentDay].soup2}<br/>
                </p>
            </div>
            <Specials />
            <div className="buffer"></div>
        </div>
    )
}

export default Home;
