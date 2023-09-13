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
        <div className="h-[2000px] w-[100%] bg-white z-0  " style={{boxSizing: 'border-box'}}>        
            <TextPhysics /> 
        <div className="grid grid-cols-6" >
            <div className="w-[15%] grid-start col-span-2 md:col-span-1">     
                <Navbar links={links}/>
            </div>
            <div className="col-span-4 h-72 border border-blue" >
                <LoveJames/> 
                </div>
            </div>
        </div>
    )
}