import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";

export default function Projects() {
  const sectionRefs = useScroll();
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
      <div className="relative w-5/6 bg-slate-950/50 m-auto p-[40px] flex flex-col items-center shadow-black shadow-xl">
        <h1 className="absolute top-0 p-4 lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-sky-600 to-slate-800 w-full shadow-black shadow-md">
          Projects
        </h1>
        <ul className="m-auto w-full flex flex-col gap-16 my-16 pt-10">
          <li className="flex lg:flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-4xl">Pizzarita</h2>
              <p className="text-2xl">
                Pizza Delight is a dynamic and interactive pizza ordering
                website designed to provide an exceptional user experience. This
                project showcases my front-end development skills, including
                UI/UX design, responsive layout, and interactive functionality.
              </p>
              <h3 className="text-xl ">
                Link:{" "}
                <span className="underline text-blue-500">
                  <Link to="https://pizzarita.onrender.com">
                    https://pizzarita.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[500px] xl:w-1/2 bg-slate-900"></div>
          </li>
          <li className="flex lg:flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-4xl">Notetify</h2>
              <p className="text-2xl">
                Notetify is a sophisticated note-taking web application designed
                to help users organize their thoughts, ideas, and important
                information efficiently. This project showcases my expertise in
                front-end development, focusing on creating a user-friendly,
                responsive, and feature-rich application.
              </p>
              <h3 className="text-xl ">
                Link:{" "}
                <span className="underline text-blue-500">
                  <Link to="https://portfolio-5p27.onrender.com">
                    https://portfolio-5p27.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[500px] xl:w-1/2 bg-slate-900"></div>
          </li>
          <li className="flex lg:flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-4xl">MrTech</h2>
              <p className="text-2xl">
                MrTech is an advanced e-commerce application designed to provide
                enthusiasts and professionals with a seamless and comprehensive
                platform for purchasing PC components. This project highlights
                my skills in front-end development, showcasing an intuitive,
                responsive, and feature-rich shopping experience.
              </p>
              <h3 className="text-xl ">
                Link:{" "}
                <span className="underline text-blue-500">
                  <Link to="https://portfolio-5p27.onrender.com">
                    https://portfolio-5p27.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[500px] xl:w-1/2 bg-slate-900"></div>
          </li>
          <li className="flex lg:flex-col xl:flex-row gap-10">
            <div className="xl:w-1/2 flex flex-col gap-3">
              <h2 className="text-4xl">WeatherWise</h2>
              <p className="text-2xl">
                WeatherWise is a feature-rich weather application designed to
                provide users with accurate and real-time weather updates. This
                project showcases my front-end development skills, focusing on
                creating a visually appealing, responsive, and highly functional
                user experience.
              </p>
              <h3 className="text-xl ">
                Link:{" "}
                <span className="underline text-blue-500">
                  <Link to="https://portfolio-5p27.onrender.com">
                    https://portfolio-5p27.onrender.com
                  </Link>
                </span>
              </h3>
            </div>

            <div className="h-[500px] xl:w-1/2 bg-slate-900"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
