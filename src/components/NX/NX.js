import React from 'react';
import './styles/nx.scss';
// TODO: A couple of styles.

// TODO: Improvise a way to put entries in the notebook in a database here.
// For some reason compelled to create an object with all the salad info on there.  I'm thinking because I want to be able to enter things into the database with shorthand, but have it understand the long hand in case there is clarity needed?'
// Perhaps overthinking?  Does it need to be an array?  Is there a better way to do this.  At work right now so I can't give complete thought.
// const saladbar = [
//     {
//         shorthand: "L",
//         longhand: "lettuce"
//     },
// ]

const NX = () => {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentTime = currentDate.getHours();
    let shift;
    let isLunch;

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
            <div className="specials">
                <div className="specials_board">
                    <h1>Today's Special</h1>
                    <p>
                        { isLunch ? offers[currentDay].lunch : offers[currentDay].dinner}
                    </p>
                    <h1>Soup of the Day</h1>
                    <p>
                        {offers[currentDay].soup1}<br/>
                        {offers[currentDay].soup2}<br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NX;