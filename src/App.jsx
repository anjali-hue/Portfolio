import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer";
import TextChange from './components/TextChange';
const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar/>
     <Home />
     <About/>
     <Experience/>
     <Projects/>
     <Footer/>
     <TextChange/>
    </div>
  )
}

export default App
