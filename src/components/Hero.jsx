import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hero-logo.png";
import heroBg from "../assets/hero-bg.jpg";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="relative min-h-screen bg-slate-900 flex flex-col-reverse justify-center"
      style={heroStyle}
    >
      <div className="relative z-10 w-3/5 m-auto flex flex-col gap-3 text-white xl:p-[100px]">
        <h1 className="xl:text-8xl font-semibold">Hi Im Jamesmyer</h1>
        <h2 className="xl:text-8xl font-semibold">A Web Developer</h2>
        <p className="xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          distinctio, aliquam excepturi tenetur illo dolorum ipsum fugiat
          nostrum sint debitis similique error aliquid aut, modi eos
          exercitationem vitae ea expedita.
        </p>
        <Link className="xl:text-3xl">Let's Go</Link>
      </div>
      <div className="relative z-10 w-auto flex justify-center items-center m-auto">
        <img className="h-[400px] w-full" src={profile} alt="" />
      </div>
    </div>
  );
}
