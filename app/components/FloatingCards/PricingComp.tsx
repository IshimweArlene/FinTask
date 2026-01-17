'use client';
import users from '@/public/photos/users.svg';
import target from "@/public/photos/1.svg"
import briefcase from "@/public/photos/2.svg"
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
const PricingComp = () => {
  const [active, setActive] = useState<"Monthly" | "Yearly">("Yearly")

  return (
    <div className='mx-auto flex flex-col items-center justify-center w-[1067px] h-[906.35px]'>
      <div>
        <p className="text-[20px] my-7 text-gray-700 font-medium">Choose your billing.</p>
        <div className="bg-white mb-16 flex items-center gap-12 w-[237px] h-[72px] justify-around font-bold text-white text-lg rounded-full border-3 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
          <button onClick={() => setActive("Monthly")} className={active === "Monthly" ? "text-white rounded-3xl p-4 font-semibold bg-[rgba(151,91,236,1)] px-6 py-2" : "text-gray-400 hover:cursor-pointer" }>
            Month
          </button>
          <button onClick={() => setActive("Yearly")} className={ active === "Yearly" ? "text-white rounded-3xl p-4 font-semibold bg-[rgba(151,91,236,1)] px-6 py-2" : "text-gray-400 hover:cursor-pointer"}>
            Yearly
          </button>
        </div>
      </div>
      
      <div className="w-[1067px] h-[688px] grid grid-cols-3 justify-between mx-auto gap-12 items-start">
        
        <div className='h-[634.03px] border border-[rgba(0,0,0,0.04)] px-6 py-4 rounded-2xl'>
          <div>
            <Image src={users} alt="users" />
            <h1 className="text-[24px] font-medium mt-6"> Individuals</h1>
          </div>
          <div>
            <h1 className='text-[56px] font-bold mt-6'>$9.99</h1>
            <h1 className='text-[20px] font-normal'>Per month</h1>
          </div>
          <div className='flex flex-col  justify-center items-start gap-8 mt-6'>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Unlimited projects, clients</p>
            </div>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Personal desktop activity tracking</p>
            </div>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>You can add 05 members on your project</p>
            </div>
          </div>
          <button className="bg-white mt-16 flex items-center gap-6 py-4 px-9 font-bold text-[rgba(151,91,236,1)] text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
            <div className="border-4 w-5 h-5 border-[rgba(151,91,236,1)] rounded-full"/>
            Get Buy
          </button>
        </div>
        <div className='h-[688px] w-[338px] bg-[rgba(250,255,90,1)] px-6 py-4 rounded-2xl border-[rgba(237,245,0,1)] border-4 shadow-[12px_12px_0_0_rgba(237,245,0,1)]'>
          <div>
            <Image src={target} alt="users" />
            <h1 className="text-[24px] font-medium mt-6"> Elite Team</h1>
          </div>
          <div>
            <h1 className='text-[56px] font-bold mt-6'>$12.99</h1>
            <h1 className='text-[20px] font-normal'>Per month</h1>
            <div className=' bg-[rgba(252,79,36,1)] my-5 w-fit px-4 p-2 flex items-center justify-center rounded-4xl'>
              <p className='text-white font-medium text-[14px]'>15 days free trials !</p>
            </div>
          </div>
          <div className='flex flex-col  justify-center items-start gap-8 mt-6'>
            <div className='flex justify-center gap-4 items-start'>
              <Check color='white' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,1)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Everything in Starter +</p>
            </div>
            <div className='flex justify-center gap-4 items-start'>
              <Check color='white' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,1)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Centralized control of labor costs and billable rates for team members</p>
            </div>
            <div className='flex justify-center gap-4 items-start'>
              <Check color='white' size={30} className='shrink-0 border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,1)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Single sign-on (SSO)</p>
            </div>
          </div>
          <button className="bg-[rgba(151,91,236,1)] mt-16 flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
            <div className="border-4 w-5 h-5 border-white rounded-full"></div>
            Get Buy
          </button>
        </div>
        <div className='h-[634.03px] border-[rgba(0,0,0,0.04)] border px-6 py-4 rounded-2xl'>
          <div>
            <Image src={briefcase} alt="users" />
            <h1 className="text-[24px] font-medium mt-6"> Startup</h1>
          </div>
          <div>
            <h1 className='text-[40px] font-bold mt-6'>Contact </h1>
            <h1 className='text-[20px] font-normal'>us to pre order</h1>
          </div>
          <button className="bg-[rgba(151,91,236,1)] mt-8 mb-6 flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
            <div className="border-4 w-5 h-5 border-white rounded-full"></div>
            Contact Now
          </button>
          <div className='flex flex-col  justify-center items-start gap-8 mt-8'>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Everything in Premium +</p>
            </div>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Manage multiple workspaces under one Organization</p>
            </div>
            <div className='flex justify-center gap-4 items-center'>
              <Check color='rgba(151,91,236,1)' size={30} className='border-2px shrink-0 border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
              <p className='text-[18px] font-normal'>Expert training and assistance</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
 
export default PricingComp;