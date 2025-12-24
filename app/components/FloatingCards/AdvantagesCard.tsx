import { DumbbellIcon, MoreHorizontal } from "lucide-react";
import frame from "@/public/photos/Frame 217.svg";
import Image from "next/image";
const AdvantagesCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 bg-[rgba(252,79,36,1)] p-4 rounded-2xl">
        <div>
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
          <div className="flex items-center gap-4 px-2 py-2 w-fit rounded-3xl border-[0.1px] border-gray-50/30">
            <div className="bg-[rgba(255,255,255,0.2)]  rounded-2xl flex items-center justify-center w-10 h-10 ">
              <DumbbellIcon className="text-white  rotate-45" size={20} />
            </div>
            <h1 className="text-2xl text-white font-medium">Costumized your workflow.</h1>
          </div>
          <div className="flex items-center gap-4 px-2 py-2 mt-5 w-fit rounded-3xl border-[0.1px] border-gray-50/30">
            <div className="bg-[rgba(255,255,255,0.2)]  rounded-2xl flex items-center justify-center w-10 h-10 ">
              <Image src={frame} alt="frame icon" />
            </div>
            <h1 className="text-2xl text-white font-medium">Extra features for complex projects.</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-2 bg-white rounded-2xl py-8 px-12 mt-12">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex">
                  <p className="text-gray-900 text-xl">🎒 New project</p>
                </div>
                <h1 className="text-3xl mb-8 font-semibold">Fintask Web</h1>
                <div className="border-gray-300/50 border-[0.2px] px-4 py-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-700 text-lg">Fintask</p>
                    <MoreHorizontal className="text-black " size={20} />
                  </div>
                  <h1 className="text-2xl mb-4 font-semibold">Bug Fix</h1>
                  <p className="text-gray-700 mb-4">Micro interactions, Loading and Progress, Navigation.</p>
                  <div></div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
 );
}
 
export default AdvantagesCard;