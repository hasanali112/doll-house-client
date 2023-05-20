import React from 'react';
import useTitle from '../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    return (
        <div>
            <h1>THIS IS MYTOYS</h1>
        </div>
    );
};

export default MyToys;