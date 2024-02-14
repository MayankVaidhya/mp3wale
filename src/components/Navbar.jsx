import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/mp3-logo.png";
import { Link, useLocation } from "react-router-dom";
import "../pages/pages.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setMenu("home");
    } else if (pathname === "/about") {
      setMenu("about");
    } else if (pathname === "/contact") {
      setMenu("contact");
    } else {
      setMenu("");
    }
  }, [location]);

  return (
    <div className="bg-zinc-800 w-full max-w-7xl py-3 px-4 md:px-6 h-16 mx-auto">
      <div className="flex justify-between items-center gap-1">
        <div>
          <img src={logo} alt="" className="h-8 md:h-10" />
        </div>
        <div className="hidden md:flex w-80">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full rounded-l-md px-2 text-sm text-gray-800 border-none outline-none"
          />
          <button className="bg-red-700 py-1 px-2 rounded-r-md cursor-pointer text-xl text-white">
            <IoSearchOutline />
          </button>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white gap-10 text-md">
            <li
              onClick={() => {
                setMenu("home");
              }}
              className={`cursor-pointer hover:text-red-700 duration-300 ${
                menu === "home" ? "text-red-700" : "hover:text-red-700"
              }`}
            >
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("about");
              }}
              className={`cursor-pointer hover:text-red-700 duration-300 ${
                menu === "about" ? "text-red-700" : "hover:text-red-700"
              }`}
            >
              <Link style={{ textDecoration: "none" }} to="/about">
                About
              </Link>
            </li>
            <li
              onClick={() => {
                setMenu("contact");
              }}
              className={`cursor-pointer hover:text-red-700 duration-300 ${
                menu === "contact" ? "text-red-700" : "hover:text-red-700"
              }`}
            >
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* mobile menu button */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-zinc-500 w-[40px] h-[40px] flex items-center justify-center bg-white rounded-md z-10"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        {/* mobile menu */}
        {nav && (
          <div className="md:hidden flex pt-20 flex-col absolute top-14 left-2 w-[95%] bg-zinc-800 rounded-md h-96 p-6 gap-10 z-10">
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full rounded-l-md px-2 text-xl text-gray-800 border-none outline-none"
              />
              <button className="bg-red-700 py-2 px-2 rounded-r-md cursor-pointer text-xl text-white">
                <IoSearchOutline />
              </button>
            </div>
            <div className="">
              <ul className="flex flex-col text-white gap-4 text-lg">
                <li
                  onClick={() => {
                    setMenu("home");
                  }}
                  className={`cursor-pointer hover:text-red-700 duration-300 ${
                    menu === "home" ? "text-red-700" : "hover:text-red-700"
                  }`}
                >
                  <Link style={{ textDecoration: "none" }} to="/">
                    Home
                  </Link>
                </li>
                <hr className="hr_border" />
                <li
                  onClick={() => {
                    setMenu("about");
                  }}
                  className={`cursor-pointer hover:text-red-700 duration-300 ${
                    menu === "about" ? "text-red-700" : "hover:text-red-700"
                  }`}
                >
                  <Link style={{ textDecoration: "none" }} to="/about">
                    About
                  </Link>
                </li>
                <hr className="hr_border" />
                <li
                  onClick={() => {
                    setMenu("contact");
                  }}
                  className={`cursor-pointer hover:text-red-700 duration-300 ${
                    menu === "contact" ? "text-red-700" : "hover:text-red-700"
                  }`}
                >
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    Contact
                  </Link>
                </li>
                <hr className="hr_border" />
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
