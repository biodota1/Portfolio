import React, { useRef } from "react";
import reactjs from "../assets/reactjs.png";
import jenkins from "../assets/jenkins.png";
import jest from "../assets/jest.png";
import postgresql from "../assets/postgresql.png";
import redux from "../assets/redux.png";
import docker from "../assets/docker.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import npm from "../assets/npm.png";
import postman from "../assets/postman.png";
import git from "../assets/git.png";
import csharp from "../assets/csharp.png";
import css from "../assets/css.png";
import java from "../assets/java.png";
import express from "../assets/express.png";
import figma from "../assets/figma.png";
import photoshop from "../assets/photoshop.png";
import cprog from "../assets/c.png";
import tailwindcss from "../assets/tailwindcss.png";
import bootstrap from "../assets/bootstrap.png";
import daisyuiD from "../assets/daisyui.png";
import headlessui from "../assets/headlessui.png";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";

export default function Skills() {
  const sectionRefs = useScroll();

  return (
    <div
      className="relative min-h-screen flex text-slate-50 "
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={sectionRefs.skillSection}
    >
      <div className="relative w-5/6 lg:h-[750px] xl:h-[800px] bg-slate-950/50 m-auto p-[40px] flex flex-col items-center shadow-black shadow-xl">
        <h1 className="absolute top-0 p-4 lg:text-4xl xl:text-5xl font-semibold bg-gradient-to-r from-sky-600 to-slate-800 w-full shadow-black shadow-md">
          Skills
        </h1>
        <div className="flex flex-col gap-5 md:flex-row h-full w-full py-[100px]">
          <div className="grid h-full md:w-1/3 flex-grow card bg-base-300 rounded-none justify-center sm:px-3 sm:py-8">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="font-semibold text-center lg:text-xl xl:text-3xl">
                Application and Data
              </h2>
              <ul className="grid gap-5 sm:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4">
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={html}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    HTML
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={css}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    CSS
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={javascript}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Javascript
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={reactjs}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Reactjs
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={nodejs}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Nodejs
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={redux}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Redux
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={express}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Expressjs
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={mongodb}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    MongoDB
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={postgresql}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Postgresql
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={csharp}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    C#
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={java}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Java
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={cprog}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    C
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-full md:w-1/3 flex-grow card bg-base-300 rounded-none justify-center sm:p-3 sm:py-8">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="font-semibold lg:text-2xl xl:text-3xl text-center">
                Utilities
              </h2>
              <ul className="grid gap-5 sm:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4">
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={npm}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Npm
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={postman}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Postman
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={figma}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Figma
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={photoshop}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Photoshop
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={tailwindcss}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Tailwindcss
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={bootstrap}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Bootstrap
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={daisyuiD}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    DaisyUI
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={headlessui}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    HeadlessUI
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-full md:w-1/3 flex-grow card bg-base-300 rounded-none justify-center sm:px-3 sm:py-8">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="font-semibold lg:text-2xl xl:text-3xl text-center">
                DevOps
              </h2>
              <ul className="grid gap-5 sm:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4">
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={docker}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Docker
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={jenkins}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Jenkins
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={jest}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Jest
                  </label>
                </li>
                <li className="flex flex-col items-center  gap-1">
                  <img
                    className="p-1.5 md:h-[50px] lg:h-[60px] xl:h-[80px]"
                    src={git}
                    alt=""
                  />
                  <label className="text-center text-xs font-semibold  xl:text-sm">
                    Git
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
