import React from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/hero-bg.jpg";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Personal from "../components/Personal";

export default function Home() {
  // const heroStyle = {
  //   backgroundImage: `url(${heroBg})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    <div className="min-h-screen bg-slate-800">
      <Hero />
      <Skills />
      <Projects />
      <Personal />
    </div>
  );
}
