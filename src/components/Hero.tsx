import React from "react";
import arrowImg from "../assets/img/arrowicon.png";

export default function Hero() {
  return (
    <section className="text-white font-primary flex flex-col items-center gap-5 md:gap-8 mt-[7rem] relative z-10">
      <h1 className="text-3xl md:text-[2.5rem] font-light text-center md:leading-snug max-w-[57.6rem]">
        Boost your productivity with our{" "}
        <span className="font-medium">streamlined note-taking</span> solution
      </h1>
      <p className="text-center md:text-[1.25rem] text-white/60 max-w-[34.75rem]">
        Effortlessly access your notes from any device with our convenient
        cloud-based solution.
      </p>
      <button className="flex p-4 gap-4 bg-accent font-semibold rounded-md hover:bg-accent/40">
        Try For Free <img src={arrowImg} alt="arrow right" />
      </button>
    </section>
  );
}
