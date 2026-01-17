import { Check } from "lucide-react";
const FooterHero = () => {
    return (
        <div className="bg-[rgba(252,252,232,1)] min-w-[1440px] min-h-[491px] mt-12 pt-12">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-[56px] ">Get more </p>
            <p className="font-bold text-[56px] ">productive team</p>
            <button className="bg-[rgba(151,91,236,1)] mb-16 flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
              <div className="border-4 w-5 h-5 border-white rounded-full"></div>
              Start now - Free
            </button>   
            <div className="flex items-center gap-3">
              <Check color='black' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className="text-lg font-medium">Try FREE for 14 days</p>
              <Check color='black' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className="text-lg font-medium">No card required</p>
              <Check color='black' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className="text-lg font-medium">No switching banks</p>
            </div>        
          </div>
        </div>
    );
}
 
export default FooterHero;