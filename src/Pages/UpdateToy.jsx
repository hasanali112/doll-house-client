import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from "../hooks/useTitle";
import Select from "react-select";
import { AuthContext } from '../Providers/AuthProvider';


const options = [
  { value: "baby dolls", label: "Baby dolls" },
  { value: "barbie", label: "Barbie" },
  { value: "American girl", label: "American girl" },
];





const UpdateToy = () => {
  useTitle("Update Toys");

  const {user}= useContext(AuthContext)
  const [selectedOption, setSelectedOption] = useState(null);


  const toys = useLoaderData()
  console.log(toys)
   const {_id}= toys
   console.log(_id)

   const handleUpdateToy = event =>{
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName= user?.displayName;
    const email = user?.email;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToy ={
       photoUrl: photo,
       toyName:name,
       sellerName,
       email,
       price,
       categories: selectedOption.label,
       rating,
       quantity,
       description
    }
   console.log(updateToy)
   fetch(`http://localhost:5000/update/${_id}`, {
    method:'PUT',
    headers:{
       'content-type': 'application/json'
    },
    body: JSON.stringify(updateToy)
   })
   .then(res=> res.json())
   .then(data=>{
       console.log(data)
       form.reset();
   })
 }


    return (
      <div className="bg-gray-300 w-4/5 mx-auto p-4 mb-20 rounded-md mt-20">
      <h1 className="text-center text-4xl font-bold mt-16">Update Your Toy</h1>
      
      <form onSubmit={handleUpdateToy}>
        <div className="card-body w-3/4 mx-auto">
          {/* row--------1 */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture URL of the toy</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter toy photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter toy name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row--------2 */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder=""
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                placeholder=""
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row----3 */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Categories</span>
              </label>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            </div>
          </div>
          {/* row--------4   */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                 Available quantity
                </span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row-----5 */}
          <div className="grid gap-5 grid-cols-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                 Description
                </span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description about toy"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Add Toy" />
          </div>
        </div>
      </form>
    </div>
    );
};

export default UpdateToy;