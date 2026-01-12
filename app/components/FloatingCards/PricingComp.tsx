import users from '@/public/photos/users.svg';
import { Check } from 'lucide-react';
import Image from 'next/image';
const PricingComp = () => {
  return (
    <div className="w-[1067px] h-[688px] grid grid-cols-3 justify-center items-center">
      <div>
        <div>
          <Image src={users} alt="users" />
          <h1 className="text-[24px] font-medium mt-6"> Individuals</h1>
        </div>
        <div>
          <h1 className='text-[56px] font-bold mt-6'>$9.99</h1>
          <h1 className='text-[20px] font-normal'>Per month</h1>
        </div>
        <div className='flex flex-col  justify-center items-start gap-4 mt-6'>
          <div className='flex justify-center gap-4 items-center'>
            <Check color='rgba(151,91,236,1)' size={30} className='border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
            <p className='text-[18px] font-normal'>Unlimited projects, clients</p>
          </div>
          <div className='flex justify-center gap-4 items-center'>
            <Check color='rgba(151,91,236,1)' size={30} className='border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
            <p className='text-[18px] font-normal'>Personal desktop activity tracking</p>
          </div>
          <div className='flex justify-center gap-4 items-center'>
            <Check color='rgba(151,91,236,1)' size={30} className='border-2px border-[rgb(151,91,236)] bg-[rgba(151,91,236,0.08)] rounded-full p-1' />
            <p className='text-[18px] font-normal'>You can add 05 members on your project</p>
          </div>
        </div>
        <button className="bg-[rgba(151,91,236,1)] mb-16 flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
          <div className="border-4 w-5 h-5 border-white rounded-full"></div>
          Get Start
        </button>
      </div>
    </div>
  );
}
 
export default PricingComp;