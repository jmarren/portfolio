import Navbar from './Side-Navbar';
import Physics from './Physics'
import TextPhysics from './Text-Physics';
import LoveJames from '@/components/Love-James';


export default function Layout() {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        // { name: 'Contact', url: '/contact' },
        { name: 'Resume', url: '/pdfs/Resume_9_8.pdf'}
      ];
    



    return (
        <div className="h-[500px] w-[100%] bg-white rounder-md z-0  " style={{boxSizing: 'border-box'}}>        
            <TextPhysics /> 
        <div className="grid grid-cols-6 bg-slate-100 h-full pt-10 rounded-2xl mx-4" >
            <div className="w-[15%] grid-start col-span-2 md:col-span-1 ">     
                <Navbar links={links}/>
            </div>
            <div className="col-span-4 max-w-[100%] mr-4 h-72" >
                <LoveJames/> 
                </div>
            </div>
        </div>
    )
}