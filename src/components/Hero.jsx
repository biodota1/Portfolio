import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hero-logo.png";
import background from "../assets/background.jpg";

export default function Hero() {
  return (
    <div
      className="min-h-screen m-auto flex flex-col-reverse lg:flex-row"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-5/6 m-auto ">
        <div className="flex flex-col text-white justify-center items-center lg:items-start lg:w-5/6 xl:m-auto lg:gap-8">
          <h1 className="text-2xl  lg:text-6xl xl:text-6xl 2xl:text-7xl font-semibold">
            Hi Im Jamesmyer
          </h1>
          <h2 className="text-2xl lg:text-6xl xl:text-7xl 2xl:text-6xl font-semibold">
            A Web Developer
          </h2>
          <p className="text-center lg:text-xl lg:text-justify  xl:text-2xl 2xl:text-2xl">
            I am a passionate and dedicated web developer with 3 years of
            experience in creating dynamic and responsive websites. My expertise
            lies in both front-end and back-end development, making me a
            versatile professional capable of handling diverse aspects of web
            development projects.
          </p>
          <Link className="lg:text-xl xl:text-3xl 2xl:text-3xl border-2 border-white p-2">
            Let's Connect
          </Link>
        </div>
        <div className="w-auto flex justify-center items-center m-auto">
          <img
            className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[700px]"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
