'use client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const LandingComponent = () => {
 
  return (
    <div className='w-[1122px] h-[908px] bg-white'>
      <div className='flex items-stretch '>
        <div className='w-[287.51px] rounded-l-2xl h-[908.51px] bg-[rgba(240,239,234,0.56)]'>

        </div>
        <div className='px-14 py-12'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center text-black text-[14.03px] gap-2'>
              <ArrowLeft size={12} color='black' />
              <ArrowRight size={12} color='gray' />
              <div className='bg-black/8 w-11 h-1.5 rounded-2xl'/>
              /Landing
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingComponent;
