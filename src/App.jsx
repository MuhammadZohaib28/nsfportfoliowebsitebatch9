import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import LatestProjects from "./components/LatestProjects/LatestProjects";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Skills />
      <LatestProjects />
    </>
  );
};

export default App;
