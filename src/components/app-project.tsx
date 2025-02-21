"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export function Project() {
  return (
    <div className="py-20">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white">
            Project(s)
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Showcasing Expertise and Delivering Measurable Results
            </p>
        </div>
        {/* <div className="h-[23rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Sentiment Analysis and Prediction on Indonesian Presidential Candidature
                </h3>
                <Image
                    src="/project/candidate.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
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
                </div>
            </PinContainer>
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Service OrchestrationPerformance and Fault Management Dashboard
                </h3>
                <Image
                    src="/project/tm2.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
        </div>
        <div className="h-[23rem] w-full flex items-center justify-center ">
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Sentiment Analysis and Prediction on Indonesian Presidential Candidature
                </h3>
                <Image
                    src="/project/candidate.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
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
                </div>
            </PinContainer>
            <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Service OrchestrationPerformance and Fault Management Dashboard
                </h3>
                <Image
                    src="/project/tm2.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 xl:px-40 gap-x-10 gap-y-10 w-full flex items-center justify-center">
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-20 xl:px-40 gap-x-10 gap-y-10 w-full flex items-center justify-center"> */}
            <PinContainer
                title="Sentiment Analysis and Prediction on Indonesian Presidential Candidature"
                href=""
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Sentiment Analysis and Prediction on Indonesian Presidential Candidature
                </h3>
                <Image
                    src="/project/cp.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="Service Orchestration"
                href=""
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Service Orchestration
                </h3>
                <Image
                    src="/project/soc.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="Performance and Fault Management Dashboard"
                href=""
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Performance and Fault Management Dashboard
                </h3>
                <Image
                    src="/project/tm.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="Sales Analysis and Recommendations"
                href=""
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Sales Analysis and Recommendations
                </h3>
                <Image
                    src="/project/adidas.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="DTS"
                href=""
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    DTS Company Profile
                </h3>
                <Image
                    src="/project/dts.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
            <PinContainer
                title="Text Highlighter and Dictionary Search"
                href=""
                // target="_blank"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                    Text Highlighter and Dictionary Search
                </h3>
                <Image
                    src="/project/nlp.png"
                    height="700"
                    width="700"
                    className="h-auto object-cover rounded-xl"
                    alt="thumbnail"
                />
                </div>
            </PinContainer>
        </div>
    </div>
    
  );
}
