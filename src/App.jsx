import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Testominial from "./components/Testimonial/Testiminial";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Skills />
      <LatestProjects />
      <Testominial />
      <Form />
      <Footer />
    </>
  );
};

export default App;
