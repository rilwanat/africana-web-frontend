import React, { useState, useEffect, useRef  } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles


const carouselItemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5, type: 'spring', stiffness: 20 } },
  };
  
  const carouselItemVariants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5, type: 'spring', stiffness: 20 } },
  };




function ShopTheLook({  }) {

    const [animateCarousel, setAnimateCarousel] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {    
        if (inView) {
          setAnimateCarousel(true);
        }
      }, [inView]);

    return (
        <div>
            <div className='flex justify-center mt-20 mb-2'>SHOP THE LOOK</div>
<div className="flex flex-col md:flex-row mx-16 mb-16">
<div className="relative flex-grow">
<motion.div
              variants={carouselItemVariants}
              initial="hidden"
              animate={ animateCarousel ? "visible" : "hidden"}
              // className="cursor-pointer"
              ref={ref}
              // onClick={() => { /* Handle navigation */ }}
            >
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        draggable={false}

        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = { margin: 4, color: "white", cursor: "pointer" };
          const style = isSelected
          ? { ...defStyle, backgroundColor: "white" } // Use solid color when isSelected is true
          : { ...defStyle, backgroundColor: "transparent" };
          return (
            <span
            className="inline-block w-2 h-2 rounded-full border-2 border-white"
            style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              {/* {"cust " + index} */}
            </span>
          );
        }}
      >
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4426111-768x961.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://shopafricana.co/wp-content/uploads/2024/01/ALAY532700-768x959.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://shopafricana.co/wp-content/uploads/2024/01/ALAY454900-768x960.jpg" alt="Slide 3" />
        </div>
      </Carousel>
      </motion.div>

      {/* <div className='absolute bottom-10 left-0 right-0 flex justify-between items-center h-full'>
        <IconButton aria-label="previous" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateNextIcon />
        </IconButton>
      </div> */}
    </div>


    <div className="relative flex-grow flex items-center justify-center p-8" style={{ backgroundColor: '#eeeeee' }}>     
    <motion.div
              variants={carouselItemVariants2}
              initial="hidden"
              animate={ animateCarousel ? "visible" : "hidden"}
              className="cursor-pointer"
              // ref={ref}
              onClick={() => {  }}
            > 
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={7500}
        swipeable={true}
        draggable={true}
        

        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = { margin: 4, color: "white", cursor: "pointer" };
          const style = isSelected
          ? { ...defStyle, backgroundColor: "white" } // Use solid color when isSelected is true
          : { ...defStyle, backgroundColor: "transparent" };
          return (
            <span
            // className="inline-block w-2 h-2 rounded-full border-2 border-white"
            style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
            </span>
          );
        }}
      >
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/0158-BRS-AFRICANA-1-copy-768x960.jpg" style={{ width: '60%', height: '60%' }} alt="Slide 1" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div>
          <div className='mt-4'>SHOP NOW</div>          
          </div>
        </div>
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/Mad-2.0-Fashion-Accessoriesx-AFRICANA140-scaled-1-768x960.jpg" style={{ width: '60%', height: '60%' }} alt="Slide 2" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div>
          <div className='mt-4'>SHOP NOW</div>
          </div>
        </div>
        <div>
          <img src="http://shopafricana.co/wp-content/uploads/2023/12/Image-7-20-23-at-4.20-PM-768x946.jpeg" style={{ width: '60%', height: '60%' }} alt="Slide 3" />
          <div className='flex flex-col justify-center'><div className='mt-4'>NAME</div>
          <div className='mt-4'>SHOP NOW</div>
          </div>
        </div>
      </Carousel>
      </motion.div>
      </div>

      

      {/* <div className='absolute bottom-10 left-0 right-0 flex justify-between items-center h-full'>
        <IconButton aria-label="previous" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton aria-label="next" style={{ color: 'white' }} onClick={() => {}}>
          <NavigateNextIcon />
        </IconButton>
      </div> */}
</div>
        </div>
    );
}

export default ShopTheLook;