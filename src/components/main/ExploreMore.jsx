import { useNavigate, NavLink } from "react-router-dom";

function ExploreMore({  }) {

  const navigate = useNavigate();
  
  const navigateToMen = () => {
    const productSlug = "men";
    navigate('/on-sale', { state: { productSlug }, replace: true });
    //window.location.reload();    
  }
  const navigateToWomen = () => {
    const productSlug = "women";
    navigate('/on-sale', { state: { productSlug }, replace: true });
    //window.location.reload();
  }


    return (
        <div>
<div className='flex justify-center mt-12 mb-2'>EXPLORE MORE</div>
<div className="flex flex-col md:flex-row mt-4 mb-2">
  <div className="w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4456111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold" style={{ width: '60px' }}
    onClick={() => {navigateToWomen();}}
    >WOMEN</p>
  </div>
  </div>
  
  <div className=" w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4447111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold"  style={{ width: '60px' }} 
    onClick={() => {navigateToMen();}}
    >MEN</p>
  </div>
  </div>
</div>
        </div>
    );
}

export default ExploreMore;