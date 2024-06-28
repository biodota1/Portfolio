import React from "react";
import profile from "../assets/profile.png";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";

export default function Personal() {
  const sectionRefs = useScroll();
  return (
    <div
      className="min-h-screen flex items-center text-slate-50"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      ref={sectionRefs.personalSection}
    >
      <div className="flex  w-5/6 m-auto ">
        <p className="w-1/2 px-[100px] text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem molestias quam libero velit perspiciatis, eveniet,
          exercitationem odio numquam animi debitis amet, omnis optio facilis
          cum! Doloremque obcaecati doloribus dicta!
        </p>
        <div className="w-1/2 flex justify-center">
          <img className="xl:h-[400px]" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}
