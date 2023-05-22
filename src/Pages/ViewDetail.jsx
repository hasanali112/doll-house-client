import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const ViewDetail = () => {
   useTitle('View Detail Toy')
    const toyDetail = useLoaderData()
    console.log(toyDetail)
  return (
    <div>
      <h1 className="text-center p-10 font-bold text-4xl bg-gray-400">Detail About The Toy</h1>
      <div >
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content  flex-col lg:flex-row mr-20">
            <img
              src={toyDetail.photoUrl}
              className="lg:max-w-lg rounded-lg shadow-2xl ml-10"
            />
            <div className="ml-20">
              <h1 className="text-5xl font-bold">{toyDetail.toyName}</h1>
              <p className="py-2 text-base font-semibold text-gray-600">{toyDetail.sellerName}</p>
              <p className="py-2 text-base font-semibold text-gray-600">{toyDetail.email}</p>
              <p className="py-2 text-base font-semibold text-gray-600">Price: ${toyDetail.price}</p>
              <p className="py-2 text-base font-semibold text-gray-600">Rating: {toyDetail.rating}</p>
              <p className="py-2 text-base font-semibold text-gray-600">Availbility: {toyDetail.quantity}</p>
              <p className="py-2 text-base font-semibold text-gray-600"><strong>Detail:</strong> {toyDetail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
