import OverlappedImages from "./components/overlappedImages";
import image1 from "@/public/photos/image1.png";
import image2 from "@/public/photos/image2.png";

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
      </div>
    </div>
  );
};

export default Landing;