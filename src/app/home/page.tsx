import { AppSidebar } from "@/components/app-sidebar"
import { Hero } from "@/components/app-hero"
// import { Social } from "@/components/app-social"
import { Journey } from "@/components/app-timeline"
import { Expertise } from "@/components/app-expertise"
import { Skills } from "@/components/app-skills"
import { Project } from "@/components/app-project"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Home() {
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
          </div>
        </header>
        <Hero></Hero>
        <Expertise></Expertise>
        <Skills></Skills>
        <Project></Project>
        <Journey></Journey>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
  )
}
