import React from "react";
import AboutHome from "../Components/Jumbotron/About";
import Footer from "../Components/Jumbotron/Footer";
import HomeJumbotron from "../Components/Jumbotron/Home";
import Projects from "../Components/Jumbotron/Projects";
import Services from "../Components/Jumbotron/Services";
import Skills from "../Components/Jumbotron/Skills";

function Home() {
  return (
    <div>
      <HomeJumbotron />
      <AboutHome />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
