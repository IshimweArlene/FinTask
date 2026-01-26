'use client';
import { useState } from 'react';
import integrate from '@/public/photos/integrate.svg';
import Image from 'next/image';
import { Code2, ArrowRightIcon } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Integrations = () => {
  const tools = [
    { label: "Dev Tools", icon: <Code2 className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Google", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Creative", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Multimedia", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
  ];

  const [active, setActive] = useState<number | null>(null); // ✅ FIXED

  return (
    <div>
      <div className='w-[612px] min-h-[277px] mx-auto mt-24'>
        <Image src={integrate} alt="Integrations" />
        <h1 className='text-center mt-4 text-[56px] font-black'>
          Fintask connects to your favorite apps
        </h1>
        <p className='text-center text-black/72 text-xl font-normal mt-5'>
          Fits into your existing workflows and centralizes your team's knowledge
        </p>

        <div className='flex gap-5'>
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`flex max-w-[185px] mt-4 h-14 items-center gap-2 px-2 rounded-xl text-lg font-medium transition border-2 
                ${
                  active === index
                    ? "bg-[rgba(151,91,236,1)] text-white border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]"
                    : "border border-black/10 hover:bg-purple-100"
                }
              `}
            >
              <span>{tool.icon}</span>
              {tool.label}
              <span>{tool.arrow}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
