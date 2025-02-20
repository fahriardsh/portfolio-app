"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export function Project() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
          {/* <Badge className="m-2 w-max" variant="secondary">Academic Project</Badge> */}
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
            Sentiment Analysis and Prediction on Indonesian Presidential Candidature
          </h3>
          {/* <Badge className="w-max" variant="secondary">Academic Project</Badge> */}

          {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div> */}
          {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-transparent" /> */}
          {/* <div
            className="flex flex-1 w-full rounded-lg mt-4"
            style={{
                backgroundImage: "url('/img/candidate.png')",  // Replace with your image path
                backgroundSize: "cover", // or 'contain', 'auto', etc.
                backgroundPosition: "center", // or 'top', 'bottom', 'left', 'right', etc.
                backgroundRepeat: "no-repeat", // or 'repeat', 'repeat-x', 'repeat-y'
            }}
            /> */}
            <Image
              src="/project/candidate.png"
              height="700"
              width="700"
              className="h-auto object-cover rounded-xl"
              alt="thumbnail"
            />
            <Badge className="mt-4 w-max" variant="secondary">Academic</Badge>
          </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
            Service Orchestration
          </h3>
            <Image
              src="/project/soc1.png"
              height="700"
              width="700"
              className="h-auto object-cover rounded-xl"
              alt="thumbnail"
            />
          <Badge className="mt-4 w-max" variant="secondary">Professional</Badge>
          </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
            Service Orchestration
          </h3>
            <Image
              src="/project/soc1.png"
              height="700"
              width="700"
              className="h-auto object-cover rounded-xl"
              alt="thumbnail"
            />
          <Badge className="mt-4 w-max" variant="secondary">Professional</Badge>
          </div>
      </PinContainer>
    </div>
  );
}
