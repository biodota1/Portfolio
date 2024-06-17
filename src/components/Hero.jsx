import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hero-logo.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col-reverse justify-center lg:flex-row">
      <div className="relative z-10 flex flex-col text-white m-10 justify-center items-center lg:items-start xl:p-[50px] lg:w-4/5 xl:m-auto lg:gap-8">
        <h1 className="text-2xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
          Hi Im Jamesmyer
        </h1>
        <h2 className="text-2xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold">
          A Web Developer
        </h2>
        <p className="text-center lg:text-xl lg:text-justify  xl:text-2xl 2xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          distinctio, aliquam excepturi tenetur illo dolorum ipsum fugiat
          nostrum sint debitis similique error aliquid aut, modi eos
          exercitationem vitae ea expedita.
        </p>
        <Link className="lg:text-xl xl:text-3xl 2xl:text-3xl border-2 border-white p-2">
          Let's Connect
        </Link>
      </div>
      <div className="relative z-10 w-auto flex justify-center items-center m-auto">
        <img
          className="h-[400px] w-full md:h-[400px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
          src={profile}
          alt=""
        />
      </div>
    </div>
  );
}
