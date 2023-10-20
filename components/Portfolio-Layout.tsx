import Navbar from './Side-Navbar';
import Physics from './Physics'
import TextPhysics from './Text-Physics';
import LoveJames from '@/components/Love-James';


export default function Layout() {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Resume', url: '/pdfs/Resume_9_8.pdf'}
      ];
    return (
<div className="flex flex-grow flex-col  m-0 bg-white mb-0 pb-4">

<a href='/'>
<div className="h-[250px] bg-white z-0 ">
  <TextPhysics />
</div></a>

<div className="flex-grow grid grid-cols-6 relative bg-[#E9F6FC] border border-blue-100 pt-10 rounded-2xl mx-4 pb-4 min-h-0 overflow-auto">
  <div className="col-span-2 md:col-span-1">
    <Navbar links={links}/>
  </div>
  <div className="col-span-4 max-w-[100%] mr-4 h-72">
    <LoveJames />
    <div className='bg-indigo-200  hover:bg-indigo-100 active:bg-indigo-300 active:ring-inset active:ring-4 active:ring-white w-full h-full flex items-center justify-center rounded-2xl my-10 text-center text-6xl font-[Sniglet] text-barber-blue border border-slate-400 '>
    <a href='/portfolio/Buttons' className='w-full h-full flex items-center justify-center text-base sm:text-3xl lg:text-7xl'>
        Fun With Buttons
        </a>
    </div>
    <div id='spacer-div' className='h-[10px] w-full' ></div>
  </div>
</div>
</div>
)}