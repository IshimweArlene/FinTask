import {ChevronDown, ChevronUp, Search} from 'lucide-react';
const LandingComponent = () => {
    return (
        <div>
            <div className="grid grid-cols-12 p-20 rounded-4xl mt-20 bg-[rgba(240,239,234,0.56)]">
               <div className="col-span-4">
                 <div className="flex gap-4">
                   <div className="rounded-full text-2xl flex justify-center items-center text-[rgba(250,255,90,1)] w-12 h-12 bg-[rgba(252,79,36,1)]">S</div>
                   <div>
                    <h1 className="text-xl font-black mb-2">Sadek Hosen</h1>
                    <div className="w-20 bg-[rgba(232,228,217,1)] h-2 rounded-2xl"></div>
                   </div>
                   <div className='text-[#bdb7a8] ml-12'>
                    <ChevronUp className='size-5' />
                    <ChevronDown className='size-5' />
                   </div>
                 </div>
                 <div>
                    <div className='bg-white p-2 rounded-xl flex items-center my-8 justify-between'>
                        <div className='flex gap-2'>
                         <Search className='text-[rgba(232,228,217,1)]'/>
                         <h1 className='text-[#949085]'>Quick Find</h1>
                        </div>
                        <div className='flex gap-2'>

                        </div>
                    </div>
                 </div>
               </div>
               <div className='col-span-8'>

               </div>
            </div>
        </div>
    );
}
 
export default LandingComponent;