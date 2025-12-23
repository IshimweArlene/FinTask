"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import image1 from "@/public/photos/image1.png"
import image2 from "@/public/photos/image2.png"
const Cards = () => {
 const [active, setActive] = useState<'day' | 'week' | 'month'>('day');
 return (
    <div>
      <div className="w-96 bg-[rgba(252,252,232,1)] py-6 px-4 rounded-2xl">
        <div className="flex items-center">
          <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-4 w-5 h-5 rounded-full "></div>
          <h1 className="text-3xl font-black ml-2">Task Progress</h1>
        </div>
        <div>
            <p className="text-[20px] text-start text-gray-800 ml-8 mb-3.5">Send scheduling links guests love</p>
        </div>
        <div className="bg-white">
         <div className="flex justify-between">
          <div className="flex items-center">
            <ChevronDown fill="black" size={18} className="rotate-270"/>
            <p className="text-[13px] font-bold"> November 15</p>
          </div>
          <div className="bg-gray-300 w-fit flex items-center p-2 gap-3 rounded-xl">
            <button onClick={() => setActive('day')} className={active == "day" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400"}>Day</button>
            <button onClick={() => setActive('week')} className={active == "week" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400"}>Week</button>
            <button onClick={() => setActive('month')} className={active == "month" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400"}>Month</button>
          </div>
         </div>
         <div className="flex items-center gap-2 pr-2">
          <h1 className="text-gray-400 text-xs">08:00 AM</h1>
          <div className="flex-1 h-[0.5px] bg-gray-300"></div>
         </div>
         <div className="flex  items-center gap-4 w-fit">
          <div>
           <h1 className="text-[10px]">Fintask</h1>
           <h1 className="text-sm font-black">Developement</h1>
          </div>
          <div className="relative flex items-center gap-2 bg-white rounded-full py-1 w-fit">
           <img src={image1.src} className="w-8 h-8 rounded-full" />
           <img src={image2.src} className="w-6 h-6 rounded-full border-white border-2 -ml-5" />
           <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">3+</span>
          </div>
         </div>
        </div> 
      </div>
    </div>
 );
}
 
export default Cards;