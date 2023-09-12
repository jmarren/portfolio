import Navbar from './Navbar';
import Physics from './Physics'
import TextPhysics from './Text-Physics';

export default function Layout() {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Contact', url: '/contact' },
        { name: 'Resume', url: '/pdfs/Resume_9_8.pdf'}
      ];
    



    return (
        <div className="h-[2000px] w-[100%] bg-white z-0 " style={{boxSizing: 'border-box'}}>        
            <TextPhysics />
            <div className="w-[100%]">     
                <Navbar links={links}/>
            </div>
        </div>
    )
}