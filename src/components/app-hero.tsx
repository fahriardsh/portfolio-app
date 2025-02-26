"use client";
import React from "react";
import { Download } from "lucide-react"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Hello, I'm",
    },
    {
      text: "Fahri",
      className: "text-blue-500",
    },
    {
      text: "Ardiansyah,",
      className: "text-blue-500",
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
      <div className="max-w-3xl mx-auto pb-10 px-4 md:px-8 lg:px-10 text-center">
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          {/* a creative technologist with a knack for blending design and functionality. I&apos;m driven by a desire to build impactful experiences that solve real-world challenges. */}
          a creative technologist with a knack for blending design and functionality to create impactful solutions that address real-world challenges.
        </p>
      </div>
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 lg:grid-cols-2"> */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        <button
          className="grid px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={() => window.open('https://www.linkedin.com/in/fahri-pratama-ardiansyah/', '_blank', 'noopener,noreferrer')}
        >
          LinkedIn
        </button>
        <button
          className="grid px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={() => window.open('https://github.com/fahriardsh', '_blank', 'noopener,noreferrer')}
        >
          Github
        </button>
        <button 
          // className="grid shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          className="grid shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={() => window.open('mailto:fahriardsh@gmail.com', '_blank', 'noopener,noreferrer')}
        >
          Contact
        </button>
        <button 
          className="grid px-6 py-2 bg-transparent text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={() => window.open('https://drive.google.com/file/d/1wjXOyPJrx6_O9YFk6mDwebTvDzMGhyK3/view?usp=sharing', '_blank', 'noopener,noreferrer')}
          style={{display: "flex"}}
        >
          <Download className="pr-2" />
          Full Resume
        </button>
        {/* <button
          className="grid px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={() => window.open('https://www.kaggle.com/guardiansbarrier', '_blank', 'noopener,noreferrer')}
        >
          Kaggle
        </button> */}
      </div>
    </div>
  );
}
