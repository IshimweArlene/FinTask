import { MoreHorizontal, Paperclip, MessageCircle } from "lucide-react";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
const FloatingCard1 = () => {
    return (
     <div className="relative -ml-[768px]">
        <div className="w-96 bg-white absolute z-30 rounded-xl py-4 px-4 space-y-3 shadow-xs border-gray-300  -rotate-6">
            <div className="flex items-center gap-12 justify-between">
             <p className="font-extralight text-gray-400 text-md">Fintask</p>
             <MoreHorizontal />
            </div>
            <div>
                <h1 className="font-black text-xl">Web Visual Design</h1>
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
                    <p className="text-xs font-serif">Style Guide</p>
                    <p className="text-xs mr-3">🌈</p>
                    <p className="mr-1"><MessageCircle size={13} color="gray"/></p>
                    <p className="text-xs text-gray-500 mr-4">5</p>
                    <p className="mr-1"><Paperclip size={13} color="gray" /></p>
                    <p className="text-xs text-gray-500">3</p>
                </div>
            </div>
        </div>
        <div className="bg-[rgba(0,0,0,0.04)] w-64 h-34 rounded-2xl left-24 top-9 absolute"></div>
      </div>
    );
}
 
export default FloatingCard1;