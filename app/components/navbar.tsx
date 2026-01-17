import Link from 'next/link';
import logo from '../../public/photos/logo.png';

const Navbar = () => {
  const navItems = [
    { name: 'Pricing', path: '/pricing' },
    { name: 'Download', path: '/download' },
    { name: 'Integrations', path: '/integrations' },
  ];

  return (
    <nav className="rounded-3xl mx-auto mb-12 shadow-[0_8px_100px_0_rgba(0,0,0,0.03)] bg-white w-[1170px] h-[86px] flex items-center justify-between mt-16 px-40 py-2">
        <div className='flex gap-24'>
           <div className='flex gap-3 text-3xl'>
            <img src={logo.src} alt="Logo" className="h-10 w-auto" />
            <h1 className='font-bold '>Fintask</h1>
           </div>
     
            <div className="flex items-center gap-8">
             {navItems.map((item) => (
              <Link
              key={item.name}
              href={item.path}
              className="text-xl font-medium text-black  no-underline hover:no-underline"
              >
                {item.name}
              </Link>
              ))}
            </div>
        </div>
        <button className="text-center py-3 px-8 font-bold text-lg rounded-full border-3 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)]">Join Free</button>
    </nav>
  );
};

export default Navbar;
