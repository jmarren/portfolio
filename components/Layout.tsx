import Navbar from './Navbar';
import Physics from './Physics'
import TextPhysics from './Text-Physics';
// import Resume from './pdfs/Resume_9_8';




export default function Layout() {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Resume', url: '/pdfs/Resume_9_8.pdf'}
      ];
    



    return (
        <div className="h-[100vh] w-[100vw] bg-white-300 z-0" >
            {/* <div className="z-0"><Navbar links={links} /></div> */}
        
        <div className="pl-[10vw] pt-1 h-64">
        <TextPhysics />
        </div>
        <div ><Navbar links={links}/></div>
        
        {/* <Physics/> */}
    </div>
    )
}