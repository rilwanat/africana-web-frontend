import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Carousel3d() {

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 5,
    showNavigation: false,
    config: config.slow
  });

  const goToPrevSlide = () => {
    setState(prevState => ({
      ...prevState,
      goToSlide: prevState.goToSlide - 1
    }));
  };

  const goToNextSlide = () => {
    setState(prevState => ({
      ...prevState,
      goToSlide: prevState.goToSlide + 1
    }));
  };

  const slides = [
    {
      key: 0,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="1" />
    },
    {
      key: 1,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="2" />
    },
    {
      key: 2,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="3" />
    },
    {
      key: 3,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="4" />
    },
    {
      key: 4,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="5" />
    },
    {
      key: 5,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="6" />
    },
    {
      key: 6,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="7" />
    },
    {
      key: 7,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="8" />
    },
    {
      key: 8,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="9" />
    },
    {
      key: 9,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="10" />
    },
    {
      key: 10,
      content: <img src="https://shopafricana.co/wp-content/uploads/2023/12/March-23-Document-Name03-scaled-2.jpg" alt="11" />
    }
  ];

  return (
    <div className='mt-8 mb-24'>
      <div style={{ width: "80%", height: "400px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
        <div className="flex justify-center mt-8">
          <div className="mr-12" style={{ cursor: "pointer" }} onClick={goToPrevSlide}>
            <ArrowBackIcon />
          </div>
          <div className="ml-12" style={{ cursor: "pointer" }} onClick={goToNextSlide}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel3d;
