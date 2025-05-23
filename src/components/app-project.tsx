"use client";
import React, { useState, useEffect } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
// Define the Project type (interface) - CORRECTED
interface ProjectType {
    id: string;
    title: string;
    images: { path: string }[];
    badgeInfo: { badge: string; badgeColor: string }[];
}

export function Project() {

    const [projects, setProjects] = useState<ProjectType[] | null>(null); // Use the ProjectType or null

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch("/data/data.json"); // Assumes the JSON file is in the 'public/data' folder
            const data = await response.json();
            setProjects(data.projects);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle the error appropriately (e.g., display an error message)
        }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const data = projects

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
                <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white">
                Projects
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                Showcasing Expertise and Delivering Measurable Results.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 extended-lg:grid-cols-3 extended-2xl:grid-cols-4 2xl:grid-cols-3 lg:px-20 lg:px-20 2xl:px-40 gap-x-10 gap-y-10 w-full flex items-center justify-center">
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-20 xl:px-40 gap-x-10 gap-y-10 w-full flex items-center justify-center"> */}
                {data && data.map((project: any) => (
                    <PinContainer
                        key={project.id}
                        title={project.title}
                        href={`/project/${project.id}`}

                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[19rem] ">
                            <Badge className={`my-2 w-max ${project.badgeInfo.badgeColor}`}>{project.badgeInfo.badge}</Badge>
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                                {project.title}
                            </h3>
                            <Image
                                src={project.images[0].path}
                                height="700"
                                width="700"
                                className="h-auto object-cover rounded-xl m-auto"
                                alt="thumbnail"
                            />
                        </div>
                    </PinContainer>
                ))}
                {/* <PinContainer
                    title="Sentiment Analysis and Prediction on Indonesian Presidential Candidature"
                    href="/project/a7B2xYz9Wq"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                    <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                        Sentiment Analysis and Prediction on Indonesian Presidential Candidature
                    </h3>
                    <Image
                        src="/project/candidate3.png"
                        height="700"
                        width="700"
                        className="h-auto object-cover rounded-xl"
                        alt="thumbnail"
                    />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Service Orchestration"
                    href="/project/pQ1vR5sT8j"
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
                    title="TM NGOSS NGT A&I"
                    href="/project/kLm0N3fGhI"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                    <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                        TM NGOSS NGT A&I
                    </h3>
                    <Image
                        src="/project/tm1.png"
                        height="700"
                        width="700"
                        className="h-auto object-cover rounded-xl"
                        alt="thumbnail"
                    />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Adidas Sales Analysis and Recommendations"
                    href="/project/zYuXwV6CbA"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                    <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                        Sales Analysis and Recommendations
                    </h3>
                    <Image
                        src="/project/adidas1.png"
                        height="700"
                        width="700"
                        className="h-auto object-cover rounded-xl"
                        alt="thumbnail"
                    />
                    </div>
                </PinContainer>
                <PinContainer
                    title="DTS Company Profile"
                    href="/project/dEs4F5gHiJ"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                    <Badge className="my-2 w-max bg-blue-500">Professional</Badge>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                        DTS Company Profile
                    </h3>
                    <Image
                        src="/project/dts1.png"
                        height="700"
                        width="700"
                        className="h-auto object-cover rounded-xl"
                        alt="thumbnail"
                    />
                    </div>
                </PinContainer>
                <PinContainer
                    title="Text Highlighter and Dictionary Search"
                    href="/project/o9PqRs2TuV"
                    // target="_blank"
                >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[18rem] ">
                    <Badge className="my-2 w-max bg-green-500">Academic</Badge>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
                        Text Highlighter and Dictionary Search
                    </h3>
                    <Image
                        src="/project/nlp1.png"
                        height="700"
                        width="700"
                        className="h-auto object-cover rounded-xl"
                        alt="thumbnail"
                    />
                    </div>
                </PinContainer> */}
            </div>
        </div>
        
    );
}
