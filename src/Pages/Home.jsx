import React from 'react'
import cyberpunk from '../assets/cyberpunk.png'
import homevideo from '../assets/homevideo.mp4'

const Home = () => {
    return (
        <div>
            <div className="homemaininfo">
                <div className="textinfo flex flex-col items-center justify-center h-[50%] gap-4">
                    <h1 className='text-white font-bold text-[3.6rem]'>$299/mo Leasing</h1>
                    <div className="btns flex gap-5">
                        <div className="bg-white h-10 w-[16rem] rounded-xl p-6 text-[1.2rem] flex items-center justify-center" >Order Model 3</div>
                        <div className="bg-white h-10 w-[16rem] rounded-xl p-6 text-[1.2rem] flex items-center justify-center">Order Model Y</div>
                    </div>
                </div>
            </div>

            <div className="cyberpunk flex flex-col h-[100%] justify-between">
                <div className='flex items-center justify-center flex-col pt-4 gap-2'>
                    <img src={cyberpunk} alt="" />
                    <h2 className='text-[2.2rem] font-bold'>Lease Starting at $899/mo1</h2>
                </div>

                <div className="btns flex items-center justify-center gap-5 pb-4">
                    <div className="bg-black h-10 w-[16rem] text-[#710f0f] font-bold  p-6 text-[1.2rem] flex items-center justify-center" >Order Now</div>
                    <div className="bg-black h-10 w-[16rem] text-[#710f0f] font-bold  p-6 text-[1.2rem] flex items-center justify-center">Learn More</div>
                </div>
            </div>

            <div className="models flex flex-col h-[100%] justify-between">
                <div className='flex items-center justify-center flex-col pt-4 gap-2'>
                    <div className='flex flex-col pt-[4rem]'>
                        <h1 className='self-center text-[4rem] text-white font-bold'>Model S</h1>
                        <h2 className='self-center text-[2rem] text-white font-bold'>Free Supercharging Included</h2>
                        <h3 className='self-center text-[1.5rem] text-white font-bold'>From $73,4905 After Est. Gas Savings $6,500</h3>
                    </div>
                </div>

                <div className="btns flex items-center justify-center gap-5 pb-4">
                    <div className="bg-[lightblue] h-10 w-[16rem] text-[#710f0f] font-bold  p-6 text-[1.2rem] flex items-center justify-center" >Order Now</div>
                    <div className="bg-white h-10 w-[16rem] text-[#710f0f] font-bold  p-6 text-[1.2rem] flex items-center justify-center">Learn More</div>
                </div>

            </div>

            <div >
                <video className='videohome'
                    src={homevideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="texttt">
                
            </div>
        </div>
    )
}

export default Home
