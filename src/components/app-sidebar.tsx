"use client"

import * as React from "react"
import {
  Home
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
// import { NavSecondary } from "@/components/nav-secondary"
// import { NavWorkspaces } from "@/components/nav-workspaces"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { cn } from "@/lib/utils";
// import Image from "next/image";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    }
  ],
  favorites: [
    {
      name: "Service Orchestration",
      url: "/project/pQ1vR5sT8j",
      emoji: "📔",
    },
    {
      name: "TM NGOSS NGT AI",
      url: "/project/kLm0N3fGhI",
      emoji: "⚡",
    },
    {
      name: "Power Management System",
      url: "/project/xEa1F5sZiK",
      emoji: "🔋",
    },
    {
      name: "DTS Company Profile",
      url: "/project/dEs4F5gHiJ",
      emoji: "🏢",
    },
    {
      name: "Sentiment Analysis and Prediction on Indonesian Presidential Candidature",
      url: "http://localhost:3000/project/a7B2xYz9Wq",
      emoji: "🗳️",
    },
    {
      name: "Adidas Sales Analysis and Recommendation",
      url: "/project/zYuXwV6CbA",
      emoji: "👟",
    },
    {
      name: "Text Highlighter and Dictionary Search",
      url: "/project/o9PqRs2TuV",
      emoji: "📖",
    },
    {
      name: "Air Pollution Forecasting",
      url: "/project/f7PqAs2GfJ",
      emoji: "💨",
    },
    {
      name: "Telekom Churn Prediction",
      url: "/project/g3PfBs3SfA",
      emoji: "📡",
    },
  ],
  // projects: [
  //   {
  //     name: "Professional",
  //     emoji: "💼",
  //     pages: [
  //       {
  //         name: "Service Orchestration",
  //         url: "/project/pQ1vR5sT8j",
  //         emoji: "📔",
  //       },
  //       {
  //         name: "TM NGOSS NGT AI",
  //         url: "/project/kLm0N3fGhI",
  //         emoji: "⚡",
  //       },
  //       {
  //         name: "Power Management System",
  //         url: "/project/xEa1F5sZiK",
  //         emoji: "🔋",
  //       },
  //       {
  //         name: "DTS Company Profile",
  //         url: "/project/dEs4F5gHiJ",
  //         emoji: "🏢",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Academic",
  //     emoji: "🎓",
  //     pages: [
  //       {
  //         name: "Sentiment Analysis and Prediction on Indonesian Presidential Candidature",
  //         url: "http://localhost:3000/project/a7B2xYz9Wq",
  //         emoji: "📔",
  //       },
  //       {
  //         name: "Adidas Sales Analysis and Recommendation",
  //         url: "/project/zYuXwV6CbA",
  //         emoji: "📔",
  //       },
  //       {
  //         name: "Text Highlighter and Dictionary Search",
  //         url: "/project/o9PqRs2TuV",
  //         emoji: "📔",
  //       },
  //       {
  //         name: "Air Pollution Forecasting",
  //         url: "/project/f7PqAs2GfJ",
  //         emoji: "📔",
  //       },
  //       {
  //         name: "Telekom Churn Prediction",
  //         url: "/project/g3PfBs3SfA",
  //         emoji: "📔",
  //       },
  //     ]
  //   }
  // ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        {/* <div className="max-w-xs w-full">
          <div
            className={cn(
              "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
              "bg-[url('/img/fahri.jpeg')] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            <div className="text relative z-50">
              <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                Background Overlays
              </h1>
              <p className="font-normal text-base text-gray-50 relative my-4">
                This card is for some special elements, like displaying background
                gifs on hover only.
              </p>
            </div>
          </div>
        </div> */}
        {/* <text>Fahri Pratama Ardiansyah</text> */}
        <div className="max-w-xs w-full group/card">
          <div
              className={cn(
                " cursor-pointer overflow-hidden relative card rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url('/img/fahri.jpeg')] bg-cover"
              )}
              style={{height: "19rem"}}
            >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
            </div>
            <div className="text content text-center">
              <h1 className="font-bold text-lg md:text-xl text-gray-50 relative z-10">
                Fahri Pratama Ardiansyah
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-2">
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        {/* <NavWorkspaces workspaces={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
