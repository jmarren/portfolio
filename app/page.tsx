import './/globals.css'


import Layout from '../components/Home-Layout'



export default function Home() {
//bg-[#9ec9dd] Blue-gray
// bg-[#74c36a] Green
    return (


        <div className="w-full min-h-screen ">
            <div className='parkay-floor h-full w-full fixed z-0'>
            </div>
            <div className=' z-[20] ring ring-sky-300 bg-amber-100 w-5/6 h-full min-h-screen relative left-[8.3vw] top-4 rounded-3xl ' id="LayoutContainer"  >    
                <Layout />
                </div>
            {/* <div className='z-[200]  absolute'>
        
                </div> */}
        </div>


    )
}