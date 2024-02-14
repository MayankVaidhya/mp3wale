import React from "react";
import image from "../assets/Maan Meri Jaan.jpeg";
import "../pages/pages.css";
import { Link } from "react-router-dom";

const card = (props) => {
  return (
    <>
      <Link to={`/post/${props.id}`}>
        <div className="md:w-48 w-60 md:h-56 card_border cursor-pointer">
          <div className="w-full h-48">
            <img src={image} alt="Maan Meri Jaan" className="w-full h-full" />
          </div>
          <div className="w-full h-9 bg-slate-200 flex items-center px-2">
            <p className="text-zinc-900 font-semibold">Maan Meri Jaan</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default card;
