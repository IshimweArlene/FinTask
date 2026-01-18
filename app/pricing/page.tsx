import PricingComp from "../components/FloatingCards/PricingComp";
import image1 from '@/public/photos/image1.png'
import image2 from '@/public/photos/image2.png'
const Pricing = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] max-h-[1464px]">
        <div className='relative flex justify-center'>
          <div className="relative max-w-[116px] max-h-12 flex items-center justify-center gap-2 z-0 bg-gray-300 rounded-full px-4 py-2 shadow-md "/>
          <div className="relative flex items-center justify-center gap-2 -ml-28 bottom-4 z-30 bg-white  rounded-full px-2 py-1 rotate-10 w-fit">
            <img src={image1.src} className="w-12 h-12 rounded-full" />
            <img src={image2.src} className="w-10 h-10 rounded-full border-white border-2 -ml-5"/>
            <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">2+</span>
          </div>
        </div>  
        <div>
          <h1 className="text-6xl text-center font-bold   gap-4"> Unbeatable prices, simple.</h1>
          <p className="text-black/72 mt-5 font-black text-center text-xl mb-6 px-4"> Start for free, or as low as $9 a month.</p>
        </div>   
      </div>
      <PricingComp />
      <div className="bg-[rgba(249,249,229,1)] w-full mt-12 h-[1922px] grid grid-rows-3 justify-center p-24 items-start">
        <div className="bg-white w-7xl h-[520px]">

        </div>
      </div>
     </div>
  );
}
 
export default Pricing;