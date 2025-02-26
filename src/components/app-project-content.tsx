"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Badge } from "@/components/ui/badge"

interface ProjectImage {
    name: string;
    path: string;
}

interface ProjectLink {
    name: string;
    path: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    responsibility: string[];
    tools: string[];
    images: ProjectImage[];
    link: ProjectLink[];
}

export function ProjectContent(data: any) {

    const project: Project = data.data;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                containerClassName="col-span-1 md:col-span-2 h-full bg-zinc min-h-[300px]"
                className=""
            >
                <div className="">
                <h2 className="text-left text-base text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral">
                    {project.title}
                </h2>
                <div className="flex flex-row flex-wrap gap-2 mt-2">
                    {/* {project.link ? project.link.map((link, index: number) => (
                        <button
                            key={index}
                            className="grid px-3 py-1 bg-blue-500 text-white text-sm rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                            onClick={() => window.open(link.path, '_blank', 'noopener,noreferrer')}
                            >
                        {link.name}
                        </button>
                        : null
                    ))} */}
                    {project.link && project.link.map((link, index) => (
                        <button
                            key={index} // Use a unique link ID if available, otherwise index
                            className="grid px-3 py-1 bg-blue-500 text-white text-sm rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                            onClick={() => window.open(link.path, '_blank', 'noopener,noreferrer')}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
                <p className="mt-4 text-left text-justify text-base/6 text-neutral-700">
                    {project.description}
                </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-zinc">
                <h2 className="text-left text-base text-md lg:text-xl font-semibold tracking-[-0.015em] text-blue-500">
                Tools and Technologies
                </h2>
                <div className="flex flex-row flex-wrap gap-2 mt-4">
                    {project.tools.map((tools, index: number) => (
                        <Badge key={index} variant="secondary">{tools}</Badge>
                    ))}
                </div>
                <br/>
                <h2 className="text-left text-base text-md lg:text-xl font-semibold tracking-[-0.015em] text-blue-500">
                Roles and Responsibility
                </h2>
                {/* <p className="mt-2 text-left text-justify text-base/6 text-neutral-700">
                    {project.responsibility}
                </p> */}
                <ul className="list-disc pl-5 text-base/6 text-neutral-700">
                    {project.responsibility.map((responsibility, index: number) => (
                        <li className="" key={index}>{responsibility}</li>
                    ))}
                </ul>
                {/* <ul className="list-disc pl-5">
                    <li>UI/UX Design</li>
                    <li>Frontend Development</li>
                    <li>SQL Queries</li>
                </ul> */}
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-700 min-h-[500px]">
                <div className="w-full">
                    <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Screenshots of the project
                    </h2>
                    {/* <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {project.images.map((image, index: number) => (
                            <div style={{margin: "auto"}} key={index}>
                                <Image
                                src={image.path}
                                height="800"
                                width="800"
                                className="h-auto object-cover rounded-xl"
                                alt="thumbnail"
                                />  
                            </div>
                        ))} 
                    </div>
                </div>
            </WobbleCard>
        </div>
    );
}
