import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import FeedBack from './FeedBack';
import Sponsor from './Sponsor';

const Home = () => {
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