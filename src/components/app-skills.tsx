"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import Link from "next/link";

export function Skills() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-lg md:text-4xl mb-4 text-black font-bold dark:text-white">
          Skills and Expertise
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
              src="/img/tagcloud.png"
              height="800"
              width="800"
              className="h-auto object-cover rounded-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
    
  );
}
