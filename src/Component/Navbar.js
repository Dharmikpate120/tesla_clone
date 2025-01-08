import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-12 z-10  text-black flex justify-between items-center px-3 text-[1.2rem] fixed top-0 w-full hover:bg-white hover:text-black transition ease-linear backdrop-blur">
      <Link
        className="hover:bg-gray-300 px-2 rounded transition ease-linear "
        to="/"
      >
        <img
          className="h-10 w-40 object-cover"
          src="http://ts2.mm.bing.net/th?id=OIP.H3vdl5P_cneKIXQ3ZFo-ZgHaHa&pid=15.1"
          alt="Tesla"
        />
      </Link>
      <div className="group flex gap-3">
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Vehicle
        </Link>
        <Link
          to="/energy"
          className="hover:bg-gray-300 px-2 rounded transition ease-linear"
        >
          Energy
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Charging
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Discover
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Shop
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          We, Robot
        </Link>
      </div>
      <div className="flex gap-3">
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          FaQ
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Lang
        </Link>
        <Link className="hover:bg-gray-300 px-2 rounded transition ease-linear">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
