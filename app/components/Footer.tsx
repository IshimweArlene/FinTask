import Image from "next/image";
import Logo from '@/public/photos/logo.png'
import linkedIn from '@/public/photos/linkedIn.svg'
import facebook from '@/public/photos/facebook.svg'
import twitter from '@/public/photos/twitter.svg'
const Footer = () => {
  return (
    <div>   
      <div className="flex px-24 items-start justify-start mt-24 mb-10 gap-24 border-b-2 pb-10 border-[rgba(214,214,214,1)]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <Image src={Logo} alt="Logo" className="h-16 w-16"/>
            <p className="text-[48px] font-bold">Fintask</p>
          </div>
          <p className="text-[20px] font-normal text-black/85">Stay organized and productive with Fintask.io</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-2xl mb-6">Explore</h1>
          <p className="font-normal text-xl ">Pricing</p>
          <p className="font-normal text-xl ">Integration</p>
          <p className="font-normal text-xl ">Download</p>
          <p className="font-normal text-xl ">Blog</p>
          <div className="flex gap-2 items-center">
            <p className="text-xl text-black/40">Features</p>
            <div className="bg-[rgba(252,79,36,0.12)] px-2.5 py-1.5 rounded-2xl text-center  text-[rgba(252,79,36,1)]">Soon !</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-medium">Keep in touch</p>
          <div className="flex">
            <input type="text" placeholder="email address" className="outline-none mb-12 bg-[rgba(250,250,250,1)] border-2 border-black/4  rounded-l-xl px-4 py-4 text-xl font-medium text-black/48" />
            <button className="h-[62px] w-[151px] bg-[rgba(151,91,236,1)] text-white font-bold border-2 border-[rgba(115,69,179,1)] rounded-r-xl">Subscribe</button>
          </div>
          
          <p className="font-medium text-2xl text-black">Follow us </p>
          <div className="flex gap-4">
            <Image src={linkedIn} alt="LinkedIn" />
            <Image src={facebook} alt="facebook" />      
            <Image src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-12 px-24">
        <h1 className="text-[16px] font-normal text-black">Copyright © Webuir 2022·All Rights Reserved</h1>
        <div className="flex justify-between items-end gap-10">
          <p className="text-lg text-black font-normal">Cookies</p>
          <p className="text-lg text-black font-normal">Privacy policy</p>
          <p className="text-lg text-black font-normal">Security</p>
          <p className="text-lg text-black font-normal">legal documents</p>
        </div>
      </div>
    </div>
   
  );
}
 
export default Footer;