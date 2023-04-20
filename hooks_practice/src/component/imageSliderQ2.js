import React, { useState } from "react";
import { images } from "./sliderData";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{ width: "50%", height: "auto" }}
        />
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <a href="#" onClick={prevSlide} className="previous round">
          &#8249;
        </a>
        <a href="#" onClick={nextSlide} className="next round">
          &#8250;
        </a>
      </div>
    </div>
  );
};

export default ImageSlider;
