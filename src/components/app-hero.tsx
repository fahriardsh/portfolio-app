"use client";
import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Hi, I'm",
    },
    {
      text: "Fahri",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Ardiansyah,",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
        Driven by innovation and a passion for technology...
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base pb-3" style={{textAlign: "center", width: "54rem", paddingBottom: "3rem"}}>
        a creative technologist with a knack for blending design and functionality. I am driven by a desire to build impactful experiences that solve real-world challenges.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
