// Service.js
import React from "react";
import {
  FaWrench,
  FaCar,
  FaHotel,
  FaSnowflake,
  FaBuilding,
  FaClipboard,
  FaTruck,
  FaFemale,
  FaMale,
  FaSuitcase,
} from "react-icons/fa";
import "../styles/Services.css";

const icons = {
  "Air conditioners Installation": FaSnowflake,
  "Helpers at Sites": FaBuilding,
  "Sales Personnels": FaClipboard,
  Technicians: FaWrench,
  "Dubai Tourism": FaSuitcase,
  Cleaners: FaCar,
  "Hotel Booking": FaHotel,
  Driving: FaTruck,
  Maids: FaFemale,
  "Security Guards": FaMale,
};

const Service = ({ serviceName, description, videoUrl }) => {
  const Icon = icons[serviceName];

  return (
    <div className="service">
      <div className="service-icon">
        <Icon />
      </div>
      <h3 className="service-title">{serviceName}</h3>
      <p className="service-description">{description}</p>
      <div className="service-video">
        <iframe
          title={`${serviceName} Video`}
          width="100%"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Service;
