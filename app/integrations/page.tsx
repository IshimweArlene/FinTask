'use client';
import { useState } from 'react';
import integrate from '@/public/photos/integrate.svg';
import Image from 'next/image';
import { Code2, ArrowRightIcon, FileX } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import zapier from '@/public/photos/zappier.svg';
import sharepoint from '@/public/photos/sharePoint.svg';
import github from '@/public/photos/github.svg';
import jira from '@/public/photos/jira.svg';
import dropbox from '@/public/photos/dropbox.svg';
import slack from '@/public/photos/slack.svg';
import zoom from '@/public/photos/zoom.svg';
import microteam from '@/public/photos/users.svg'

const Integrations = () => {
  const tools = [
    { label: "Dev Tools", icon: <Code2 className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Google", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Creative", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
    { label: "Multimedia", icon: <FcGoogle className="w-4.5 h-4.5" />, arrow: <ArrowRightIcon className="w-4 h-4" /> },
  ];
  const integrations = [
    {
      icon: zapier,
      name: "Zapier",
      description: "Get instant tools alerts about new survey integrations.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "orange",
    },
    {
      icon: sharepoint,
      name: "Sharepoint",
      description: "Send and receive updates directly in your Slack channels.",
      tags:["ELT", "No Code", "Destinations"],
      accent: "purple",
    },
    {
      icon: jira,
      name: "Jira",
      description: "Sync tasks and notes with your Notion workspace.",
      tags:["ELT", "No Code", "Destinations"],
      accent: "gray",
    },
    {
      icon: dropbox,
      name: "Dropbox",
      description: "Track issues and automate workflows from repositories.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "black",
    },
    {
      icon: github,
      name: "GitHub",
      description: "Export and analyze data in real time using Sheets.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "green",
    },
    {
      icon: slack,
      name: "Slack",
      description: "Get instant tools alerts about new survey integrations.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "green",
    },
    {
      icon: microteam,
      name: "Micro Team",
      description: "Get instant tools alerts about new survey integrations.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "green",
    },
    {
      icon: zoom,
      name: "Zoom",
      description: "Get instant tools alerts about new survey integrations.",
      tags: ["ELT", "No Code", "Destinations"],
      accent: "green",
    },
  ];

  const [active, setActive] = useState<number | null>(null); 

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
     <div className='w-full mt-24 bg-[rgba(249,249,229,1)]'>
        <div className='max-w-[1440px] h-[1733px] px-28 pt-12 mx-auto'>
          <p className='text-start text-[56px] font-black'>Analytics</p>
          <p className='text-start text-black/72 text-xl font-normal mt-5'>Build custom reports based on your Linear data</p>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(385px,1fr))] gap-6'>
            {integrations.map((item, index) => (
              <div key={index} className="w-[385px] h-[351px] bg-white rounded-xl p-6">
                <div className='flex gap-3 items-center mb-9'>
                  <Image src={item.icon} alt={item.name} width={32} height={32}/>
                  <p className='text-xl font-semibold'>{item.name}</p>
              </div>
              <p className='text-[21px] text-[rgba(51,51,51,1)] font-light'>{item.description}</p>
              <div className='flex gap-5 items-center justify-center flex-wrap'>
                {item.tags.map((tag, tagIndex) =>(
                  <span key={tagIndex} className='text-[16px] text-gray-600 px-3 mt-7 rounded-full bg-gray-100 '>
                    {tag}
                  </span>
                ))}
                 <div className="flex items-center gap-4 justify-between mt-8">
                    <button className="text-lg  font-semibold w-[143px] max-h-14">
                      See more
                    </button>

                    <button className="flex text-center gap-2 max-w-[191px] px-4 max-h-14 bg-[rgba(151,91,236,1)] text-white text-sm  border-[rgba(115,69,179,1)] shadow-[4px_4px_0_0_rgba(115,69,179,1)] py-2 rounded-lg">
                      + Click to install
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-24'>
            <p className='text-start text-[56px] font-black'>Collaborations</p>
            <p className='text-start text-black/72 text-xl font-normal mt-5'>Build custom reports based on your Linear data</p>
            <div>
              {integrations.filter(( ,index) =>[])}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Integrations;
