import React from "react";
import video1 from "../img/home.mp4";
import video2 from "../img/home1.mp4";
import video3 from "../img/home2.mp4";
import video4 from "../img/VID-20230815-WA0023.mp4";
import video5 from "../img/VID-20230815-WA0024.mp4";
import video6 from "../img/VID-20230815-WA0025.mp4";
import "../styles/Video.css";
const VideoPage = () => {
  const videos = [video1, video2, video3, video4, video5, video6];

  return (
    <div>
      <h1>Our Project Videos</h1>
      <div className="video-container">
        {videos.map((video, index) => (
          <div key={index} className="video-wrapper">
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
