import { useNavigate, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from '../../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../../assets/logos/Logo Wordmark.png';
import logo3 from '../../../assets/logos/Circle Icon.png';
import logo4 from '../../../assets/logos/Couture 2.png';



function Loading({  }) {

    const navigate = useNavigate();

    return (
        <div>
{/* <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: 0 }}
            exit={{ translateY: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
        > */}
<div className="flex-grow flex items-center justify-center  z-50">
              <img
                className="block h-8 w-auto"
                src={logo2}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
            </div>
            {/* </motion.div> */}

         </div>
    );
}

export default Loading;
