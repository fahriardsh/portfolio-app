// app/project/[projectId]/page.tsx
// "use client";

import React from 'react';
// import { Metadata } from 'next';
import { ProjectContent } from "@/components/app-project-content"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface Project {
  id: string;
  title: string;
  description: string;
  images: any[];
}

type Params = Promise<{ projectId: string }>

async function getProject(projectId: string): Promise<Project | undefined> {
  try {
    // Get the base URL of the application
    const baseUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'  // Your development URL
      : ''; // Leave empty in production (it will be relative)

    const jsonUrl = `${baseUrl}/data/data.json`;

    const res = await fetch(jsonUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects.find((project) => project.id === projectId);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return undefined;
  }
}

export async function generateMetadata(props: { params: Params }) {
  const { projectId } = await props.params;
  const project = await getProject(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props: { params: Params }) {
  const { projectId } = await props.params;
  const project = await getProject(projectId);

  if (!project) {
    return <div>Project not found</div>; // Handle the case where the project doesn't exist
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
          </div>
        </header>
        <ProjectContent data={project} ></ProjectContent>
        <footer className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
          </div>
          <div className="flex flex-end items-center gap-2 px-3">
            <p>© 2025 Fahri Pratama Ardiansyah.</p>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}


// export function HeroParallaxDemo() {
//   return <HeroParallax products={products} />;
// }
// export const products = [
//   {
//     title: "Moonbeam",
//     link: "https://gomoonbeam.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
//   },
//   {
//     title: "Cursor",
//     link: "https://cursor.so",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cursor.png",
//   },
//   {
//     title: "Rogue",
//     link: "https://userogue.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/rogue.png",
//   },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },
// ];
