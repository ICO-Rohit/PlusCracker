import React, { useEffect, useState } from 'react'
import Date from './Date';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-yellow-400'>
            <div className='flex justify-center items-center h-44'>
                <div className="flex justify-between w-3/4 items-center">
                    <Link to={'/'}>
                        <div className='flex h-20'>
                            <img className='rounded-md' src={logo} alt="plus cracker logo" />
                        </div>
                    </Link>
                    <Date />
                </div>
            </div>
        </div>
    )
}

export default Header