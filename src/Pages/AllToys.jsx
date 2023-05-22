import React, { useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const AllToys = () => {
  useTitle("All Toys");
  const [allToyData, setAllToyData] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetch('https://dolls-marketplace-server.vercel.app/alltoys')
    .then(res=>res.json())
    .then(data=> setAllToyData(data))
  },[])
  
  const handleSearch = ()=>{
    fetch(`https://dolls-marketplace-server.vercel.app/searchbytoy/${searchText}`)
    .then(res=> res.json())
    .then(data=>{
      setAllToyData(data)
    })
  }

  return (
    <div>
      <h1 className="text-center bg-gray-400 text-4xl p-10 font-bold mb-10">See here all toys collection: {allToyData.length}</h1>
       <div className="ml-96 mb-20">
       <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
         <button  onClick={handleSearch} className="btn btn-outline btn-primary ml-4">Search</button>
       </div>
      
     
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
                <tr key={allToy._id}>
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
                  <td><Link to={`/viewdetail/${allToy._id}`}><button className="btn btn-ghost btn-xs">details</button></Link></td>
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
