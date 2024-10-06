import React from 'react';

function Card({ title, description, imgSrc, updatedDate }) {
    return (
        <div className='pt-8 border-t border-black bg-red-400'>
            <div className='flex gap-4 pb-10 pl-20'>
                <img className='h-56 w-96 rounded-md border border-black bg-white' src={imgSrc} alt={title} />
                <div>
                    <h1 className='text-3xl'>{title}</h1>
                    <p className='text-xl'>Updated: {updatedDate}</p>
                    <h4 className='text-md italic'>{description}</h4>
                </div>
            </div>
        </div>
    );
}

export default Card;
