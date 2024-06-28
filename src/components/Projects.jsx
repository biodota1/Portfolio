import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";
import pizzarita from "../assets/pizzarita-photo.png";
import mrtech from "../assets/mrtech-photo.png";
import clouday from "../assets/cloudy-photo.png";

export default function Projects() {
  const sectionRefs = useScroll();

  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);
  const [showProject4, setShowProject4] = useState(false);

  const handleToggle1 = () => {
    setShowProject1(!showProject1);
  };

  const handleToggle2 = () => {
    setShowProject2(!showProject2);
  };

  const handleToggle3 = () => {
    setShowProject3(!showProject3);
  };

  const handleToggle4 = () => {
    setShowProject4(!showProject4);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center gap-10 text-slate-50"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      ref={sectionRefs.projectSection}
    >
      <div className="relative w-5/6 bg-slate-950/50 m-auto px-[20px] md:p-[40px] flex flex-col items-center shadow-black shadow-xl">
        <h1 className="absolute top-0 p-4 text-xl font-bold md:font-semibold lg:text-4xl xl:text-5xl  bg-gradient-to-r from-sky-600 to-slate-800 w-full shadow-black shadow-md">
          Projects
        </h1>
        <ul className="m-auto w-full flex flex-col gap-16 my-16 pt-10">
          <li className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl font-bold  md:font-bold md:text-4xl">
                Pizzarita
              </h2>
              <p className="text-md md:text-2xl">
                Pizza Delight is a dynamic and interactive pizza ordering
                website designed to provide an exceptional user experience.{" "}
                <span className={`${showProject1 ? "" : "hidden"}`}>
                  This project showcases my front-end development skills,
                  including UI/UX design, responsive layout, and interactive
                  functionality.
                </span>
              </p>
              <button
                className="my-5 md:w-[250px] lg:text-xl xl:text-xl 2xl:text-2xl border-2 border-white p-2"
                onClick={handleToggle1}
              >
                Show <span>{showProject1 ? "less" : "more"}</span>...
              </button>
              <h3 className="text-md font-bold md:font-semibold md:text-xl">
                Link:{" "}
                <span className="underline text-blue-500 text-sm font-bold md:font-semibold md:text-xl">
                  <Link to="https://pizzarita.onrender.com">
                    https://pizzarita.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[200px] w-full md:h-[500px] xl:w-1/2 bg-slate-900">
              <img className="h-full w-full" src={pizzarita} alt="" />
            </div>
          </li>
          <li className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl font-bold  md:font-bold md:text-4xl">
                Notetify
              </h2>
              <p className="text-md md:text-2xl">
                Notetify is a sophisticated note-taking web application designed
                to help users organize their thoughts, ideas, and important
                information efficiently.{" "}
                <span className={`${showProject2 ? "" : "hidden"}`}>
                  This project showcases my expertise in front-end development,
                  focusing on creating a user-friendly, responsive, and
                  feature-rich application.
                </span>
              </p>
              <button
                className="my-5 md:w-[250px] lg:text-xl xl:text-xl 2xl:text-2xl border-2 border-white p-2"
                onClick={handleToggle2}
              >
                Show <span>{showProject2 ? "less" : "more"}</span>...
              </button>
              <h3 className="text-md font-bold md:font-semibold md:text-xl">
                Link:{" "}
                <span className="underline text-blue-500 text-sm font-bold md:font-semibold md:text-xl">
                  <Link to="https://portfolio-5p27.onrender.com">
                    https://portfolio-5p27.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[200px] w-full md:h-[500px] xl:w-1/2 bg-slate-900">
              <img className="h-full w-full" src="" alt="" />
            </div>
          </li>
          <li className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl font-bold  md:font-bold md:text-4xl">
                MrTech
              </h2>
              <p className="text-md md:text-2xl">
                MrTech is an advanced e-commerce application designed to provide
                enthusiasts and professionals with a seamless and comprehensive
                platform for purchasing PC components.{" "}
                <span className={`${showProject3 ? "" : "hidden"}`}>
                  This project highlights my skills in front-end development,
                  showcasing an intuitive, responsive, and feature-rich shopping
                  experience.
                </span>
              </p>
              <button
                className="my-5 md:w-[250px] lg:text-xl xl:text-xl 2xl:text-2xl border-2 border-white p-2"
                onClick={handleToggle3}
              >
                Show <span>{showProject3 ? "less" : "more"}</span>...
              </button>
              <h3 className="text-md font-bold md:font-semibold md:text-xl">
                Link:{" "}
                <span className="underline text-blue-500 text-sm font-bold md:font-semibold md:text-xl">
                  <Link to="https://mrtech-fe.onrender.com">
                    https://mrtech-fe.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[200px] w-full md:h-[500px] xl:w-1/2 bg-slate-900">
              <img className="h-full w-full" src={mrtech} alt="" />
            </div>
          </li>
          <li className="flex flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl font-bold  md:font-bold md:text-4xl">
                WeatherWise
              </h2>
              <p className="text-md md:text-2xl">
                WeatherWise is a feature-rich weather application designed to
                provide users with accurate and real-time weather updates.{" "}
                <span className={`${showProject4 ? "" : "hidden"}`}>
                  This project showcases my front-end development skills,
                  focusing on creating a visually appealing, responsive, and
                  highly functional user experience.
                </span>
              </p>
              <button
                className="my-5 md:w-[250px] lg:text-xl xl:text-xl 2xl:text-2xl border-2 border-white p-2"
                onClick={handleToggle4}
              >
                Show <span>{showProject4 ? "less" : "more"}</span>...
              </button>
              <h3 className="text-md font-bold md:font-semibold md:text-xl">
                Link:{" "}
                <span className="underline text-blue-500 text-sm font-bold md:font-semibold md:text-xl">
                  <Link to="https://clouday.onrender.com">
                    https://clouday.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[200px] w-full md:h-[500px] xl:w-1/2 bg-slate-900">
              <img className="h-full w-full" src={clouday} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
