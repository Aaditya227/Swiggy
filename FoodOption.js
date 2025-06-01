import { imageGridCards } from "../Utils/FoodData";
import Foodcard from "./Foodcard";

export default function FoodOption(){
    
    return (
        <>
         <div className="w-[80%] container mx-auto flex flex-wrap mt-10 mb-10 gap-3 justify-center">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
         </div>
        </>
    )
} 