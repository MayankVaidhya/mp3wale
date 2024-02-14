import React, { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../pages/pages.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // const [menu, setMenu] = useState("home");

  const socailIcons = [
    {
      id: 1,
      child: (
        <>
          <FaFacebook size={25} />
        </>
      ),
      href: "https://www.facebook.com/",
      style: "text-blue-500 cursor-pointer",
    },
    {
      id: 1,
      child: (
        <>
          <GrYoutube size={25} />
        </>
      ),
      href: "https://www.youtube.com/",
      style: "text-red-600 cursor-pointer",
    },
    {
      id: 1,
      child: (
        <>
          <FaTwitter size={25} />
        </>
      ),
      href: "https://twitter.com/?lang=en",
      style: "text-blue-400 cursor-pointer",
    },
    {
      id: 1,
      child: (
        <>
          <FaInstagram size={25} />
        </>
      ),
      href: "https://www.instagram.com/",
      style: "text-rose-600 cursor-pointer",
    },
  ];

  // generating current year
  useEffect(() => {
    const getCurrentYear = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(getCurrentYear);
  }, []);

  return (
    <div className="bg-zinc-800 w-full max-w-7xl mx-auto p-4 mt-8">
      <div className="p-2 flex gap-10">
        {/* left box */}
        <div className="flex flex-wrap gap-5 w-[50%]">
          <div className="mb-4">
            <h3 className="text-white text-xl font-semibold">SINGERS</h3>
            <p className="text-white text-sm mt-1.5">Lata Mangeshkar</p>
            <p className="text-white text-sm mt-1.5">Asha Bhosle</p>
            <p className="text-white text-sm mt-1.5">Alka Yagnik</p>
            <p className="text-white text-sm mt-1.5">Sunidhi Chauhan</p>
            <p className="text-white text-sm mt-1.5">Udit Narayan</p>
          </div>
          <div className="mb-4 ">
            <h3 className="text-white text-xl font-semibold">
              MUSIC DIRECTORS
            </h3>
            <p className="text-white text-sm mt-1.5">Pritam Chakraborty</p>
            <p className="text-white text-sm mt-1.5">Amit Trivedi</p>
            <p className="text-white text-sm mt-1.5">A.R. Rahman</p>
            <p className="text-white text-sm mt-1.5">Himesh Reshammiya</p>
            <p className="text-white text-sm mt-1.5">Sachin Jigar</p>
          </div>
          <div className="mb-4">
            <h3 className="text-white text-xl font-semibold">STARS</h3>
            <p className="text-white text-sm mt-1.5">Anupam Kher</p>
            <p className="text-white text-sm mt-1.5">Sanjay Mishra</p>
            <p className="text-white text-sm mt-1.5">Akshay Kumar</p>
            <p className="text-white text-sm mt-1.5">Jackie Shroff</p>
            <p className="text-white text-sm mt-1.5">Shahrukh Khan</p>
          </div>
        </div>
        {/* right box */}
        <div className="flex flex-col md:flex-row gap-5 w-[50%]">
          <div className="mb-4 w-full">
            <h3 className="text-white text-xl font-semibold">Mp3Wale</h3>
            <p className="text-white text-sm mt-1.5 cursor-pointer">
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </p>
            <p className="text-white text-sm mt-1.5 cursor-pointer">
              <Link style={{ textDecoration: "none" }} to="/about">
                About Us
              </Link>
            </p>
            <p className="text-white text-sm mt-1.5 cursor-pointer">
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact Us
              </Link>
            </p>
            <p className="text-white text-sm mt-1.5 cursor-pointer">
              <Link style={{ textDecoration: "none" }} to="/privacy">
                Privacy & Policy
              </Link>
            </p>
          </div>
          <div className="w-full">
            <ul className="flex md:flex-row md:justify-center md:items-center gap-4">
              {socailIcons.map(({ id, child, href, style }) => (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${style}`}
                  >
                    {child}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border_one px-2 pt-4">
        <p className="text-gray-400 text-sm">
          Copyright &copy; {currentYear} | mp3wale.co All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
