import React, { useState } from "react";
import profile from "../assets/profile.png";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";

export default function Personal() {
  const sectionRefs = useScroll();
  const [toggleShow, settoggleShow] = useState(false);

  const handleToggle = () => {
    settoggleShow(!toggleShow);
  };
  return (
    <div
      className="min-h-screen flex items-center text-slate-50 py-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      ref={sectionRefs.personalSection}
    >
      <div className="flex justify-center items-center w-5/6 m-auto gap-6 flex-col-reverse lg:flex-row">
        <div className="md:w-1/2 px-5 flex-end md:px-[100px]">
          <p className="text-md  lg:text-3xl">
            Hi, I'm Jamesmyer Q. Geonzon. <br /> A web developer from the
            Philippines. <br />
            <span className={`${toggleShow ? "" : "hidden"}`}>
              I love creating responsive, user-friendly websites and have skills
              in both front-end and back-end development. I'm committed to
              continuous learning and innovation in web development.
            </span>
          </p>
          <button
            className="my-5 md:w-[250px] lg:text-xl xl:text-xl 2xl:text-2xl border-2 border-white p-2"
            onClick={handleToggle}
          >
            Show <span>{toggleShow ? "less" : "more"}</span>...
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center items-center">
          <img className="h-[200px] xl:h-[400px]" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}
