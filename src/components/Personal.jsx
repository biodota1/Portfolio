import React from "react";
import profile from "../assets/profile.png";
import background from "../assets/background.jpg";
import { useScroll } from "../context/ScrollProvider";

export default function Personal() {
  const sectionRefs = useScroll();
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
        <p className="md:w-1/2 px-5 flex-end text-md md:px-[100px] lg:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem molestias quam libero velit perspiciatis, eveniet,
          exercitationem odio numquam animi debitis amet, omnis optio facilis
          cum! Doloremque obcaecati doloribus dicta!
        </p>
        <div className="md:w-1/2 flex justify-center items-center">
          <img className="h-[200px] xl:h-[400px]" src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}
