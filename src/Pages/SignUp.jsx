import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const SignUp = () => {
  const [error, setError] = useState()
   const {createUser, updateSignUp} = useContext(AuthContext)
   const navigate = useNavigate()
   useTitle('Sign Up')

    const handleSignup = event =>{
        event.preventDefault();
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
        createUser(email, password)
        .then(result =>{
          setError("")
          const createdUser = result.user;
          console.log(createdUser)
          updateSignUp(result.user, name, photo)
          .then(()=>{
            console.log('update')
          })
          .catch(error=>{
            console.log(error.message)
          })
          form.reset()
          navigate('/login')
        })
        .catch(error=>{
          console.log(error)
          setError(error.message)
        })
    }




    return (
        <div className="bg-gray-200 w-3/5 mx-auto p-4 mb-20 rounded-md mt-8">
      <h1 className="text-center text-4xl font-bold mt-16">
        Sing Up Here!
      </h1>
      <h2 className="text-rose-700 font-bold text-2xl">{error}</h2>
      <form onSubmit={handleSignup}>
        <div className="card-body w-3/5 mx-auto">
         {/* row--------1 */} 
          <div className="grid gap-5 grid-cols-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>
          </div>
           {/* row--------2 */}
          <div className="grid gap-5 grid-cols-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
           {/* row--------3 */}
          <div className="grid gap-5 grid-cols-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-1">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
          <hr />
          <h5 className='text-base font-semibold'>Already have an account ? <Link to='/login' className='text-blue-700'>Sign In</Link></h5>
        </div>
      </form>
    </div>
    );
};

export default SignUp;