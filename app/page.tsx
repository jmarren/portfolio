import './/globals.css'


import Layout from '../components/Home-Layout'



export default function Home() {


    return (


        <div className="w-full min-h-screen ">
            <div className='parkay-floor h-full w-full fixed z-0'>
            </div>
            <div className='bg-slate-300 z-[20] w-5/6 h-full relative left-[8.3vw] top-4 rounded-3xl' id="LayoutContainer "  >    
                <Layout />
                </div>
            <div className='z-[200]  absolute'>
        
                </div>
        </div>


    )
}