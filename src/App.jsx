import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Starfield from "./components/primitives/Starfield";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Starfield />
      <SmoothScroll />
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
