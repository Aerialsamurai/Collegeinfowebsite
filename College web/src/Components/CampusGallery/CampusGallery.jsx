import React, { useState } from 'react';
import './CampusGallery.css';
import img1 from '../../assets/gallery-1.png';
import img2 from '../../assets/gallery-2.png';
import img3 from '../../assets/gallery-3.png';
import img4 from '../../assets/gallery-4.png';

const images = [
  { src: img1, caption: 'Main Building' },
  { src: img2, caption: 'Campus Aerial View' },
  { src: img3, caption: 'Hostel Block' },
  { src: img4, caption: 'Sports Complex' },
];

const CampusGallery = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="campus-gallery-section" id="campus-gallery">
      <h2 className="campus-gallery-heading">Campus Gallery</h2>
      <div className="gallery-carousel">
        <button className="gallery-arrow left" onClick={prev} aria-label="Previous image">&#8592;</button>
        <div className="gallery-image-card">
          <img src={images[current].src} alt={images[current].caption} className="gallery-img" />
          <div className="gallery-caption">{images[current].caption}</div>
        </div>
        <button className="gallery-arrow right" onClick={next} aria-label="Next image">&#8594;</button>
      </div>
      <div className="gallery-dots">
        {images.map((_, idx) => (
          <span key={idx} className={`dot${idx === current ? ' active' : ''}`} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
    </div>
  );
};

export default CampusGallery; 