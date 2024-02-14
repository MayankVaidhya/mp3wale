import React from "react";
import "../pages/pages.css";

const aside = () => {
  return (
    <div className="md:w-[30%] w-full md:mt-0 mt-5 px-6 py-2 md:mb-0 mb-4">
      <div className="">
        <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">Category</h2>
        <ul className="px-4 bg-slate-200">
          <li className="leading-10 aside_category_border cursor-pointer">
            Bollywood Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Hindi Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            English Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Punjabi Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Bhakti Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Haryanvi Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Tamil Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Telugu Songs
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="bg-zinc-800 px-3 py-1 text-white text-xl">
          Trending Category's
        </h2>
        <ul className="px-4 bg-slate-200">
          <li className="leading-10 aside_category_border cursor-pointer">
            Bollywood Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Hindi Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            English Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Punjabi Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Bhakti Songs
          </li>
          <li className="leading-10 aside_category_border cursor-pointer">
            Haryanvi Songs
          </li>
        </ul>
      </div>
    </div>
  );
};

export default aside;
