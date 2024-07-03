import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hero-logo.png";
import background from "../assets/background.jpg";
import discord from "../assets/discord.png";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";

export default function Hero() {
  return (
    <div
      className="min-h-screen py-5"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-5/6 m-auto flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col text-white justify-center items-center gap-2 lg:items-start lg:w-5/6 xl:m-auto lg:gap-8">
          <h1 className="text-2xl font-bold lg:font-semibold lg:text-6xl xl:text-6xl 2xl:text-7xl">
            Hi Im Jamesmyer
          </h1>
          <h2 className="text-2xl lg:text-6xl xl:text-7xl 2xl:text-6xl font-semibold">
            A Web Developer
          </h2>
          <p className="text-center hidden lg:flex lg:text-xl lg:text-justify  xl:text-2xl 2xl:text-2xl">
            I am a passionate and dedicated web developer with 3 years of
            experience in creating dynamic and responsive websites. My expertise
            lies in both front-end and back-end development, making me a
            versatile professional capable of handling diverse aspects of web
            development projects.
          </p>
          <p className="mt-5 lg:text-xl xl:text-3xl 2xl:text-3xl">
            Let's Connect
          </p>
          <div className="flex gap-3">
            <Link to="https://github.com/biodota1">
              <img className="h-[55px]" src={github} alt="" />
            </Link>
            <Link to="https://www.facebook.com/jamesmyer.geonzon?mibextid=ZbWKwL">
              <img className="h-[50px]" src={facebook} alt="" />
            </Link>
            <Link to="https://discord.gg/JRPRQEQd">
              <img className="h-[50px]" src={discord} alt="" />
            </Link>
          </div>
        </div>
        <div className="w-auto flex justify-center items-center m-auto">
          <img
            className="h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[700px]"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
