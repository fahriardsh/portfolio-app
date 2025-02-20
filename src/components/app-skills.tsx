"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";

export function Skills() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white">
          Core Languages & Technologies
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          A diverse skillset combining technical proficiency with creative design and strategic thinking.
        </p>
      </div>
      {/* <Tools></Tools> */}
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-auto rounded-xl p-6">
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/img/tagcloud2.png"
              height="700"
              width="700"
              className="h-auto object-cover rounded-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:px-40 lg:px-20 gap-2 items-center justify-center py-10 px-0">
        <button className="px-2 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400"style={{justifyItems: "center"}}>
          <Image
            src="/img/vscode.png"
            alt="vscode"
            width={500}
            height={500}
            className="w-auto h-10"
          />
        </button>
        <button className="px-2 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400"style={{justifyItems: "center"}}>
          <Image
            src="/img/gcolab.png"
            alt="gcolab"
            width={500}
            height={500}
            className="w-auto h-12"
          />
        </button>
        <button className="px-2 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400"style={{justifyItems: "center"}}>
          <Image
            src="/img/tableau.png"
            alt="tableau"
            width={500}
            height={500}
            className="w-auto h-7"
          />
        </button>
        <button className="px-2 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400"style={{justifyItems: "center"}}>
          <Image
            src="/img/figma.png"
            alt="figma"
            width={500}
            height={500}
            className="w-auto h-10"
          />
        </button>
        <button className="px-2 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400"style={{justifyItems: "center"}}>
          <Image
            src="/img/rstudio.png"
            alt="rstudio"
            width={500}
            height={500}
            className="w-auto h-8"
          />
        </button>
        {/* <button className="rounded-lg bg-[#fefefe] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#fefefe] transition-colors duration-200 p-4">
          <Image
            src="/img/dbeaver.png"
            alt="dbeaver"
            width={500}
            height={500}
            className="h-8"
          />
        </button> */}
        <button className="px-6 py-2 bg-transparent border-none transform hover:-translate-y-1 transition duration-400" style={{justifyItems: "center"}}>
          <Image
            src="/img/dbeaver.png"
            alt="dbeaver"
            width={500}
            height={500}
            className="w-auto h-9"
          />
        </button>
      </div>
    </div>
    
  );
}
