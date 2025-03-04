"use client";

import Image from "next/image";
import React from "react";
// import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import {
//   Mail
// } from "lucide-react"


export function Contact() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white">
          Let&apos;s Connect!
        </h2>
        {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          A diverse skillset combining technical proficiency with creative design and strategic thinking.
        </p> */}
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-10 md:px-40 lg:px-60 py-10" style={{justifyItems: "center"}}>
        <div>
          <Image
            src="/img/fahri.webp"
            height="350"
            width="350"
            className="h-auto object-cover rounded-xl"
            alt="thumbnail"
          />
        </div>
        <div style={{margin: 'auto'}}>
          <button
            className="grid px-6 py-2 bg-blue-700 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
            onClick={() => window.open('https://www.linkedin.com/in/fahri-pratama-ardiansyah/', '_blank', 'noopener,noreferrer')}
          >
            LinkedIn
          </button>
        </div>
        {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base" style={{margin: 'auto'}}>
          A diverse skillset combining technical proficiency with creative design and strategic thinking.
        </p> */}
        {/* <div className={cn("cursor-pointer overflow-hidden relative card rounded-lg shadow-md  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4" )}>

        </div> */}
        {/* <div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            A diverse skillset combining technical proficiency with creative design and strategic thinking.
          </p>
        </div> */}
      </div>
    </div>
    
  );
}
