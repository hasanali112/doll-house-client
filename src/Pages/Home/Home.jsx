import React from 'react';
import Banner from './Banner';
import Gellary from './Gellary';
import FeedBack from './FeedBack';
import Sponsor from './Sponsor';
import useTitle from '../../hooks/useTitle';
import SubCategories from './SubCategories';



const Home = () => {
    useTitle('Home')
   
    return (
        <div>
            <Banner></Banner>
            <Gellary></Gellary>
            <SubCategories></SubCategories>
            <Sponsor></Sponsor>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;