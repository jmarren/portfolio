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
    <div className="h-full min-h-screen flex flex-col bg-white" >


        <div className="h-[250px] w-[100%] bg-white z-0" >        
            <TextPhysics /> 
        </div>


        <div className="flex-grow grid grid-cols-6 relative top-250px bg-[#E9F6FC] border border-blue-100 h-[600px]  pt-10 rounded-2xl mx-4 mb-4" >
            
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