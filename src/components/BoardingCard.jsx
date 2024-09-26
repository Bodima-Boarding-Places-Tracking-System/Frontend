import React from 'react';
import {HiLocationMarker, HiStar} from 'react-icons/hi'


const BoardingCard = () => {
    
  return (
   <div className=" w-full md:max-w-[750px] ">
     <div className=" bg-white text-whitew-full h-48 shadow-xl rounded-lg flex p-2 gap-3 border-2" >
          <div className= "w-[160px] h-full relative">
          <div className="w-30 h-8 bg-white text-black border absolute top-2 left-2 rounded p-1">
            <p className="text-sm text-[#003566] font-medium">Featured</p>
          </div>
          <img className="h-full  w-full object-cover rounded-lg" src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="Property" />
          </div>
          <div className="bg-white flex-1 flex flex-col justify-between h-full p-4">
          <h1 className='text-2xl font-medium line-clamp-1'>Ceylon Ginger Cinnamon chai tea</h1>
          <div className='flex flex-col gap-1 pb-2'>
          <div className="flex items-center gap-1 mt-2 ">
                <HiStar className='text-[#003566]'/>
                <p>Ratings</p>
             </div>
             <div className="flex items-center gap-1">
                <HiLocationMarker className='text-[#003566]'/>
                <p>2 Km from uni</p>
             </div>
             <div className="flex items-center gap-1">
                <HiStar className='text-[#003566]'/>
                <p>4 Beds, 2 Rooms</p>
             </div>
            
            
           </div> 

           {/*hidden label*/}
           
            
          </div>
    </div>
   </div>
   
  );
};

export default BoardingCard;
