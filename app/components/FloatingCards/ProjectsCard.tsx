import { DumbbellIcon,} from "lucide-react";
import frame from "@/public/photos/Frame 217.svg";
import Image from "next/image";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
import Notion from "@/public/photos/notion.svg";
import Trello from "@/public/photos/trello.svg";
const ProjectsCard = () => {
  return (
    <div className="px-28 relative my-12" >
      <div className="relative grid grid-cols-2 gap-8 bg-[rgba(20,80,26,1)] h-[490px] py-8 pl-4 z-30 mt-32 rounded-2xl">
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
          <div className="flex flex-col bg-[rgba(255,255,255,0.96)] rounded-2xl py-8 px-12 h-[430px] rounded-b-none mt-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="bg-[rgba(255,255,255,1)]  space-y-2 rounded-xl flex items-center">
                  <div className="bg-[rgba(245,245,245,1)]  rounded-full p-3">
                    <Image src={Notion} alt="Notion" className="w-10 h-10"/>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold ml-4">Notions</h1>
                    <div className="flex items-center gap-3.5">
                      <div className="w-36 h-2.5 bg-[rgba(151,91,236,0.12)] ml-4 rounded-lg">
                        <div className="h-full bg-[rgba(151,91,236,1)] transition-all rounded-lg" style={{ width: "80%" }}/>
                      </div>
                      <p className="font-black text-md">80%</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,1)]  space-y-2 rounded-xl mt-5 flex items-center">
                  <div className="bg-[rgba(245,245,245,1)] rounded-full p-3 ">
                    <Image src={Trello} alt="Trello" className="w-10 h-10" />
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold ml-4">Trello</h1>
                    <div className="flex items-center gap-3.5">
                      <div className="w-36 h-2.5 bg-[rgba(255,209,90,0.12)] ml-4 rounded-lg">
                        <div className="h-full bg-[rgba(255,209,90,1)] transition-all rounded-lg" style={{ width: "60%" }}/>
                      </div>
                      <p className="font-black text-md">60%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-[rgba(255,255,255,1)]  rounded-xl flex items-center">
                  <div className="bg-white p-8 rounded-2xl">
                  <div className="relative w-32 h-20">
                    <div className="absolute inset-0 bg-[rgba(20,80,26,1)] rounded-2xl z-50" />
                    <div className="absolute inset-0 translate-x-8 bg-[rgba(243,176,255,1)] rounded-2xl z-40" />
                    <div className="absolute inset-0 translate-x-15 bg-[rgba(255,209,90,1)]  rounded-2xl z-30" />
                    <div className="absolute inset-0 translate-x-19 bg-[rgba(252,79,36,1)] rounded-2xl z-20" />
                    <div className="absolute inset-0 scale-y-60 translate-x-23  bg-[rgba(252,79,36,1)] rounded-xl z-10" />
                  </div>
                  <div className="flex gap-6 mt-6 text-sm">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[rgba(20,80,26,1)] rounded-full" />
                      <p className="text-[9.7px]">Complete</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[rgba(243,176,255,1)] rounded-full" />
                      <p className="text-[9.7px]">Progress</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[rgba(255,209,90,1)] rounded-full" />
                      <p className="text-[9.7px]">Pending</p>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[rgba(252,79,36,1)] rounded-full" />
                      <span className="text-[9px]">Not</span>
                      <span className="text-[9px]">Started</span>
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectsCard;