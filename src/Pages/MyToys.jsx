import React, { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";





const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToy, setMyToy] = useState([]);


  useEffect(() => {
    fetch(`https://dolls-marketplace-server.vercel.app/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [user]);

  //delete operation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dolls-marketplace-server.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = myToy.filter(toy => toy._id !== id)
              setMyToy(remaining)
            }
          });
      }
    });
  };


  
  return (
    <div>
       <div className=" bg-gray-400 p-10" >
       <h1 className="text-center bg-gray-400  text-4xl font-bold ">
        My Toys: {myToy.length}
      </h1>
      <p className="text-center text-gray-700 text-xl font-semibold">Here see your add all the toys. If you want update and delete your toy.</p>
       </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Photo </th>
                <th>Toy Name</th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Available Quantity</th>
                <th>Categories</th>
                <th>Action</th>
              </tr>
            </thead>
            {myToy.map((toy) => (
              <tbody key={toy._id}>
                <tr>
                  <th>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toy.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </th>
                  <td>{toy.toyName}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.email}</td>
                  <td>{toy.description.substring(0, 35)}....</td>
                  <td>${toy.price}</td>
                  <td>{toy.rating}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.categories}</td>
                  <th>
                    <Link to={`/updatetoy/${toy._id}`}>
                      <button className="btn btn-primary btn-xs">Upadte</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn btn-secondary btn-xs ml-2"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
