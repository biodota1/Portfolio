import React from "react";
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

export default function Skills() {
  return (
    <div className="relative min-h-screen flex text-slate-50">
      <div className="relative w-4/5 h-[800px] bg-transparent m-auto p-[40px] flex flex-col items-center shadow-black shadow-xl">
        <h1 className="absolute top-0 p-4 text-5xl font-semibold bg-gradient-to-r from-sky-600 to-slate-800 w-full shadow-black shadow-md">
          Skills
        </h1>
        <div className="flex h-full w-full py-[100px]">
          <div className="grid h-full flex-grow card bg-base-300 rounded-none justify-center">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="text-3xl font-semibold">Application and Data</h2>
              <ul className="grid grid-cols-4 gap-4">
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={html} alt="" />
                  <label className="text-center">HTML</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={css} alt="" />
                  <label className="text-center">CSS</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={javascript} alt="" />
                  <label className="text-center">Javascript</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={reactjs} alt="" />
                  <label className="text-center">Reactjs</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={nodejs} alt="" />
                  <label className="text-center">Nodejs</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={redux} alt="" />
                  <label className="text-center">Redux</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={express} alt="" />
                  <label className="text-center">Expressjs</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={mongodb} alt="" />
                  <label className="text-center">MongoDB</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={postgresql} alt="" />
                  <label className="text-center">Postgresql</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={csharp} alt="" />
                  <label className="text-center">C#</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={java} alt="" />
                  <label className="text-center">Java</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={cprog} alt="" />
                  <label className="text-center">C</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-full flex-grow card bg-base-300 rounded-none justify-center">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="text-3xl font-semibold">Utilities</h2>
              <ul className="grid grid-cols-4 gap-4">
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={npm} alt="" />
                  <label className="text-center">Npm</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={postman} alt="" />
                  <label className="text-center">Postman</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={figma} alt="" />
                  <label className="text-center">Figma</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={photoshop} alt="" />
                  <label className="text-center">Photoshop</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={tailwindcss} alt="" />
                  <label className="text-center">Tailwindcss</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={bootstrap} alt="" />
                  <label className="text-center">Bootstrap</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={daisyuiD} alt="" />
                  <label className="text-center">DaisyUI</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={headlessui} alt="" />
                  <label className="text-center">HeadlessUI</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-full flex-grow card bg-base-300 rounded-none justify-center">
            <div className="m-auto flex flex-col gap-8">
              <h2 className="text-3xl font-semibold">DevOps</h2>
              <ul className="grid grid-cols-4 gap-4">
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={docker} alt="" />
                  <label className="text-center">Docker</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={jenkins} alt="" />
                  <label className="text-center">Jenkins</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={jest} alt="" />
                  <label className="text-center">Jest</label>
                </li>
                <li className="flex flex-col items-center">
                  <img className="h-[80px] w-[80px]" src={git} alt="" />
                  <label className="text-center">Git</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
