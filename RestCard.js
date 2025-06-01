import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

export default function RestCard({restInfo}){
   
    
    return (
      <Link to={"/city/delhi/"+restInfo?.info?.id}>
      <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-72 h-48 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
          <div className="font-bold text-xl">{restInfo?.info?.name}</div>
          <div className="flex gap-2 items-center">
            <FaCheckCircle size={20} color="green" />
            <span className="text-lg">{restInfo?.info?.avgRating}</span>
            <span className="text-lg font-bold">{restInfo?.info?.sla?.slaString}</span>
          </div>

          <div className="text-gray-600 text-xl h-7 mt-1 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
        </div>
      </div>
      </Link>
    )
}

