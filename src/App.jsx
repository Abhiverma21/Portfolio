import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">

    <Navbar/>
    <br/><br/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;