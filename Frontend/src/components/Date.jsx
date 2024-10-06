import React from 'react';

const Date = () => {
    const currentDate = new window.Date();

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div>
            <p className='font-bold'>{formattedDate}</p>
        </div>
    );
};

export default Date;
