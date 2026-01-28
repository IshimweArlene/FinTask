'use client';
import { ArrowLeft, ArrowRight, Plus} from 'lucide-react';
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
          <div className='flex gap-3 border-b-2 border-black/88'>
            <div className='flex items-center gap-3'>
              <Image src={CalenderBank} alt='CalenderBank' />
              <div className='h-2.5 w-[111px] bg-[rgba(247,247,247,1)] rounded-2xl'/>
            </div>
            <div className='flex items-center gap-3'>
              <Image src={Table} alt='CalenderBank' />
              <div className='h-2.5 w-[111px] bg-[rgba(247,247,247,1)] rounded-2xl'/>
            </div>
            <div className='flex items-center gap-3 text-black font-medium text-[18.71px] '>
              <Image src={Calendar} alt='CalenderBank' />
              Calendar View
            </div>
            <div>
              <Plus size={24.93} color='black' className='bg-black/4 p-1 shrink-0 rounded-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingComponent;
