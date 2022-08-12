import React from 'react';

const Soup = () => {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();

    return (
        <div>
            <h1>Soups</h1>
            <p>
                {currentDay}
            </p>
        </div>
    )
};

export default Soup