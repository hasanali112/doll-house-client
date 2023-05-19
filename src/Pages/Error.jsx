import React from 'react';
import error from '../assets/images/errorpage.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-1/2 mx-auto mb-10'>
            <img src={error} alt="" />
            <div className='w-1/2 mx-auto'>
            <Link to='/'><button className="btn btn-primary btn-wide">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;