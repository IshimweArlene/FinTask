import { MoreHorizontal, Paperclip, MessageCircle, Flag } from "lucide-react";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
const FloatingCard2 = () => {
    return (
     <div className="relative ">
        <div className="w-64 bg-white absolute z-30 rounded-xl py-4 px-4 shadow-xs border-gray-300  rotate-15">
            <div className="flex items-center gap-12 justify-between">
             <p className="font-extralight text-gray-400 text-md">Fintask</p>
            </div>
            <div>
                <h1 className="font-black text-xl mt-1 mb-3">UI Animations</h1>
                <div className="bg-gray-200 w-full h-1 mt-2 rounded-3xl"></div>
                <div className="bg-gray-200 w-1/3 mt-3 rounded-3xl h-1"></div>
                <div className="flex gap-2 mt-8 border-b-2 border-gray-300 pb-4">
                    <Flag fill="gray" color="gray" size={15}/>
                    <p className="text-xs text-gray-600 mr-2"> Nov 10</p>
                    <div className="bg-gray-200 p-1 ml-2 rounded-xs flex items-center">
                        <div className="bg-gray-300 rounded-2xl h-1 w-12"></div>
                    </div>
                    <div className="bg-[rgba(255,209,90,0.32)] px-2.5"><p className="text-xs "> P2 🏆</p></div>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-2 justify-between">
                <div className="relative flex items-center gap-2 bg-white rounded-full py-1 w-fit">
                    <img src={image1.src} className="w-8 h-8 rounded-full" />
                    <img src={image2.src} className="w-6 h-6 rounded-full border-white border-2 -ml-5" />
                    <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">
                    3+
                    </span>
                </div>
                <div className="flex">
                    <p className="mr-1"><MessageCircle size={13} color="gray"/></p>
                    <p className="text-xs text-gray-500 mr-4">5</p>
                    <p className="mr-1"><Paperclip size={13} color="gray" /></p>
                    <p className="text-xs text-gray-500">3</p>
                </div>
            </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.04)] w-64 h-60 rounded-xl -left-4 top-4 absolute"></div>
      </div>
    );
}
 
export default FloatingCard2;