import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import FeedBack from './FeedBack';
import Sponsor from './Sponsor';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <Sponsor></Sponsor>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;