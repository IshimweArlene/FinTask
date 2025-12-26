import { DumbbellIcon, MoreHorizontal, Flag, MessageCircle, Paperclip } from "lucide-react";
import frame from "@/public/photos/Frame 217.svg";
import Image from "next/image";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
import FloatingCard2 from "./card2";
const AdvantagesCard = () => {
  return (
    <div className="px-28 relative my-12">
      <div className="relative grid grid-cols-2 gap-8 bg-[rgba(252,79,36,1)] py-4 pl-4 z-30 rounded-2xl">
        <div className="flex flex-col items-start">
          <div className="flex gap-4 space-y-6 items-center justify-center ">
            <div className="flex flex-col gap-4 items-center">
              <div className="border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,0.2)] border-5 w-7 h-7 ml-2 mt-12  rounded-full "></div>
              <div className="bg-white w-px  h-36 "></div>
            </div>
            <div>
              <h1 className="text-white text-5xl">Simple to use,</h1>
              <h1 className="text-white text-5xl">Powerful when need.</h1>
              <h1 className="text-white text-xl mt-6">Create tasks and projects, upload files, and add comments,</h1>
              <h1 className="text-white text-xl">with Teamwork everything is in one central location.</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 px-2 py-2 ml-6 w-fit rounded-3xl border-[0.1px] border-gray-50/30">
            <div className="bg-[rgba(255,255,255,0.2)]  rounded-2xl flex items-center justify-center w-10 h-10 ">
              <DumbbellIcon className="text-white  rotate-45" size={20} />
            </div>
            <h1 className="text-xl text-white font-medium">Costumized your workflow.</h1>
          </div>
          <div className="flex items-center gap-4 px-2 py-2 ml-6 mt-5 w-fit rounded-3xl border-[0.1px] border-gray-50/30">
            <div className="bg-[rgba(255,255,255,0.2)]  rounded-2xl flex items-center justify-center w-10 h-10 ">
              <Image src={frame} alt="frame icon" />
            </div>
            <h1 className="text-xl text-white font-medium">Extra features for complex projects.</h1>
          </div>
        </div>
        <div>
          <div>
            <div className=" bg-white rounded-2xl py-8 px-12 mt-12">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex">
                  <p className="text-gray-900 text-xl">🎒 New project</p>
                </div>
                <h1 className="text-3xl mb-8 font-semibold">Fintask Web</h1>
                <div className="grid grid-cols-2 gap-4 items-stretch ">
                  <div className="border-gray-300/50 h-72 border-[0.2px] px-4 py-4 rounded-xl">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-700 text-lg">Fintask</p>
                      <MoreHorizontal className="text-black " size={20} />
                    </div>
                    <h1 className="text-2xl mb-4 font-semibold">Bug Fix</h1>
                    <p className="text-gray-700 mb-4">Micro interactions, Loading and Progress, Navigation.</p>
                    <div className="flex items-center gap-4">
                      <Flag size={18} color="gray" fill="gray"/>
                      <p className="text-gray-500 text-sm ">Jan 05</p>
                      <div className="bg-[rgba(236,91,1,0.2)] p-1">
                        <p className="text-black text-xs">2 Bugs 🐞</p>
                      </div>
                      <div className="bg-[rgba(255,209,90,0.32)] p-1">
                        <p className="text-black text-xs ">Error ⚠️</p>
                      </div>
                    </div>
                    <hr className="w-full my-5 text-gray-300 " />
                    <div className="flex justify-between">
                      <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                        <img src={image1.src} className="w-10 h-10 rounded-full" />
                        <img src={image2.src} className="w-8 h-8 rounded-full border-white border-2 -ml-6" />
                        <span className="text-sm flex justify-center items-center h-8 w-8 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-5">10+</span>
                      </div>
                      <div className="flex items-center">
                        <p><MessageCircle size={16} color="gray" /></p>
                        <p className="text-md text-gray-500 ml-2 mr-4">5</p>
                        <p><Paperclip size={16} color="gray" /></p>
                        <p className="text-md text-gray-500 ml-2">3</p>
                      </div>
                    </div>
                  </div> 
                  <div className="border-[rgba(151,91,236,0.48)] w-5/6 h-full border-dashed border-3 rounded-lg"></div>
                  <div className="relative">
                    <div>
                      <div className="w-64 bg-white absolute  rounded-xl py-4 px-4 shadow-xs border-gray-300  bottom-32 left-96">
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
                      <div className="absolute bottom-[399px] left-72 w-72">
                        <div className="bg-white flex flex-col rounded-lg px-2 py-4 space-y-2">
                          <div className="flex items-center">
                            <Image src={image1} alt="image" className="w-10 h-10 rounded-full " />
                            <p className="font-black">Candilce Won </p>
                            <p className="text-gray-500 ml-5 text-sm mr-3 font-semibold" >1 hours ago </p>
                            <div className="h-1.5 w-1.5 rounded-full bg-[rgba(151,91,236,1)]"></div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-400 ml-10">Development Is ready</p>
                            <div className="bg-gray-300 px-2 rounded-sm">
                              <p className="text-[rgba(151,91,236,1)] text-sm">@sadek</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.05)] scale-x-65 rounded-2xl z-0 rotate-4 right-6 translate-x-44 translate-y-8 inset-0">

      </div>
   </div>
 );
}
 
export default AdvantagesCard;