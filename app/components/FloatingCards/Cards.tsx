import { ChevronDown } from "lucide-react";

const Cards = () => {
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
        <div>
          <div className="flex items-center">
            <ChevronDown fill="black" size={18} className="rotate-270"/>
            <p className="text-[13px] font-bold"> November 15</p>
          </div>
        </div>
      </div>
    </div>
 );
}
 
export default Cards;