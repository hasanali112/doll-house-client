import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <hr />
              <div>
                <h5 className="text-center text-base font-semibold">
                  Or, Login with
                </h5>
                <div className="flex p-4">
                  <button className="btn btn-outline btn-primary mr-2">
                    <span className="pr-1">
                      <FaGoogle />
                    </span>
                    Login with google
                  </button>
                  <button className="btn btn-outline btn-secondary mr-6">
                    <span className="pr-1">
                      <FaGithub />
                    </span>
                    Login with github
                  </button>
                </div>
                <h4 className="text-base font-bold ml-6">Don't have an account? <Link to='/signup' className="text-blue-600">Sign Up</Link> </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
