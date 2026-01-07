import { Bold, DumbbellIcon,} from "lucide-react";
import frame from "@/public/photos/Frame 217.svg";
import Image from "next/image";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
import Notion from "@/public/photos/notion.svg";
import Trello from "@/public/photos/trello.svg";
import rect1 from "@/public/photos/rect1.svg";
import rect2 from "@/public/photos/rect2.svg";
import rect3 from "@/public/photos/rect3.svg";
import rect4 from "@/public/photos/rect4.svg";
import rect5 from "@/public/photos/rect5.svg";
import { MoreHorizontal, Paperclip, MessageCircle } from "lucide-react";

const ProjectsCard = () => {
  return (
    <div className="pl-24 pr-20 relative" >
      <div className="relative grid grid-cols-2 gap-8 bg-[rgba(20,80,26,1)] w-full h-[490px] py-8 pl-4 z-30 mt-32 rounded-4xl">
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
          <div className="flex flex-col bg-[rgba(255,255,255,0.96)] rounded-2xl py-8 px-12 min-h-[430px] rounded-b-none mt-8">
            <div className="grid grid-cols-2 gap-6 ">
              <div>
                <div className="bg-[rgba(255,255,255,1)]  space-y-5 rounded-xl flex items-center ">
                  <div className="bg-[rgba(245,245,245,1)]  rounded-full w-fit h-fit p-2 ml-2 mt-2">
                    <Image src={Notion} alt="Notion" className="w-10 h-10"/>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold ml-4">Notions</h1>
                    <div className="flex items-center gap-3.5">
                      <div className="w-36 h-2.5 bg-[rgba(151,91,236,0.12)] ml-4 rounded-lg">
                        <div className="h-full bg-[rgba(151,91,236,1)] transition-all rounded-lg" style={{ width: "80%" }}/>
                      </div>
                      <p className="font-black text-md mr-2">80%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,1)]  space-y-4.5 rounded-xl flex items-center mt-5">
                  <div className="bg-[rgba(245,245,245,1)] rounded-full w-fit h-fit p-2 ml-2 mt-2">
                    <Image src={Trello} alt="Trello" className="w-10 h-10" />
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold ml-4">Trello</h1>
                    <div className="flex items-center gap-3.5">
                      <div className="w-36 h-2.5 bg-[rgba(255,209,90,0.12)] ml-4 rounded-lg">
                        <div className="h-full bg-[rgba(255,209,90,1)] transition-all rounded-lg" style={{ width: "60%" }}/>
                      </div>
                      <p className="font-black text-md mr-2">60%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[rgba(255,255,255,1)] rounded-2xl p-2 min-w-0 flex items-center overflow-visible">
                  <div className="bg-white px-2 py-8 rounded-2xl w-full max-w-full min-w-0">
                    <div className="relative w-full h-20 flex items-center">
                      <div className="absolute -top-6 left-24 z-60 bg-gray-200 text-gray-700 text-[7px] px-2 py-1 rounded whitespace-normal">
                        <p className="font-bold text-[9px]">Progress</p>
                        Complete almost <span className="font-semibold">90%</span>
                        <div className="absolute bottom-0 left-12 transform translate-y-full">
                          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-200"></div>
                        </div>
                      </div>
                      <div className="relative w-32 h-20">
                        <Image src={rect1} alt="rect1" className="absolute inset-0 rounded-xl z-50 h-18 w-auto object-cover" />
                        <Image src={rect2} alt="rect2" className="absolute inset-0 translate-x-8 rounded-xl z-40 h-18 w-auto object-cover" />
                        <Image src={rect3} alt="rect3" className="absolute inset-0 translate-x-14 rounded-xl z-30 h-18 w-auto object-cover" />
                        <Image src={rect4} alt="rect4" className="absolute inset-0 translate-x-16 rounded-xl z-20 h-18 w-auto object-cover" />
                        <Image src={rect5} alt="rect5" className="absolute inset-0 translate-x-19 rounded-xl z-10 h-18 w-auto object-cover" />
                        <Image src={rect5} alt="rect5" className="absolute inset-0 translate-x-28 top-4 rounded-md z-10 h-10 w-auto object-cover" />

                      </div>
                    </div>
                    <div className="flex gap-3 mt-6 text-sm flex-wrap">                      
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[rgba(20,80,26,1)] rounded-full" />
                        <p className="text-[7.5px] font-semibold whitespace-normal">Complete</p>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[rgba(243,176,255,1)] rounded-full" />
                        <p className="text-[7.5px] font-semibold whitespace-normal">Progress</p>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[rgba(255,209,90,1)] rounded-full" />
                        <p className="text-[7.5px] font-semibold whitespace-normal">Pending</p>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[rgba(252,79,36,1)] rounded-full" />
                        <p className="text-[7.5px] font-semibold whitespace-normal">Not Started</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="bg-[rgba(255,255,255,1)] px-2 pb-2 rounded-2xl">
                <div className="flex items-center gap-4 pr-2 mt-6">
                  <h1 className="text-gray-400 text-[8.5px] ">08:00 AM</h1>
                  <div className="flex-1 h-[0.5px] bg-gray-300"/>
                </div>
                <div className="flex ml-[66px] -mt-2 border-[rgba(243,176,255,1)] border-2 items-center gap-4  py-2 px-1 w-fit rounded-md bg-[rgba(252,233,255,1)]">
                  <div>
                    <h1 className="text-[8px] text-gray-700">Fintask</h1>
                    <h1 className="text-[10px] whitespace-break-spaces font-black">Developement</h1>
                  </div>
                  <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                    <img src={image1.src} className="w-4 h-4 rounded-full" />
                    <img src={image2.src} className="w-3 h-3 rounded-full border-white border-2 -ml-3" />
                    <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">3+ </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 pr-2 mt-6">
                  <h1 className="text-gray-400 text-[8.5px]">10:00 AM</h1>
                  <div className="flex-1 h-[0.5px] bg-gray-300"></div>
                </div>

                <div className="flex ml-36 -mt-6 bg-[rgba(225,251,254,1)] z-40 relative border-2 items-center justify-between gap-4 w-fit py-0.5 px-2 rounded-xs border-[rgba(167,195,209,1)]">
                  <div>
                    <h1 className="text-[6px]">Fintask</h1>
                    <h1 className="text-[8px] font-black whitespace-break-spaces">Ux copywrite</h1>
                  </div>
                  <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                    <img src={image1.src} className="w-4 h-4 rounded-full" />
                    <img src={image2.src} className="w-3 h-3 rounded-full border-white border-2 -ml-3" />
                    <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">3+</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pr-2 mt-12">
                  <h1 className="text-gray-400 text-[8.5px]">12:00 PM</h1>
                  <div className="flex-1 h-[0.5px] bg-gray-300"></div>
                </div>

                <div className="w-fit ml-24 -mt-12 relative z-10 bg-[rgba(253,254,225,1)] rounded-lg py-2 px-2 space-y-1 border border-[rgba(248,255,31,1)]">
                  <div className="flex items-center  justify-between">
                    <p className="font-extralight text-gray-400 text-[7px]">Fintask</p>
                    <MoreHorizontal size={11} className="font-black"/>
                  </div>
                  <div>
                    <h1 className="font-black text-[9.5px]">Web Visual Design</h1>
                  </div>
                  <div className="flex items-center gap-4 mt-1 justify-between">
                    <div className="relative flex items-center  gap-2 bg-transparent rounded-full py-1 w-fit">
                      <img src={image1.src} className="w-4 h-4 rounded-full" />
                      <img src={image2.src} className="w-3 h-3 rounded-full border-white border-2 -ml-3" />
                      <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3"> 3+ </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[6px] rounded-sm bg-gray-300 p-0.5 font-serif">Visual</span>
                      <span className="text-[6px] rounded-sm bg-gray-300 p-0.5 font-serif ml-0.5 mr-3">🏆</span>
                      <MessageCircle size={7} color="gray" />
                      <p className="text-[6px] text-gray-500 mr-1 ml-0.5">5</p>
                      <Paperclip size={7} color="gray" />
                      <p className="text-[6px] ml-0.5 text-gray-500">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectsCard;