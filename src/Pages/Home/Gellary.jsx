import React from 'react';
import Gellaryphoto1 from '../../assets/images/g1.jpg'
import LazyLoad from 'react-lazy-load';

const Gellary = () => {
    return (
        <div data-theme="emerald">
            <h1 className='text-center text-5xl font-bold mt-20'>Our Photo Gellary</h1>
            <p className='text-center text-base text-gray-500 font-semibold mt-6 mb-10'>Here find you best quality dolls. Enjoy our best deals and best collection. <br /> Make your baby happy</p>
         <div className='grid gap-6 md:grid-cols-3 lg:grid-cols-3 grid-cols-1'>
         <LazyLoad>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
        </LazyLoad>
         <LazyLoad>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
        </LazyLoad>
            <img src={Gellaryphoto1} alt=""  className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt=""  className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
            <img src={Gellaryphoto1} alt="" className='border-8 border-gray-200 rounded-lg'/>
        
          </div>
        </div>
    );
};

export default Gellary;