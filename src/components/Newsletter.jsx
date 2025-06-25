import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col justify-center items-start">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up for to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between  ">
            <input
              className="p-3 w-full rounded-md border-1"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read Our
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
