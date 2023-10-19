import Navbar from './Home-Navbar';
import Physics from './Physics'
import TextPhysics from './Text-Physics';

export default function Layout() {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        // { name: 'Github', url: '/contact' },
        { name: 'Resume', url: '/pdfs/Resume_9_8.pdf'}
      ];

    return (
        <div className="z-[100] w-[100%] h-full bg-slate-200 ">        
            <TextPhysics />
            <div className="w-[100%] top-[280px] fixed">     
                <Navbar links={links}/>
            </div>
        </div>
    )
}