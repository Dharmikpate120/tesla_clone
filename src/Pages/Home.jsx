import React from 'react'

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
        </div>
    )
}

export default Home
