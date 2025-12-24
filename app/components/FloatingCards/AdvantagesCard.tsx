const AdvantagesCard = () => {
  return (
    <div>
       <div className="grid grid-cols-2 bg-[rgba(252,79,36,1)] p-4 rounded-2xl">
          <div>
             <div className="flex  gap-4 items-center">
               <div className="border-[rgba(255,255,255,1)] bg-[rgba(255,255,255,0.2)] border-5 w-7 h-7 ml-2  rounded-full "></div>
               <div>
                 <h1 className="text-white text-5xl">Simple to use,</h1>
                 <h1 className="text-white text-5xl">Powerful when need.</h1>
               </div>
             </div>
             <div className="flex  gap-8 ">
               <div className="bg-white w-px  h-32 ml-2 mb-8 rounded-full "></div>
               <div>
                 <h1 className="text-white text-xl mt-12">Create tasks and projects, upload files, and add comments,</h1>
                 <h1 className="text-white text-xl">with Teamwork everything is in one central location.</h1>
               </div>
             </div>
          </div>
       </div>
   </div>
 );
}
 
export default AdvantagesCard;