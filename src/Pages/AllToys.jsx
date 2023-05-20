import React from 'react';
import useTitle from '../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    return (
        <div>
            <h1>All toys</h1>
        </div>
    );
};

export default AllToys;