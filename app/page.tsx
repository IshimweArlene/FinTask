import OverlappedImages from "./components/overlappedImages";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";
import image3 from "@/public/photos/image5.png";
import slack from "@/public/photos/slack.svg";
import trello from "@/public/photos/trello.svg";
import notion from "@/public/photos/notion.svg";
import calendar from "@/public/photos/calendar.svg";
import outlook from "@/public/photos/outlook.svg";
import Image from "next/image";
import LandingComponent from "./components/landingpageComp";
import Features from "./components/featuresComp";
import FloatingCard1 from "./components/FloatingCards/card1";
import FloatingCard2 from "./components/FloatingCards/card2";
import Cards from "./components/FloatingCards/Cards";
import AdvantagesCard from "./components/FloatingCards/AdvantagesCard";


const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex justify-center items-center mt-24">
        <div>
          <h1 className="text-6xl font-bold flex items-center gap-4">
            Manage Your <span className="inline-flex"><OverlappedImages />Team's</span>
          </h1>
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-24">
        <div className="flex items-center bg-black z-0 justify-center gap-4 border-black border-4 rounded-md w-[294px] h-12 p-2"></div>
        <div className="relative -ml-80 bottom-8 z-30 bg-white rotate-4 flex items-center justify-center gap-4 border-black border-4 rounded-md w-fit p-4">
          <div className="border-4 w-5 h-5 border-black rounded-full"></div>
          <div className="text-sm">
            <h2 className="text-black font-semibold text-lg">UX Copywrite</h2>
            <p className="text-gray-500">Task • 0 of 7 • Today</p>
          </div>
          <div className="relative flex items-center gap-2 bg-white ml-6 rounded-full px-2 py-1 w-fit">
            <img src={image1.src} className="w-8 h-8 rounded-full" />
            <img src={image2.src} className="w-6 h-6 rounded-full border-white border-2 -ml-5" />
            <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">
              3+
            </span>
          </div>
        </div>
        <div className="ml-4">
          <h1 className="text-7xl text-[#fc4f24] font-black">Productivity</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <p className="text-gray-700 text-xl mb-6 max-w-2xl px-4">
          Plan projects, stay on track, and deliver on time without overworking your team.
        </p>
        <button className="bg-[rgba(151,91,236,1)] flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
          <div className="border-4 w-5 h-5 border-white rounded-full"></div>
          Try Now-Free!
        </button>
        <p className="mt-6 text-xl text-center flex gap-3">Excellent 4.9 out of 5 <span><img src= {image3.src} alt="image" /></span></p>
      </div>
      <div>
        <Features />
        {/* <LandingComponent /> */}  
        {/* <FloatingCard1/> */}
        {/* <FloatingCard2/> */}
      </div>
      <div className="my-20">
        <h1 className="text-2xl text-gray-500 my-8 text-center">Our native plants are listed below integrations</h1>
        <div className="flex items-center gap-20 justify-between">
          <div className="flex items-center">
            <Image src={notion} alt="Notion" width={40} height={40} />
            <p className="font-black text-2xl ml-2">Notion</p>
          </div>
          <div className="flex items-center">
            <Image src={calendar} alt="Trello" width={40} height={40} />
            <p className="text-2xl text-gray-600 ml-2">Calendar</p>
          </div>
          <div className="flex items-center">
            <Image src={trello} alt="Trello" width={40} height={40} />
            <p className="font-extrabold text-4xl text-gray-900 ml-2">Trello</p>
          </div>
          <div className="flex items-center">
            <Image src={slack} alt="Slack" width={40} height={40} />
            <p className="font-black text-2xl ml-2">Slack</p>
          </div>        
          <div className="flex items-center">
            <Image src={outlook} alt="Trello" width={40} height={40} />
            <p className="text-blue-500 text-3xl font-black ml-2">Outlook</p>
          </div>
        </div>
      </div>
      <div className="items-center flex-col flex mt-12">
        <div className="flex mb-4 items-center gap-3">
          <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-4 w-5 h-5 rounded-full "></div>
          <h1 className="caveat font-light strike text-gray-400 text-4xl ">Features</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-gray-900 font-bold">The features</h1>
          <h1 className="text-6xl text-gray-900 font-bold mt-3">Both Familiar and new.</h1>
        </div>
        <div>
          <Cards />
        </div>
      </div>
      <div className="items-center flex-col flex mt-32">
        <div className="flex mb-4 items-center gap-3">
          <div className="border-[rgba(151,91,236,1)] bg-[rgba(151,91,236,0.08)] border-4 w-5 h-5 rounded-full "></div>
          <h1 className="caveat font-light strike text-gray-400 text-4xl ">Advantages</h1>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-gray-900 font-bold">A task manager you can</h1>
          <h1 className="text-6xl text-gray-900 font-bold mt-3"> trust for teams</h1>
          <p className="text-[20px] my-7 text-gray-700 font-medium">Plan projects, stay on track, and deliver on time without overworking your team.</p>
        </div>
        <button className="bg-[rgba(151,91,236,1)] mb-16 flex items-center gap-6 py-4 px-9 font-bold text-white text-lg rounded-full border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
          <div className="border-4 w-5 h-5 border-white rounded-full"></div>
          Get Start
        </button>
        <div>
          <AdvantagesCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;