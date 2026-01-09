import { DumbbellIcon, MoreHorizontal, Flag, MessageCircle, Paperclip, Circle } from "lucide-react";
import Slack from "@/public/photos/slack.svg";
import Image from "next/image";
import dropbox from "@/public/photos/dropbox.svg";
import Notion from "@/public/photos/notion2.svg";
import Team from "@/public/photos/team.svg";
import circle from "@/public/photos/circle.svg";
const IntegrationCard = () => {
  return (
    <div className="pl-24 pr-20 relative my-12">
      <div className="relative grid grid-cols-2 gap-8 bg-[rgba(151,91,236,1)] h-[556px]  pt-6 pl-14 z-30 rounded-4xl">
        <div className="flex flex-col items-start h-full pb-8">
          <div className="flex gap-4 space-y-6 items-center justify-center ">
            <div className="flex flex-col gap-4 items-center mt-6">
              <div className="border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,0.2)] border-8 w-13 h-13 ml-2 mt-12  rounded-full "/>
              <div className="bg-white w-0.5 h-44 "></div>
            </div>
            <div>
              <h1 className="text-white text-6xl font-sens">Create calm with,</h1>
              <h1 className="text-white text-6xl">integrations.</h1>
              <h1 className="text-white text-2xl font-extralight mt-6">Connect Fintask with all the favorite tools you’ve </h1>
              <h1 className="text-white text-2xl font-extralight">already use.</h1>
            </div>
          </div>
          <button className="text-center flex items-center gap-4 h-18 ml-8 mt-6 bg-[rgba(252,79,36,1)] py-3 px-8 font-bold text-lg text-white rounded-full border-3 border-[rgba(184,53,20,1)] shadow-[5px_5px_0_0_rgba(184,53,20,1)]"><span className="border-white border-4 inline-flex w-5 h-5  rounded-full"/> Explore integrations</button>
        </div>
        <div className="mt-24 mr-20">
          <div className="bg-[rgba(255,255,255,0.18)] h-full w-full rounded-t-3xl"> 
            <div className="grid grid-cols-2 relative z-30 grid-rows-2 gap-4 w-full h-full p-8">
              <div></div>
              <div className="bg-[rgba(255,255,255,1)] rounded-xl p-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-[rgba(0,98,255,0.08)] border-[rgba(0,98,255,0.24)] border-[0.58px] rounded-full p-2">
                     <Image src={dropbox} alt="Dropbox Logo" className="w-4.5 h-4.5"/>
                    </div>
                    <h1 className="text-sm font-black">Dropbox</h1>
                    <h1 className="text-[rgba(151,91,236,1)] text-[9.67px] bg-[rgba(151,91,236,0.04)] p-1.5 rounded-2xl ml-14 border-[0.73px] border-[rgba(151,91,236,0.08)]">Popular</h1>
                  </div>
                  <div className="h-3 bg-[rgba(246,246,246,1)] rounded-2xl mt-6 mb-4"/>
                  <div className="h-3 w-2/3 bg-[rgba(246,246,246,1)] rounded-2xl mb-4"/>
                  <div className="grid grid-cols-12 gap-4">
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-5 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">See more</button>
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-7 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">+ Sign to install</button>
                  </div>
                </div>    
               </div>
                <div className="bg-[rgba(255,255,255,1)] rounded-xl p-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-[rgba(0,98,255,0.08)] border-[rgba(0,98,255,0.24)] border-[0.58px] rounded-full p-2">
                     <Image src={Team} alt="Microsoft Logo" className="w-4.5 h-4.5"/>
                    </div>
                    <h1 className="text-sm font-black whitespace-nowrap ">Micro Team</h1>
                    <h1 className="text-[rgba(1,122,255,1)] text-[9.67px] bg-[rgba(245,250,255,1)] p-1.5 rounded-2xl ml-14 border-[0.73px] border-[rgba(1,122,255,0.08)]">New</h1>
                  </div>
                  <div className="h-3 bg-[rgba(246,246,246,1)] rounded-2xl mt-6 mb-4"/>
                  <div className="h-3 w-2/3 bg-[rgba(246,246,246,1)] rounded-2xl mb-4"/>
                  <div className="grid grid-cols-12 gap-4">
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-5 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">See more</button>
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-7 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">+ Sign to install</button>
                  </div>
                </div>    
              </div>
              <div className="bg-[rgba(255,255,255,1)] rounded-xl p-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="bg-[rgba(0,98,255,0.08)] border-[rgba(0,98,255,0.24)] border-[0.58px] rounded-full p-2">
                     <Image src={Notion} alt="Notion Logo" className="w-4.5 h-4.5"/>
                    </div>
                    <h1 className="text-sm font-black">Notion</h1>
                    <h1 className="text-[rgba(1,122,255,1)] text-[9.67px] bg-[rgba(245,250,255,1)] p-1.5 rounded-2xl ml-20 border-[0.73px] border-[rgba(1,122,255,0.08)]">New</h1>
                  </div>
                  <div className="h-3 bg-[rgba(246,246,246,1)] rounded-2xl mt-6 mb-4"/>
                  <div className="h-3 w-2/3 bg-[rgba(246,246,246,1)] rounded-2xl mb-4"/>
                  <div className="grid grid-cols-12 gap-4">
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-5 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">See more</button>
                    <button className="bg-[rgba(0,0,0,0.04)] col-span-7 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.04)] p-2 text-xs">+ Sign to install</button>
                  </div>
                </div>    
              </div>
            </div>
            <div className="absolute w-[283px] h-[213.9px] z-630 top-28 right-[380px] bg-[rgba(255,255,255,1)] rounded-xl p-4">
              <div>
                <div className="flex items-center gap-2.5 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-[rgba(236,178,46,0.1)]  rounded-full p-2">
                      <Image src={Slack} alt="Slack Logo" className="w-6 h-6"/>
                    </div>
                    <h1 className="text-lg font-black">Slack</h1>
                  </div>                  
                  <div>
                  <h1 className="text-[rgba(1,122,255,1)] text-[13.23px] bg-[rgba(245,250,255,1)] p-1.5 h-[26.46px] rounded-4xl ml-24 border-[0.73px] border-[rgba(1,122,255,0.08)]">New</h1>
                  </div>
                </div>
                <p className="text-[rgba(112,112,112,1)] text-[15.44px] my-5 ml-3">Get instant tools alerts about new survey integrations.</p>
                
                <div className="grid grid-cols-12 gap-4">
                  <button className="bg-[rgba(0,0,0,0.04)] col-span-5 rounded-2xl border-[0.72px] h-10  border-[rgba(255,255,255,0.24)] text-[rgba(0,0,0,0.48)] p-2 text-sm">See more</button>
                  <button className="bg-black flex items-center justify-center col-span-7 rounded-3xl border-[0.72px] h-10  border-white/25 shadow-[rgba(255,255,255,0.32)] text-white p-2 text-sm"><span className="text-2xl mr-2">+ </span> Sign to install</button>
                </div>
              </div>    
            </div>
            <div className=" absolute rounded-full z-50 top-44 right-48 ">
              <Image src={circle} alt="Circle" className="w-[350px] h-[350px]" />
            </div>
          </div>
        </div>
      </div>
      
        
      <div className="absolute bg-[rgba(0,0,0,0.05)] scale-x-65 rounded-4xl z-0 rotate-4 right-6 translate-x-44 translate-y-8 inset-0"/>
    </div>
  );
}
 
export default IntegrationCard;