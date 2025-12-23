"use client";

import { useState } from "react";
import { ChevronDown, MoreHorizontal, Paperclip, MessageCircle } from "lucide-react";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";

const Cards = () => {
  const [active, setActive] = useState<"day" | "week" | "month">("day");

  return (
    <div>
      <div className="w-96 bg-[rgba(252,252,232,1)] pr-6 rounded-2xl">
        <div className="flex items-center pt-6 pb-4 px-6">
          <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-4 w-5 h-5 rounded-full"></div>
          <h1 className="text-[26px] font-black ml-2">Task Progress</h1>
        </div>

        <div>
          <p className="text-[19px] text-start text-gray-800 ml-12 mb-3.5">
            Send scheduling links guests love
          </p>
        </div>

        <div className="bg-white p-3 rounded-r-2xl">
          <div className="flex justify-between">
            <div className="flex items-center">
              <ChevronDown fill="black" size={18} className="rotate-270" />
              <p className="text-[13px] font-bold"> November 15</p>
            </div>

            <div className="bg-gray-300 w-fit flex items-center p-2 gap-3 rounded-xl">
              <button
                onClick={() => setActive("day")}
                className={
                  active === "day"
                    ? "text-black font-semibold bg-white px-2 rounded-md"
                    : "text-gray-400"
                }
              >
                Day
              </button>

              <button
                onClick={() => setActive("week")}
                className={
                  active === "week"
                    ? "text-black font-semibold bg-white px-2 rounded-md"
                    : "text-gray-400"
                }
              >
                Week
              </button>

              <button
                onClick={() => setActive("month")}
                className={
                  active === "month"
                    ? "text-black font-semibold bg-white px-2 rounded-md"
                    : "text-gray-400"
                }
              >
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
              <img
                src={image2.src}
                className="w-3.5 h-3.5 rounded-full border-white border-2 -ml-3"
              />
              <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">
                3+
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-2 mt-6">
            <h1 className="text-gray-400 text-xs">10:00 AM</h1>
            <div className="flex-1 h-[0.5px] bg-gray-300"></div>
          </div>

          <div className="flex ml-32 -mt-8 border-[rgba(167,195,209,1)] border-2 items-center gap-4 w-40 py-2 px-2 rounded-xs bg-[rgba(225,251,254,1)]">
            <div>
              <h1 className="text-[8px]">Fintask</h1>
              <h1 className="text-xs font-black">Ux copywrite</h1>
            </div>

            <div className="relative flex items-center gap-2 bg-transparent rounded-full py-1 w-fit">
              <img src={image1.src} className="w-[17px] h-[17px] rounded-full" />
              <img
                src={image2.src}
                className="w-3.5 h-3.5 rounded-full border-white border-2 -ml-3"
              />
              <span className="text-[6px] flex justify-center items-center h-3.5 w-3.5 rounded-full border-white border font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-3">
                3+
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 pr-2 mt-6">
            <h1 className="text-gray-400 text-xs">12:00 PM</h1>
            <div className="flex-1 h-[0.5px] bg-gray-300"></div>
          </div>

          <div className="w-96 bg-white absolute z-30 rounded-xl py-4 px-4 space-y-3 shadow-xs border-gray-300">
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
                <img
                  src={image2.src}
                  className="w-6 h-6 rounded-full border-white border-2 -ml-5"
                />
                <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">
                  3+
                </span>
              </div>

              <div className="flex">
                <p className="text-xs font-serif">Style Guide</p>
                <p className="text-xs mr-3">🌈</p>
                <p className="mr-1">
   <MessageCircle size={13} color="gray" />
                </p>
                <p className="text-xs text-gray-500 mr-4">5</p>
                <p className="mr-1">
                  <Paperclip size={13} color="gray" />
                </p>
                <p className="text-xs text-gray-500">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
