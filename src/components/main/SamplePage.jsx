import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/images/locations/1.png';
import img2 from '../../assets/images/locations/2.png';
import img3 from '../../assets/images/locations/3.png';
import img4 from '../../assets/images/locations/4.png';

function SamplePage() {

  const images = [img1, img2, img3, img4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [delayTimeout, setDelayTimeout] = useState(null);
  const handleMouseEnter = () => {
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);

    clearTimeout(delayTimeout); // Clear any existing timeout
    const timeout = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 500); // Set a delay of 1000 milliseconds (1 second)
    setDelayTimeout(timeout); // Save the timeout reference

  };

  return (
    <div className="flex justify-center" style={{ width: '800px', position: 'relative' }}>
      <Carousel
      showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        draggable={false}
        selectedItem={currentSlide}
        onChange={setCurrentSlide}
      >
        {images.map((image, index) => (
          <div key={index} 
          
        //   onClick={handleMouseEnter}
          onMouseEnter={handleMouseEnter}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <div style={{ position: 'absolute', top: '8px', left: '8px', display: 'flex' }}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '24px',
              height: '2px',
              margin: '0 4px',
              background: index === currentSlide ? '#000' : '#fff',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            title={`${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SamplePage;
