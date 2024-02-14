import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FrontendLayout = ({ children }) => {
  return (
    <div className="bg_image">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default FrontendLayout;
