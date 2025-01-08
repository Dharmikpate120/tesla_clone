import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-12 flex justify-between items-center px-3 text-[1.2rem] absolute w-full hover:bg-white">
      <Link className="hover:bg-gray-300 px-2 rounded" to="/">
        tesla
      </Link>
      <div className="group flex gap-3">
        <Link className="hover:bg-gray-300 px-2 rounded">Vehicle</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Energy</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Charging</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Discover</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Shop</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">We,Robot</Link>
      </div>
      <div className="flex gap-3">
        <Link className="hover:bg-gray-300 px-2 rounded">FaQ</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Lang</Link>
        <Link className="hover:bg-gray-300 px-2 rounded">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
