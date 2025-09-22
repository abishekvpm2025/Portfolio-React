import React from "react";
import Contact from "./Components/Contact";
import Heropage from "./Components/Heropage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      < Heropage/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      
      

      
      

    </div>

    {/* <Routes>
      <Route path="/heropage" element={< Heropage/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      

    </Routes> */}
    </>


    
  );
};

export default App;
