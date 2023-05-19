import React from "react";

const FeedBack = () => {
  return (
    <div className="bg-gray-200 w-4/5 mx-auto p-4 mb-20 rounded-md">
      <h1 className="text-center text-4xl font-bold mt-16">
        Leaves your Feedback
      </h1>
      <p className="text-center text-gray-500 text-xl font-semibold mt-6">
        Give your feedback. Its help to improve our product quality and customer
        service. <br /> Also leave us your rating that help to reach more
        consumers
      </p>
      <form>
        <div className="card-body w-3/4 mx-auto">
         {/* row--------1 */} 
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
           {/* row--------2 */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                type="text"
                name="product"
                placeholder="Product name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
           {/* row--------3 */}
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
                <span className="label-text">How to improve product/service ?</span>
              </label>
              <input
                type="text"
                name="improved"
                placeholder="How to improved product/service"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">FeedBack about our service or product</span>
              </label>
              <input
                type="text"
                name="feedback"
                placeholder="Message"
                className="textarea textarea-bordered textarea-lg w-full"
              />
            </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
