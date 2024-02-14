import React from "react";
import Card from "../components/Card";
import "../pages/pages.css";
import FrontendLayout from "../Layout/FrontendLayout";
import Aside from "../components/Aside.jsx";

const home = () => {
  return (
    <FrontendLayout>
      <div className="w-full max-w-7xl mx-auto flex mt-10 flex-col md:flex-row">
        {/* left box */}
        <div className="md:w-[70%] w-full px-6 py-2">
          <div>
            <div className="mb-4">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Latest Songs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5 mb-4">
              {/* All Card Components */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* next & previous button */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="py-2 px-5 outline-none bg-white rounded-md text-red-700 text-base font-semibold cursor-pointer card_btn_border">
                Previous
              </button>
              <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                Next
              </button>
            </div>
          </div>
          {/* more trending and hindi section here... */}
          <div className="mt-4">
            <div className="mb-4">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Bollywood Songs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5 mb-4">
              {/* All Card Components */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* view all button */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                [ View All Bollywood Songs ]
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Hindi Songs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5 mb-4">
              {/* All Card Components */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* view all button */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                [ View All Hindi Songs ]
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-4">
              <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
                Trending Songs
              </h2>
            </div>
            <div className="flex flex-wrap justify-center md:justify-normal gap-5 mb-4">
              {/* All Card Components */}
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            {/* view all button */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="py-2 px-5 outline-none bg-red-700 rounded-md text-white text-base font-semibold cursor-pointer card_btn_border">
                [ View All Trending Songs ]
              </button>
            </div>
          </div>
        </div>
        {/* aside box */}
        <Aside />
      </div>
    </FrontendLayout>
  );
};

export default home;
