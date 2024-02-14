import React from "react";
import FrontendLayout from "../Layout/FrontendLayout";

const contact = () => {
  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto mt-10">
        <div className="px-4 md:px-6">
          <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
            Contact Us Page
          </h2>
        </div>
        <div className="px-4 md:px-6">
          <div className="px-3 py-5">
            <div className="flex justify-center">
              <form
                action=""
                method="POST"
                className="flex flex-col w-full md:w-1/2 mb-8 bg-slate-200 rounded-md p-5"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name:"
                  className="bg-transparent border-2 border-black rounded-md p-2 text-black focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email:"
                  className="bg-transparent border-2 border-red-400 rounded-md p-2 text-black focus:outline-none my-4"
                />
                <textarea
                  name="message"
                  rows="10"
                  placeholder="Enter your message here:"
                  className="bg-transparent border-2 border-red-400 rounded-md p-2 text-black focus:outline-none resize-none"
                ></textarea>
                <button className="bg-red-700 text-white px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's Talk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
};

export default contact;
