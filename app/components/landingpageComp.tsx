'use client';
import { ArrowLeft, ArrowRight, BarChartBigIcon } from 'lucide-react';
import { useState } from 'react';

const LandingComponent = () => {
 
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
          <div className='flex px-2 border-b-2 border-black/88'>
            <div className='flex items-center gap-2'>
              <BarChartBigIcon size={16} color='black' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingComponent;
