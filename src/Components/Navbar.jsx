import React from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900  left-0 right-0 h-20  flex  z-50  ">
      <div className="flex  items-center ml-10 text-3xl font-bold text-white ">
        AR
      </div>
      <div className=" flex flex-row  ml-auto  px-10 gap-18 items-center text-white font-semibold ">
        <Link to="heropage"  className="cursor-pointer hover:text-gray-400" >Home</Link>
        <Link to="About"  className="cursor-pointer hover:text-gray-400">About</Link>
        <Link to="Skills"  className="cursor-pointer hover:text-gray-400">Skills</Link>
        <Link to="Projects"  className="cursor-pointer hover:text-gray-400">Projects</Link>
        <Link to="Contact" className="cursor-pointer hover:text-gray-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
