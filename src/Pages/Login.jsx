import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">SignIn now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Sign In"/>
                </div>
              </form>
              <hr />
              <div>
                <h5 className="text-center text-base font-semibold">
                  Or, Sign In with
                </h5>
                <div className="flex p-4">
                  <button className="btn btn-outline btn-primary mr-2">
                    <span className="pr-1">
                      <FaGoogle />
                    </span>
                    Sign with google
                  </button>
                  <button className="btn btn-outline btn-secondary mr-6">
                    <span className="pr-1">
                      <FaGithub />
                    </span>
                    Sign with github
                  </button>
                </div>
                <h4 className="text-base font-bold ml-6">
                  Don't have an account ? 
                 <Link to="/signup" className="text-blue-600">
                    Sign Up
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
