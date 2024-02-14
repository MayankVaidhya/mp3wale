import React from "react";
import { useNavigate } from "react-router-dom";
import FrontendLayout from "../Layout/FrontendLayout";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto mt-10">
        <div className="h-80 w-full flex flex-col justify-center items-center bg-slate-200">
          <h1 className="text-9xl text-zinc-600 font-extrabold tracking-widest">
            404
          </h1>
          <div className="bg-red-700 text-white px-2 text-sm rounded rotate-12 absolute">
            Page Not Found ...
          </div>
          <button className="mt-5 relative inline-block text-sm font-medium text-white group focus:outline-none -z-0">
            <span
              onClick={() => navigate(-1)}
              className="relative block px-8 py-3 bg-red-700 rounded-md border border-current"
            >
              Go Back
            </span>
          </button>
        </div>
      </div>
    </FrontendLayout>
  );
};

export default NotFound;
