import React from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  useTitle("All Toys");

  const allToyData = useLoaderData();
  console.log(allToyData);

  return (
    <div  className="mt-20">
      <h1 className="text-center text-4xl font-bold mb-10">All toys:{allToyData.length}</h1>
      <div className="mb-10 mx-10">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Photo</th>
                <th>Toy Name</th>
                <th>Seller name</th>
                <th>Sub categories</th>
                <th>Price</th>
                <th>Available quantity</th>
                <th>View detail</th>
              </tr>
            </thead>
            <tbody>
              {allToyData.map((allToy) => (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={allToy.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td>{allToy.toyName}</td>
                  <td>{allToy.sellerName}</td>
                  <td>{allToy.categories}</td>
                  <td>${allToy.price}</td>
                  <td>{allToy.quantity}</td>
                  <td><button className="btn btn-ghost btn-xs">details</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
