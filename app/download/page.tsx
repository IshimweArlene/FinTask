import WindowsLogo from "@/public/photos/WindowsLogo.svg";
import MacLogo from "@/public/photos/AppleLogo.svg";
import Image from "next/image";
const Download = () => {
  return (
    <div>
      <div className="max-h-[670px] mx-auto">
        <div className="grid grid-cols-12 pl-20">
          <div className="col-span-3">
            <div className="flex mb-4 items-center gap-3">
              <div className="border-[rgba(252,79,36,1)] bg-[rgba(252,79,36,0.08)] border-2 w-3.5 h-3.5 rounded-full "></div>
              <h1 className="caveat font-normal strike text-[rgba(188,188,188,1)] text-2xl ">Advantages</h1>
            </div>
            <p className="font-bold text-5xl my-4">Fintask for Your Desktop.</p>
            <p className="font-normal text-lg text-black/72 mb-4">An all-in-one task management that works on your desktop and in your browser. </p>
            <div className="flex gap-6 items-center">
              <button className="bg-[rgba(151,91,236,1)] flex items-center gap-3 py-3 px-6 font-bold text-white text-lg rounded-2xl border-4 border-[rgba(115,69,179,1)] shadow-[5px_5px_0_0_rgba(115,69,179,1)]">
                <div className="border-4 w-5 h-5 border-white "></div>
                Download for Mac
              </button>
              <p className="text-gray-500 font-medium">Version 1.0.0</p>
            </div>
          </div>
          <div className="col-span-9 flex justify-center items-center">
            <div className="relative w-[600px] h-[400px]">
              <Image src={MacLogo} alt="Desktop App" fill className="object-contain" />  
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
 
export default Download;