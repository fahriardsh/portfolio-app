import React from 'react';
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
            ? 'http://localhost:3000/'  // Your development URL
            : 'https://fahriardsh.vercel.app'; // Leave empty in production (it will be relative)
        const res = await fetch(baseUrl + `/data/data.json`, { // Relative URL
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error(`Fetch failed with status: ${res.status}, ${res.statusText}`);
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

// export async function generateMetadata(props: { params: Params }) {
//   const { projectId } = await props.params;
//   const project = await getProject(projectId);

    if (!project) {
        return <div>Project not found</div>; // Handle the case where the project doesn't exist
    }

    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger/>
                    </div>
                </header>
                <ProjectContent data={project}></ProjectContent>
                <footer className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger/>
                    </div>
                    <div className="flex flex-end items-center gap-2 px-3">
                        <p>© 2025 Fahri Pratama Ardiansyah.</p>
                    </div>
                </footer>
            </SidebarInset>
        </SidebarProvider>
    );
}
