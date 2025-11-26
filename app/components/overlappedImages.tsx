import image1 from '@/public/photos/image1.png'
import image2 from '@/public/photos/image2.png'
const OverlappedImages = () => {
    return (
        <>
        <div className="relative flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-md w-fit"></div>
        <div className="relative flex items-center gap-2  rounded-full px-4 py-2 shadow-md w-fit">
            {/* Avatar 1 */}
            <img
                src={image1.src}
                className="w-10 h-10 rounded-full "
            />

            {/* Avatar 2 - overlapping */}
            <img
                src={image2.src}
                className="w-8 h-8 rounded-full border-white border-2 -ml-5"
            />

            {/* Count Badge */}
            <span className="text-sm h-8 w-8 rounded-full p-2 border-white border-2 font-semibold bg-white/20 backdrop-blur-sm text-gray-700 -ml-3">2+</span>
        </div>
      </>
    );
}
 
export default OverlappedImages;