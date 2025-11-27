import image1 from '@/public/photos/image1.png'
import image2 from '@/public/photos/image2.png'
const OverlappedImages = () => {
    return (
        <div className='relative flex '>
        <div className="relative w-[116px] h-12 flex items-center gap-2 z-0 bg-gray-300 rounded-full px-4 py-2 shadow-md "></div>
        <div className="relative flex items-center gap-2 -ml-28 bottom-4 z-30 bg-white  rounded-full px-2 py-1 rotate-10 w-fit">
            <img
                src={image1.src}
                className="w-12 h-12 rounded-full "
            />
            <img
                src={image2.src}
                className="w-10 h-10 rounded-full border-white border-2 -ml-5"
            />
            <span className="text-sm h-10 w-10 rounded-full p-2 border-white border-4 font-semibold bg-white/20 backdrop-blur-md text-gray-700 -ml-4">2+</span>
        </div>
      </div>
    );
}
 
export default OverlappedImages;