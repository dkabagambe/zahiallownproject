import { useState, useCallback } from "react";
import "../styles/Gallery.css";
import ImageViewer from "react-simple-image-viewer";
import image1 from "../img/drivers.jpg";
import image2 from "../img/cleaners.jpg";
import image3 from "../img/guards.jpg";
import image4 from "../img/hotel1.jpg";
import image5 from "../img/driver.jpg";
import image6 from "../img/ware2.jpg";
import image8 from "../img/maids1.jpg";
import image9 from "../img/hotel.jpg";
import image10 from "../img/clean.jpg";
import image11 from "../img/hotel2.jpg";
import image12 from "../img/ware1.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="image-gallery-container">
      <h1 className="gallery-heading">
        Explore Our Service Offerings Through These Images
      </h1>

      <div className="image-gallery">
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            className="image-item"
            alt="gallery-photos"
          />
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Gallery;
