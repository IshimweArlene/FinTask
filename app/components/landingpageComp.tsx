'use client';
import {Triangle, ChevronDown,  ChevronUp, Inbox, Search, Settings} from 'lucide-react';
import {Users2, Settings2, InboxIcon, Clock} from 'lucide-react';
import image1 from '@/public/photos/image1.png'
import image2 from '@/public/photos/image2.png';
import { useState } from 'react';

const LandingComponent = () => {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 p-20 rounded-4xl mt-20 bg-[rgba(240,239,234,0.56)]">
        <div className="col-span-4">
          <div className="flex gap-4">
            <div className="rounded-full text-2xl flex justify-center items-center text-[rgba(250,255,90,1)] w-12 h-12 bg-[rgba(252,79,36,1)]">S</div>
            <div>
              <h1 className="text-xl font-black mb-2">Sadek Hosen</h1>
              <div className="w-20 bg-[rgba(232,228,217,1)] h-2 rounded-2xl"></div>
            </div>
            <div className='text-[#bdb7a8] ml-12'>
              <ChevronUp className='size-5'/>
              <ChevronDown className='size-5'/>
            </div>
          </div>

          <div>
            <div className='bg-white p-2 rounded-xl flex items-center my-8 justify-between'>
              <div className='flex gap-2'>
                <Search className='text-[rgba(232,228,217,1)]'/>
                <h1 className='text-[#6b6b6b]'>Quick Find</h1>
              </div>
              <div className='flex gap-2'>
                <div className='text-[#949085] bg-gray-200 p-1 text-sm'>⌘</div>
                <div className='text-[#949085] bg-gray-200 p-1 text-sm'>K</div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between mb-8'>
             <div className='flex gap-4'>
              <Inbox />
              <p className='font-black text-lg'>Inbox</p>
             </div>
             <div className='bg-gray-300 p-2  font-bold w-6 h-6 flex justify-center items-center  rounded-full'><div className=' bg-[rgba(151,91,236,1)] text-4xl w-2 h-2 rounded-full'></div></div>
            </div>
            <div className='flex justify-between mb-8'>
             <div className='flex gap-4'>
              <Users2 />
              <p className='font-black text-lg'>Team Members</p>
             </div>
                <div className="relative flex items-center gap-2 bottom-3 bg-white ml-6 rounded-full px-2 py-1 w-fit">
                <img src={image1.src} className="w-8 h-8 rounded-full" />
                <img src={image2.src} className="w-6 h-6 rounded-full border-white border-2 -ml-5" />
                <span className="text-lg h-8 w-8 rounded-full flex justify-center items-center border-white border-4 font-semibold bg-black  text-white -ml-4">
                +
                </span>
                 <div className="w-64 p-4 border rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-bold text-gray-800"
      >
        <Triangle
          size={14}
          fill="currentColor"
          className={`transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
        Habite Tracker
      </button>

      {open && (
        <ul className="mt-4 relative">
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full relative">
              <div className="absolute left-1/2 top-4 h-full border-l border-gray-300"></div>
            </div>
            <span>Task 1</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full relative">
              <div className="absolute left-1/2 top-4 h-full border-l border-gray-300"></div>
            </div>
            <span>Task 2</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <span>Task 3</span>
          </li>
        </ul>
      )}
    </div>
            </div>      
          </div>
            <div className='flex justify-between mb-8'>
             <div className='flex gap-4'>
              <Clock />
              <div className="w-20 bg-[rgba(232,228,217,1)] mt-2.5 h-2 rounded-2xl"></div>
             </div>
             <div className='bg-[rgba(252,79,36,0.12)] p-2  font-bold w-6 h-6 flex justify-center items-center  rounded-full'><div className=' bg-[rgba(252,79,36,1)] text-4xl w-2 h-2 rounded-full'></div></div>
            </div>
            <div className='flex justify-between mb-8'>
             <div className='flex gap-4'>
              <Settings />
              <div className="w-20 bg-[rgba(232,228,217,1)] mt-2.5 h-2 rounded-2xl"></div>
             </div>
            </div>
          </div>
         <div className='mt-8'>
            <div className='flex justify-between'>
                <p className='text-gray-400'>Workspace</p>
                <div className='text-xl flex bg-gray-400 rounded-full w-6 h-6 justify-center items-center '>+</div>
            </div>
            <div className='flex mt-8 gap-4'>
              <ChevronUp className='size-5 fill-black rotate-90'/>
             <div className="w-20 bg-[rgba(232,228,217,1)] mt-1.5 h-2 rounded-2xl"></div>
            </div>
            <div className='mt-5 bg-[rgba(243,176,255,1)] flex rounded-xl w-fit py-3 gap-4 pl-4 pr-7'>
              <ChevronUp className='size-5 fill-black rotate-180'/>
              <p className='font-black'>FinTask Web ..</p>
            </div>
         </div>
        </div>

        <div className='col-span-8'></div>
      </div>
    </div>
  );
}

export default LandingComponent;
