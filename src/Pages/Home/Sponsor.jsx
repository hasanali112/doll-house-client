import React from 'react';
import brand1 from '../../assets/images/icon/micro.png'
import brand2 from '../../assets/images/icon/ebay.png'
import brand3 from '../../assets/images/icon/aliex.png'
import brand4 from '../../assets/images/icon/apple.png'
import brand5 from '../../assets/images/icon/dell.png'
import brand6 from '../../assets/images/icon/hp.png'
import tesla from '../../assets/images/icon/tesla.png'
import bbc from '../../assets/images/icon/bbc.png'
import mongodb from '../../assets/images/icon/mongo.png'

import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div className='w-3/4 mx-auto mb-20'>
            <h1 className="text-center text-4xl font-bold mt-16">Sponsored by</h1>
            <p className="text-center text-gray-500 text-xl font-semibold mt-6">We are very glad those brand. Always support to Doll house</p>
            <Marquee>
            <div className='flex justify-center items-center mt-4'>
                <img src={brand1} alt="" className='w-28 mr-10'/>
                <img src={brand2} alt="" className='w-20 mr-10' />
                <img src={brand3} alt="" className='w-28 mr-10'/>
                <img src={brand4} alt=""  className='w-16 mr-10'/>
                <img src={brand5} alt=""  className='w-16 mr-10'/>
                <img src={brand6} alt="" className='w-16 mr-10'/>
                <img src={tesla} alt="" className='w-16 mr-10'/>
                <img src={bbc} alt="" className='w-24 mr-10'/>
                <img src={mongodb} alt="" className='w-24 mr-10'/>
            </div>
        </Marquee>
        </div>
    );
};

export default Sponsor;