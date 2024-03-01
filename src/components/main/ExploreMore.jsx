function ExploreMore({  }) {

    return (
        <div>
<div className='flex justify-center mt-4 mb-2'>EXPLORE MORE</div>
<div className="flex flex-col md:flex-row mt-4 mb-2">
  <div className="w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4456111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold" style={{ width: '60px' }}>WOMEN</p>
  </div>
  </div>
  
  <div className=" w-full relative">
    <div className="p-2">
    <img src="http://shopafricana.co/wp-content/uploads/2023/12/ALAY4447111.jpg" className='rounded-lg'/>
  </div>
  <div className="absolute bottom-20 right-10 p-2 text-white bg-black bg-opacity-50 rounded-lg cursor-pointer">
    <p className="text-sm text-white font-bold"  style={{ width: '60px' }} >MEN</p>
  </div>
  </div>
</div>
        </div>
    );
}

export default ExploreMore;