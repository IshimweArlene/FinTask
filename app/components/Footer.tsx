import Image from "next/image";
import Logo from '@/public/photos/logo.png'
const Footer = () => {
  return (
    <div className="flex px-24 items-start justify-start gap-24">
      <div className="flex flex-col">
        <div className="flex gap-4 items-center">
          <Image src={Logo} alt="Logo" className="h-16 w-16"/>
          <p className="text-[48px] font-bold">Fintask</p>
        </div>
        <p className="text-[20px] font-normal text-black/85">Stay organized and productive with Fintask.io</p>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-medium text-2xl mb-3">Explore</h1>
        <p className="font-normal text-xl ">Pricing</p>
        <p className="font-normal text-xl ">Integration</p>
        <p className="font-normal text-xl ">Download</p>
        <p className="font-normal text-xl ">Blog</p>
        <div className="flex gap-2 items-center">
          <p className="text-xl text-black/40">Features</p>
          <div className="bg-[rgba(252,79,36,0.12)] px-2.5 py-1.5 rounded-2xl text-center  text-[rgba(252,79,36,1)]">Soon !</div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-medium">Keep in touch</p>
        <input type="text" placeholder="email address" className="bg-[rgba(250,250,250,1)] border-2 border-black/40  rounded-xl px-4 py-4 text-xl font-medium text-black/48~" />
      </div>
    </div>
  );
}
 
export default Footer;