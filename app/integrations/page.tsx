import integrate from '@/public/photos/integrate.svg';
import Image from 'next/image';
import { Code2 } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
const Integrations = () => {
  const tools = [
  { label: "Dev Tools", icon: <Code2 className="w-5 h-5" /> },
  { label: "Google", icon: <FcGoogle className="w-5 h-5" /> },
  { label: "Creative", icon: "G" },
  { label: "Multimedia", icon: "G" },
 ]
  return (
    <div>
      <div className='w-[612px] min-h-[277px] mx-auto mt-24'>
        <Image src={integrate} alt="Integrations" />
        <h1 className='text-center mt-4 text-[56px] font-black'>Fintask connects to your favorite apps</h1>
        <p className='text-center text-black/72 text-xl font-normal mt-5'>Fits into your existing workflows and centralizes your team's knowledge</p>
        <div className='flex gap-5'>
          {tools.map((tool, index) => (
            <button
              key={index}
              className="flex w-[185px] h-14 items-center gap-2 text-center rounded-xl border border-black/10 text-xl font-medium hover:bg-purple-100 transition"
            >
              <span>{tool.icon}</span>
              {tool.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Integrations;