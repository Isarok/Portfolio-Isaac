import React from 'react';
import { ToastContainer } from 'react-toastify';

import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-no-repeat bg-cover overflow-hidden text-white bg-black/10 mix-blend-500">
      <div className="animated-bg">
      <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        
        </div>
      <Header />
      <Navbar />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer /> 
    </div>
  );
}

export default App;



