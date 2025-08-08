import React from 'react';
import './ImageSlider.css';

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
  '/images/slider4.jpg',
  '/images/slider5.jpg',
];

const ImageSlider = () => {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="slider-container">
      <div className="slider-track">
        {duplicatedImages.map((src, idx) => (
          <img key={idx} src={src} alt={`slide-${idx}`} className="slide-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
