import React from "react";

const Energy = () => {
  return (
    <div>
      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/energy-main-hero-desktop.jpg')] h-screen bg-cover ">
        <div className="flex flex-col items-center justify-center h-[50%] ">
          <h3 className="text-white font-bold text-[1.3rem]">Tesla</h3>
          <div className="text-white font-bold text-[2.6rem]">
            Power Everything
          </div>
        </div>
      </div>
      <img
        className="h-[35rem] w-full object-cover"
        src={
          "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/energy-powerwall-hero-desktop.jpg"
        }
      />
      <div className="flex justify-center items-center gap-5 h-[15rem]">
        <div>
          <div className="text-[1.2rem]">Powerwall</div>
          <h2 className="text-[2rem]">Store Your Energy</h2>
          <button className="border-[3px] border-black mr-4 px-12 py-[5px] rounded-[5px] text-[1rem]">
            Order Powerwall 3
          </button>
          <button className="border-[3px] border-black mr-4 px-12 py-[5px] rounded-[5px] text-[1rem]">
            Learn More
          </button>
        </div>

        <div className="w-[50%] h-[50%]">
          Powerwall is a home battery that can be paired with your solar system
          to store energy, so you can use it anytime you want—at night or during
          an outage.
        </div>
      </div>
    </div>
  );
};

export default Energy;
