'use client';

import { useState } from 'react';
import Image from 'next/image';
import FAQ from '../components/Faq';
import integrate from '@/public/photos/integrate.svg';
import zapier from '@/public/photos/zappier.svg';
import sharepoint from '@/public/photos/sharePoint.svg';
import github from '@/public/photos/github.svg';
import jira from '@/public/photos/jira.svg';
import dropbox from '@/public/photos/dropbox.svg';
import slack from '@/public/photos/slack.svg';
import zoom from '@/public/photos/zoom.svg';
import microteam from '@/public/photos/team.svg';

import { Code2, ArrowRightIcon } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Integrations = () => {
  const [active, setActive] = useState<number | null>(null);

  const tools = [
    { label: 'Dev Tools', icon: <Code2 className="w-4.5 h-4.5" /> },
    { label: 'Google', icon: <FcGoogle className="w-4.5 h-4.5" /> },
    { label: 'Creative', icon: <FcGoogle className="w-4.5 h-4.5" /> },
    { label: 'Multimedia', icon: <FcGoogle className="w-4.5 h-4.5" /> },
  ];

  const integrations = [
    {
      icon: zapier,
      name: 'Zapier',
      description: 'Get instant tools alerts about new survey integrations.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: sharepoint,
      name: 'Sharepoint',
      description: 'Send and receive updates directly in your Slack channels.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: jira,
      name: 'Jira',
      description: 'Sync tasks and notes with your Notion workspace.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: dropbox,
      name: 'Dropbox',
      description: 'Track issues and automate workflows from repositories.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: github,
      name: 'GitHub',
      description: 'Export and analyze data in real time using Sheets.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: slack,
      name: 'Slack',
      description: 'Get instant tools alerts about new survey integrations.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: microteam,
      name: 'Micro Team',
      description: 'Get instant tools alerts about new survey integrations.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
    {
      icon: zoom,
      name: 'Zoom',
      description: 'Get instant tools alerts about new survey integrations.',
      tags: ['ELT', 'No Code', 'Destinations'],
    },
  ];

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="w-[612px] mx-auto mt-24 text-center">
        <Image src={integrate} alt="Integrations" />
        <h1 className="mt-4 text-[56px] font-black">
          Fintask connects to your favorite apps
        </h1>
        <p className="text-black/72 text-xl mt-5">
          Fits into your existing workflows and centralizes your team's knowledge
        </p>

        <div className="flex gap-5 justify-center mt-6">
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`flex items-center gap-2 h-14 px-4 rounded-xl text-lg font-medium transition border-2
                ${
                  active === index
                    ? 'bg-[rgba(151,91,236,1)] text-white border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]'
                    : 'border-black/10 hover:bg-purple-100'
                }
              `}
            >
              {tool.icon}
              {tool.label}
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* ANALYTICS */}
      <section className="w-full mt-24  py-12 bg-[rgba(249,249,229,1)]">
        <div className="max-w-[1440px] mx-auto px-28 pt-12">
          <h2 className="text-[56px] font-black">Analytics</h2>
          <p className="text-black/72 text-xl mt-5">
            Build custom reports based on your Linear data
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(385px,1fr))] gap-6 mt-10">
            {integrations.slice(0,5).map((item) => (
              <div
                key={item.name}
                className="w-[385px] h-[351px] bg-white rounded-xl p-6"
              >
                <div className="flex gap-3 items-center mb-9">
                  <Image src={item.icon} alt={item.name} width={32} height={32} />
                  <p className="text-xl font-semibold">{item.name}</p>
                </div>

                <p className="text-[21px] text-[rgba(51,51,51,1)] font-light">
                  {item.description}
                </p>

                <div className="flex gap-3 flex-wrap mt-7">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button className="font-semibold">See more</button>
                  <button className="px-4 py-2 bg-[rgba(151,91,236,1)] text-white rounded-lg shadow-[4px_4px_0_0_rgba(115,69,179,1)]">
                    + Click to install
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="mt-24">
        <div className="max-w-[1440px] mx-auto px-28">
          <h2 className="text-[56px] font-black">Collaborations</h2>
          <p className="text-black/72 text-xl mt-5">
            Build custom reports based on your Linear data
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(385px,1fr))] gap-6 mt-10">
            {integrations
              .filter((_, index) => [5, 6, 7].includes(index))
              .map((item) => (
                <div
                  key={item.name}
                  className="w-[385px] h-[351px] bg-white rounded-xl p-6"
                >
                  <div className="flex gap-3 items-center mb-9">
                    <Image src={item.icon} alt={item.name} width={32} height={32} />
                    <p className="text-xl font-semibold">{item.name}</p>
                  </div>

                  <p className="text-[21px] text-[rgba(51,51,51,1)] font-light">
                    {item.description}
                  </p>

                  <div className="flex gap-3 flex-wrap mt-7">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <button className="font-semibold">See more</button>
                    <button className="px-4 py-2 bg-[rgba(151,91,236,1)] text-white rounded-lg shadow-[4px_4px_0_0_rgba(115,69,179,1)]">
                      + Click to install
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
     </section>
     <div className=''>
      <FAQ />
     </div>
   
    </div>
  );
};

export default Integrations;
