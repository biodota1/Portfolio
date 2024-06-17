import React from "react";
import profile from "../assets/profile.png";

export default function Personal() {
  return (
    <div className="relative min-h-screen flex items-center text-slate-50">
      <p className="w-1/2 px-[100px] text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptatem molestias quam libero velit perspiciatis, eveniet,
        exercitationem odio numquam animi debitis amet, omnis optio facilis cum!
        Doloremque obcaecati doloribus dicta!
      </p>
      <img className="w-1/2 p-[200px]" src={profile} alt="" />
    </div>
  );
}
