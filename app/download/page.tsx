'use client';

import WindowsLogo from "@/public/photos/WindowsLogo.svg";
import MacLogo from "@/public/photos/AppleLogo.svg";
import LandingComponent from "../components/landingpageComp";
import Image from "next/image";
import { useState } from "react";
const Download = () => {
  const [active, setActive] = useState <number | null>(null);
  return (
    <div>
      <div className="max-h-[670px] mx-auto">
        <div className="grid grid-cols-12 pl-20 items-center gap-12 overflow-hidden">
          <div className="col-span-4">
            <div className="flex mb-4 items-center gap-3">
              <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-2 w-3.5 h-3.5 rounded-full "></div>
              <h1 className="caveat font-normal strike text-[rgba(188,188,188,1)] text-2xl ">Advantages</h1>
            </div>
            <p className="font-bold text-5xl my-4">Fintask for Your Desktop.</p>
            <p className="font-normal text-lg text-black/72 mb-4">An all-in-one task management that works on your desktop and in your browser. </p>
            <div className="flex gap-6 items-center mt-6">
              <button onClick={() => setActive(1)} className={`flex items-center text-black text-lg font-semibold border-2
                ${
                  active === 1
                    ? 'bg-[rgba(151,91,236,1)] py-3 px-6 rounded-2xl text-white border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]'
                    : 'bg-white py-3 px-6 rounded-2xl  border-black/10 hover:bg-purple-100 shadow-[5px_5px_0_0_rgba(0,0,0,1)]'
                }`}>
                <Image src={WindowsLogo} alt="Windows Logo" width={32} height={32} />
                Windows
              </button>
              <button onClick={() => setActive(2)} className={`flex items-center text-black text-lg font-semibold border-2
                ${
                  active === 2
                    ? 'bg-[rgba(151,91,236,1)] py-3 px-6 rounded-2xl text-white border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]'
                    : 'bg-white py-3 px-6 rounded-2xl text-black border-black hover:bg-purple-100 shadow-[5px_5px_0_0_rgba(0,0,0,1)]'
                }`}>
                <Image src={MacLogo} alt="Mac Logo" width={32} height={32} />
                Mac Os
              </button>
            </div>
          </div>
          <div className="col-span-8 flex justify-center items-center">
            <LandingComponent />
          </div>
        </div>
      </div>
    </div>  
  );
}
 
export default Download;