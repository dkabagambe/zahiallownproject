import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy;{new Date().getFullYear()} Zahi Allown Project </p>
    </div>
  );
};

export default Footer;
