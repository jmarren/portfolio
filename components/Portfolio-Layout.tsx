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
<div className="flex flex-grow flex-col  m-0 bg-white mb-0">

<div className="h-[250px] bg-white z-0">
  <TextPhysics />
</div>

<div className="flex-grow grid grid-cols-6 relative bg-[#E9F6FC] border border-blue-100 pt-10 rounded-2xl mx-4 mb-4 min-h-0  overflow-auto">
  <div className="col-span-2 md:col-span-1">
    <Navbar links={links}/>
  </div>
  <div className="col-span-4 max-w-[100%] mr-4 h-72">
    <LoveJames />
    <div className='bg-indigo-200 w-full h-full flex items-center justify-center rounded-2xl my-10 text-center align-middle text-6xl font-[Sniglet] text-barber-blue border border-slate-400 '>
    <a href='/portfolio/Buttons'>
        Fun With Buttons
        </a>
    </div>
  </div>
</div>
</div>
)}