import React from "react";


const Banner = () => {
  return (
    <div >
      <div
        className="hero min-h-screen rounded-lg"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1638400938049-306a22d88db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80")`,
        }}
      >
        <div className="hero-overlay bg-gradient-to-b from-[#0a0a0a97] to-[rgba(21, 21, 21, 0)] rounded-lg"></div>
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
      </div>
    </div>
  );
};

export default Banner;
