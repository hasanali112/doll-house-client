import React, { useContext, useState } from "react";
import useTitle from "../hooks/useTitle";
import Select from "react-select";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const options = [
  { value: "Baby dolls", label: "Baby Dolls" },
  { value: "Barbie", label: "Barbie" },
  { value: "American Girl", label: "American Girl" },
  { value: "Interactive Dolls", label: "Interactive Dolls" },
  { value: "Reborn Dolls", label: "Reborn Dolls" },
  { value: "Fairy Dolls", label: "Fairy Dolls" },
  { value: "Rag Dolls", label: "Rag Dolls" },
  { value: "Fashion Dolls", label: "Fashion Dolls" },
];

const AddAToys = () => {
  useTitle("Add A Toys");

  const {user}= useContext(AuthContext)

  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddToy = event =>{
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
     const addAtoy ={
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
    console.log(addAtoy)
    fetch('https://dolls-marketplace-server.vercel.app/addtoys', {
     method:'POST',
     headers:{
        'content-type': 'application/json'
     },
     body: JSON.stringify(addAtoy)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Add your toy successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
        form.reset();
    })
  }

  return (
    <div className="bg-gray-300 w-4/5 mx-auto p-4 mb-20 rounded-md mt-20">
      <h1 className="text-center text-4xl font-bold mt-16">Add Your Toy</h1>
      <p className="text-center text-gray-500 text-xl font-semibold mt-6">
        Add your favourite and fancy toy that have like your baby. <br /> Play
        comfortably.
      </p>
      <form onSubmit={handleAddToy}>
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

export default AddAToys;
