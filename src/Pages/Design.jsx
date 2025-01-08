import React from "react";

const Design = () => {
  return (
    <div className="pt-12 px-10 flex justify-end items-center h-[100vh] gap-5">
      <video className=" fixed left-7 top-14 h-[90%] w-[70%] object-cover rounded-[15px]">
        <source src="https://digitalassets.tesla.com/video/upload/q_auto/f_auto:video/prod/fulfillment/energy/Order/EnergyConfigurator/landing-page-hero-video_d" />
      </video>
      <div className="h-full w-[25%] px-7  self-end">
        <div className="text-[2rem]">Get a Quote</div>
        <div className="text-[.9rem]">
          Enter home details to get a solar and Powerwall 3 installation quote
        </div>
        <div className="mb-20">
          <div className="flex flex-col mb-3">
            Home Address
            <input className="bg-gray-200 w-[90%] h-8 rounded" type="text" />
          </div>
          <div className="flex flex-col mb-3">
            Average Electric Bill
            <input className="bg-gray-200 w-[90%] h-8 rounded" type="text" />
          </div>
          Know your average monthly consumption?
        </div>
        <div className="text-[1.2rem]">Choose a Product</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, deserunt voluptates enim optio fuga, quidem, unde consequuntur natus illum nulla veritatis perspiciatis atque? Natus consectetur, earum doloremque distinctio odio vel.
        Saepe, assumenda ipsa. Ipsam debitis dolorem in laborum repudiandae deserunt quam fuga laboriosam distinctio praesentium, at rem, dicta eligendi libero reprehenderit enim! Impedit aliquam eum fugit eos ullam possimus aliquid.
        Voluptatem sapiente, molestiae laudantium iste aut laborum sit adipisci nam nesciunt consequatur illo dolorum, nisi in ipsam quam asperiores ex incidunt officiis sequi quibusdam! Ab quia culpa molestias officia laborum.
        Aliquid, nostrum quas dolore autem totam neque corporis optio tempora fugiat numquam mollitia modi debitis vero rerum ab quam. Voluptatibus ad iure ipsa officiis iusto esse eveniet natus. Repellendus, exercitationem!
        Nulla ducimus unde laborum nam expedita accusantium voluptatibus officiis, ab labore tempore, accusamus necessitatibus quia! Laboriosam quis ratione dolor necessitatibus, odio praesentium aut eaque pariatur beatae dolores consequatur cumque totam.</div>
      </div>
    </div>
  );
};

export default Design;
