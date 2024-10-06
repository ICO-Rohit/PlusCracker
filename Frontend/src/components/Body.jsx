import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import datademo from '../assets/data.json';
import Card from './Card';

const Body = () => {
    const [data, setData] = useState(datademo);

    return (
        <div className='flex justify-center'>
            <div className='w-4/6'>
                <div>
                    {data.map((item) => (
                        <Link to={`/${item.id}`} key={item.id}> {/* Wrap Card with Link */}
                            <Card
                                title={item.title}
                                description={item.description}
                                imgSrc={item.image}
                                updatedDate="4/10/24"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Body;