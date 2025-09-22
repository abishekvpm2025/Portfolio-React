import React from "react";

const Navbar = () => {
  // smooth scroll handler
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 left-0 right-0 h-20 flex z-50">
      <div className="flex items-center ml-10 text-3xl font-bold text-white">
        AR
      </div>
      <div className="flex flex-row ml-auto px-10 gap-10 items-center text-white font-semibold">
        <h4
          onClick={() => handleScroll("heropage")}
          className="cursor-pointer hover:text-gray-400"
        >
          Home
        </h4>
        <h4
          onClick={() => handleScroll("About")}
          className="cursor-pointer hover:text-gray-400"
        >
          About
        </h4>
        <h4
          onClick={() => handleScroll("skills")}
          className="cursor-pointer hover:text-gray-400"
        >
          Skills
        </h4>
        <h4
          onClick={() => handleScroll("projects")}
          className="cursor-pointer hover:text-gray-400"
        >
          Projects
        </h4>
        <h4
          onClick={() => handleScroll("contact")}
          className="cursor-pointer hover:text-gray-400"
        >
          Contact
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
