import "./index.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
/* import Services from "./components/Services"; */

function App() {
  return (
    <div className=" bg-no-repeat bg-cover overflow-hidden text-white bg-black/90 mix-blend-800">
      <Navbar />
      <Header />
      <Main />
      <About />
      {/* <Services /> */}
      <Project />
      <Contact />
    </div>
  );
}

export default App;
