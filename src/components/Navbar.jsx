import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useScroll } from "../context/ScrollProvider";

export default function Navbar() {
  const sectionRefs = useScroll();

  const handleScroll = (section) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link>
          <img className="h-[50px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-x-6">
          <button
            className="text-sky-500 text-lg font-semibold"
            onClick={() => {
              handleScroll("skillSection");
            }}
          >
            Skills
          </button>
          <button
            className="text-sky-500 text-lg font-semibold"
            onClick={() => {
              handleScroll("projectSection");
            }}
          >
            Projects
          </button>
          <button
            className="text-sky-500 text-lg font-semibold"
            onClick={() => {
              handleScroll("personalSection");
            }}
          >
            Personal
          </button>
        </ul>
      </div>
    </div>
  );
}
