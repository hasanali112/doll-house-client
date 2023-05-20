import React from "react";
import banner from '../../assets/images/banner.jpg'



const Banner = () => {
  return (
    <div >
      <div className="hero  lg:min-h-screen bg-gray-600">
     <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={banner} className="lg:min-2xl:w-1/2 lg:w-[750px] w-[1000px] shadow-2xl mask mask-hexagon" />
     <div className="text-white md:w-1/2">
      <h1 className="md:text-5xl text-4xl font-bold md:ml-10">Welcome to Doll House</h1>
      <p className="py-6 md:ml-10"> Find huge collection of  Doll Online at lowest prices in  on Doll House. Check out wide range of our collection.</p>
      <button className="btn btn-secondary mr-4 lg:ml-8">Explore now</button>
      <button className="btn btn-outline btn-ghost">Learn more</button>
    </div>
  </div>
    </div>
    </div>
  );
};

export default Banner;


{/* <div
className="hero min-h-screen"
style={{
  backgroundImage: `url("https://images.unsplash.com/photo-1638400938049-306a22d88db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80")`,
}}
>
<div className="hero-overlay bg-gradient-to-b from-[#0a0a0a97] to-[rgba(21, 21, 21, 0)]"></div>
<div className="hero-content text-center text-neutral-content">
  <div className="max-w-md ">
    <h1 className="mb-5 text-5xl font-bold">Welcome to Doll House</h1>
    <p className="mb-5 text-base fond-semibold">
    Find huge collection of  Doll Online at lowest prices in  on Doll House. Check out wide range of our collection.
    </p>
    <button className="btn btn-secondary mr-4">Explore now</button>
    <button className="btn btn-outline btn-ghost">Learn more</button>
  </div>
</div>
</div> */}