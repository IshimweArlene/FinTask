import PricingComp from "../components/FloatingCards/PricingComp";
import image1 from '@/public/photos/image1.png'
import image2 from '@/public/photos/image2.png'
import users from '@/public/photos/users.svg';
import target from "@/public/photos/1.svg"
import briefcase from "@/public/photos/2.svg"
import Image from "next/image";
import { Check, Plus } from "lucide-react";
import FAQ from "../components/Faq";
const Pricing = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] max-h-[1464px]">
        <div className='relative flex justify-center'>
          <div className="relative max-w-[116px] max-h-12 flex items-center justify-center gap-2 z-0 bg-gray-300 rounded-full px-4 py-2 shadow-md "/>
          <div className="relative flex items-center justify-center gap-2 -ml-28 bottom-4 z-30 bg-white  rounded-full px-2 py-1 rotate-10 w-fit">
            <img src={image1.src} className="w-12 h-12 rounded-full" />
            <img src={image2.src} className="w-10 h-10 rounded-full border-white border-2 -ml-5"/>
            <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">2+</span>
          </div>
        </div>  
        <div>
          <h1 className="text-6xl text-center font-bold gap-4"> Unbeatable prices, simple.</h1>
          <p className="text-black/72 mt-5 font-black text-center text-xl mb-6 px-4"> Start for free, or as low as $9 a month.</p>
        </div>   
      </div>
      <PricingComp />
      <div className="bg-[rgba(249,249,229,1)] w-full mt-12 h-[1922px] grid grid-rows-3 justify-center p-24 items-start">
        <div className="flex bg-white gap-4 p-12 w-7xl h-[520px]">
          <div className=" flex flex-1 mr-12 flex-col items-start  mt-6">
            <div className="flex gap-2 justify-center items-center">
              <Image src={users} alt="users" className="h-14 w-14" />
              <h1 className="text-[24px] font-medium "> Individuals</h1>
            </div>
            <div className="flex flex-col flex-1 w-full justify-between border-r-2 border-black/8 pr-10">
              <p className="font-normal text-lg  mt-12">Automate routine tasks so you can focus on building relationships, closing deals, and hitting gongs.</p>
              <button className="bg-white w-[156px] h-[53px] flex items-center gap-6 justify-center text-center font-bold text-black text-lg rounded-full border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
                Read More 
              </button> 
            </div>            
          </div>
          <div className="flex-1">
            <p className="font-medium text-3xl mb-8 mt-8">It's help you:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Collaborators per project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Personal desktop activity tracking</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>You can add 05 members on your project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Calendar sync</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Activity history</p>
              </div>
            </div>            
          </div>
          <div className="flex-1 ">
            <p className="font-medium text-3xl my-8">What include:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Completed tasks archive</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Shared team inbox</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Productive trends</p>
              </div>
                          
            </div>            
          </div>
        </div>
        <div className="flex bg-white gap-4 p-12 w-7xl h-[520px]">
          <div className=" flex flex-1 mr-12 flex-col items-start  mt-6">
            <div className="flex gap-2 justify-center items-center">
              <Image src={users} alt="users" className="h-14 w-14" />
              <h1 className="text-[24px] font-medium "> Individuals</h1>
            </div>
            <div className="flex flex-col flex-1 w-full justify-between border-r-2 border-black/8 pr-10">
              <p className="font-normal text-lg  mt-12">Automate routine tasks so you can focus on building relationships, closing deals, and hitting gongs.</p>
              <button className="bg-white w-[156px] h-[53px] flex items-center gap-6 justify-center text-center font-bold text-black text-lg rounded-full border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
                Read More 
              </button> 
            </div>            
          </div>
          <div className="flex-1">
            <p className="font-medium text-3xl mb-8 mt-8">It's help you:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Collaborators per project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Personal desktop activity tracking</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>You can add 05 members on your project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Calendar sync</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Activity history</p>
              </div>
            </div>            
          </div>
          <div className="flex-1 ">
            <p className="font-medium text-3xl my-8">What include:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Completed tasks archive</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Shared team inbox</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Productive trends</p>
              </div>
                          
            </div>            
          </div>
        </div>
        <div className="flex bg-white gap-4 p-12 w-7xl h-[520px]">
          <div className=" flex flex-1 mr-12 flex-col items-start  mt-6">
            <div className="flex gap-2 justify-center items-center">
              <Image src={users} alt="users" className="h-14 w-14" />
              <h1 className="text-[24px] font-medium "> Individuals</h1>
            </div>
            <div className="flex flex-col flex-1 w-full justify-between border-r-2 border-black/8 pr-10">
              <p className="font-normal text-lg  mt-12">Automate routine tasks so you can focus on building relationships, closing deals, and hitting gongs.</p>
              <button className="bg-white w-[156px] h-[53px] flex items-center gap-6 justify-center text-center font-bold text-black text-lg rounded-full border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
                Read More 
              </button> 
            </div>            
          </div>
          <div className="flex-1">
            <p className="font-medium text-3xl mb-8 mt-8">It's help you:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Collaborators per project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Personal desktop activity tracking</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>You can add 05 members on your project</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Calendar sync</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Plus color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Activity history</p>
              </div>
            </div>            
          </div>
          <div className="flex-1 ">
            <p className="font-medium text-3xl my-8">What include:</p>
            <div className="flex flex-col items-start gap-9">
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-lg font-normal'>Completed tasks archive</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Shared team inbox</p>
              </div>
              <div className='flex justify-center gap-4 items-center'>
                <Check color='rgba(151,91,236,1)' size={22} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
                <p className='text-[18px] font-normal'>Productive trends</p>
              </div>
                          
            </div>            
          </div>
        </div>
        
      </div>
      <FAQ />
     </div>
  );
}
 
export default Pricing;