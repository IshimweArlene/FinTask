'use client';
import { ArrowLeft, ArrowRight, Plus, Star, MoreHorizontal, MessageCircle, Paperclip, ChevronDown} from 'lucide-react';
import CalenderBank from '@/public/photos/landingComp/CalendarBlank.svg'
import Calendar from '@/public/photos/landingComp/CalendarBlank.png'
import Clock from '@/public/photos/landingComp/Clock.svg'
import Download from '@/public/photos/landingComp/Download.svg'
import GearSix from '@/public/photos/landingComp/GearSix.svg'
import Table from '@/public/photos/landingComp/Table.svg'
import Trash from '@/public/photos/landingComp/Trash.svg'
import Tray from '@/public/photos/landingComp/Tray.svg'
import { useState } from 'react';
import Image from 'next/image';
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";

const LandingComponent = () => {
  const [active, setActive] = useState<"day" | "week" | "month">("day");
  return (
    <div className='w-[1122px] h-[908px] bg-white'>
      <div className='flex items-stretch '>
        <div className='w-[287.51px] rounded-l-2xl h-[908.51px] bg-[rgba(240,239,234,0.56)]'>

        </div>
        <div className='px-14 py-12 w-[834.49px]'>
          <div className='flex items-center justify-between mb-12'>
            <div className='flex items-center text-black text-[14.03px] gap-2'>
              <ArrowLeft size={12} color='black' />
              <ArrowRight size={12} color='gray' />
              <div className='bg-black/8 w-11 h-1.5 rounded-2xl'/>
              /Landing
            </div>
            <div>

            </div>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <div className='w-[339px]'>
              <p className='text-black/88 text-[15.58px] mb-2 '>🎒 Web Design </p>
              <p className='font-semibold text-black text-[34.28px]'>Fintask Landing Page</p>
            </div>
            <div className='flex justify-between items-center w-[247.65px]'>
              <div>
                <p className='font-medium text-black text-[24.93px]'>ORM</p>
                <p className='text-black/64 text-[14.03px] mb-2 '>COMPANY</p>
              </div>
              <div>
                <p className='font-medium text-black text-[24.93px] leading-tight'>15 JUL 2022</p>
                <p className='text-black/64 text-[14.03px] mb-2 '>START DATE </p>
              </div>              
            </div>
          </div>
          <div className='flex gap-6 border-b-2 border-black/88'>
            <div className='flex items-center gap-3'>
              <Image src={CalenderBank} alt='CalenderBank' />
              <div className='h-2.5 w-[111px] bg-[rgba(247,247,247,1)] rounded-2xl'/>
            </div>
            <div className='flex items-center gap-3'>
              <Image src={Table} alt='CalenderBank' />
              <div className='h-2.5 w-[69px] bg-[rgba(247,247,247,1)] rounded-2xl'/>
            </div>
            <div className='flex items-center gap-3 text-black font-medium text-[18.71px] '>
              <Image src={Calendar} alt='CalenderBank' />
              Calendar View
            </div>
            <div className='flex items-center gap-5'>
              <Plus size={24.93} color='black' className='bg-black/4 p-1 shrink-0 rounded-full ml-4' />
              <Star size={15.58} color='black' fill='black' />
              <div className='h-2.5 w-[58px] bg-[rgba(247,247,247,1)] rounded-2xl'/>
              <MoreHorizontal size={24.93} color='black' />
            </div>
          </div>
          <div className="bg-white p-3 rounded-r-2xl rounded-bl-2xl">
            <div className="flex justify-between">
              <div className="flex items-center">
                <ChevronDown fill="black" size={18} className="rotate-270" />
                <p className="text-[13px] font-bold">November 15</p>
              </div>
              <div className="bg-gray-300 w-fit flex items-center p-2 gap-3 rounded-xl">
                <button onClick={() => setActive("day")} className={active === "day" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400" }>
                  Day
                </button>
                <button onClick={() => setActive("week")} className={ active === "week" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400"}>
                  Week
                </button>
                <button onClick={() => setActive("month")} className={ active === "month" ? "text-black font-semibold bg-white px-2 rounded-md" : "text-gray-400"}>
                  Month
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-2 mt-6">
              <h1 className="text-gray-400 text-xs">08:00 AM</h1>
              <div className="flex-1 h-[0.5px] bg-gray-300"></div>
            </div>

            <div className="flex ml-[66px] -mt-2 border-[rgba(243,176,255,1)] border-2 items-center gap-4 w-40 py-4 px-2 rounded-md bg-[rgba(252,233,255,1)]">
              <div>
                <h1 className="text-[8px]">Fintask</h1>
                <h1 className="text-xs font-black">Developement</h1>
              </div>
              <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                <img src={image1.src} className="w-[17px] h-[17px] rounded-full" />
                <img src={image2.src} className="w-3.5 h-3.5 rounded-full border-white border-2 -ml-3" />
                <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">3+ </span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-2 mt-6">
              <h1 className="text-gray-400 text-xs">10:00 AM</h1>
              <div className="flex-1 h-[0.5px] bg-gray-300"></div>
            </div>

            <div className="flex ml-36 -mt-8 border-[rgba(167,195,209,1)] border-2 items-center gap-4 w-40 py-2 px-2 rounded-xs bg-[rgba(225,251,254,1)]">
              <div>
                <h1 className="text-[8px]">Fintask</h1>
                <h1 className="text-xs font-black">Ux copywrite</h1>
              </div>
              <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                <img src={image1.src} className="w-[17px] h-[17px] rounded-full" />
                <img src={image2.src} className="w-3.5 h-3.5 rounded-full border-white border-2 -ml-3" />
                <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">3+</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pr-2 mt-12">
              <h1 className="text-gray-400 text-xs">12:00 PM</h1>
              <div className="flex-1 h-[0.5px] bg-gray-300"></div>
            </div>

            <div className="w-[172px] ml-24 -mt-12 bg-[rgba(253,254,225,1)] rounded-xl py-2 px-2 space-y-1 border border-[rgba(248,255,31,1)]">
              <div className="flex items-center gap-12 justify-between">
                <p className="font-extralight text-gray-400 text-[8px]">Fintask</p>
                <MoreHorizontal />
              </div>
              <div>
                <h1 className="font-black text-xs">Web Visual Design</h1>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
                  <img src={image1.src} className="w-[17px] h-[17px] rounded-full" />
                  <img src={image2.src} className="w-3.5 h-3.5 rounded-full border-white border-2 -ml-3" />
                  <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3"> 3+ </span>
                </div>
                <div className="flex items-center">
                  <span className="text-[7px] rounded-sm bg-gray-300 p-1 font-serif">Visual</span>
                  <span className="text-[7px] rounded-sm bg-gray-300 p-1 font-serif ml-0.5 mr-3">🏆</span>
                  <p><MessageCircle size={10} color="gray" /></p>
                  <p className="text-[7px] text-gray-500 mr-2">5</p>
                  <p><Paperclip size={10} color="gray" /></p>
                  <p className="text-[7px] text-gray-500">3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingComponent;
