import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "../styles/WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <ReactWhatsapp
        number="9-715-450-92660"
        message="Hello i got this number from your website!!!"
        className="whatsapp_float"
      >
        <FaWhatsapp className="whatsapp" />
      </ReactWhatsapp>
    </div>
  );
};

export default WhatsApp;
