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
      name: "Sentiment Analysis and Prediction on Indonesian Presidential Candidature",
      url: "/project/a7B2xYz9Wq",
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
    }
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
        {/* <text>Fahri Pratama Ardiansyah</text> */}
        <div className="max-w-xs w-full group/card">
          <div
              className={cn(
                " cursor-pointer overflow-hidden relative card rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url('/img/fahri.png')] bg-cover"
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
