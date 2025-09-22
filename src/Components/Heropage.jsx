import {
  ArrowDown,
  Download,
  Github,
  GithubIcon,
  Linkedin,
  Mail,
} from "lucide-react";
import React from "react";

const Heropage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex  items-center justify-center flex-col text-center relative ">
      <h1 className="text-5xl md:text-7xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ">
        Hi, I'm Abishek
      </h1>
      <h1 className="text-2xl mb-4 font-light  text-slate-300 ">
        Full-Stack Web Developer
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
        {" "}
        I build modern, responsive, and user-friendly web applications.
        Passionate about clean code, design, and innovative digital experiences.
      </p>
      <div className=" flex flex-row gap-5  ">
        <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
          View My Work <ArrowDown />{" "}
        </button>
        <button className="group border-2 border-slate-400 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ">
          {" "}
          <Download />
          Download CV
        </button>
      </div>
      <div className="flex mt-5 gap-7">
        <a
          href=""
          className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <GithubIcon />{" "}
        </a>
        <a
          href=""
          className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <Linkedin />
        </a>
        <a
          href=""
          className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <Mail />
        </a>
      </div>
    </section>
  );
};

export default Heropage;
