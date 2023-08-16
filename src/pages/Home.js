import React from "react";
import "../styles/Home.css";
import videoFile from "../img/VID-20230815-WA0023.mp4"; // Import the video file

const Home = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
