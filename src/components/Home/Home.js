import React from 'react';
import steak from '../../assets/images/IMG_1208.jpeg';

const Home = () => {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentTime = currentDate.getHours();
    var shift;
    var isLunch;

    if(currentTime < 15){
        shift = "lunch";
    } else {
        shift = "dinner";
    };

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
            lunch: "Grilled Chicken or Pork Chop with side and salad. For $9.99",
            dinner: "Grilled Chicken or Pork Chop with side and salad. For $9.99",
            soup1: "Broccoli and Cheese",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Barbecue Chicken with choice of two sides for $8.99",
            dinner: "Salad Bar with Seafood Entrées for $15.99",
            soup1: "Potato Bacon",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Country Style Steak with choice of two sides for $8.99",
            dinner: "Free skewer of shrimp with Steak Entrées, starting at $17.99",
            soup1: "Clam Chowder",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "Spaghetti or Alfredo with Salad for $8.99",
            dinner: "Spaghetti or Alfredo with Salad Bar for $8.99",
            soup1: "Chicken Pastry",
            soup2: "Vegetable Beef"
        },
        {
            lunch: "BLT with choice of side for $6.99",
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
            <img src={steak} alt="steak"/>
            <div className="tagline">
                <p>A Good Meal is Around the Corner!</p>
            </div>
            <div className="specials">
                <h1>Today's Special</h1>
                { isLunch ? offers[currentDay].lunch : offers[currentDay].dinner}
                <h1>Soup of the Day</h1>
                {offers[currentDay].soup1}<br/>
                {offers[currentDay].soup2}<br/>
            </div>
        </div>
    )
}

export default Home;