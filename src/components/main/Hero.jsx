import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';


function Hero({  }) {

    const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');


    return (
        <div>

<div className="w-full mt-[-5rem]">
  <img src=
  {isLargeScreen ? "https://shopafricana.co/wp-content/uploads/2024/01/1-slider-scaled.jpg" : "https://shopafricana.co/wp-content/uploads/2024/01/art-of-life210124_26-scaled.jpg"

  }
   alt="" className="w-full h-screen object-cover" />
</div>
        </div>
    );
}

export default Hero;

