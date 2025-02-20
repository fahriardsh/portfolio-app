import { AppSidebar } from "@/components/app-sidebar"
import { Hero } from "@/components/app-hero"
// import { Social } from "@/components/app-social"
import { Journey } from "@/components/app-timeline"
import { Expertise } from "@/components/app-expertise"
import { Skills } from "@/components/app-skills"
import { Project } from "@/components/app-project"
// import { Tools } from "@/components/app-tools"
// import { Expertise } from "@/components/app-expertise"
// import { TimelineDemo } from "@/components/app-timeline"
// import { NavActions } from "@/components/nav-actions"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbPage,
// } from "@/components/ui/breadcrumb"
// import { Separator } from "@/components/ui/separator"
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
            {/* <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Fahri Pratama Ardiansyah
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
          {/* <div className="ml-auto px-3">
            <NavActions />
          </div> */}
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-muted/50" />
        </div> */}
        {/* <Social></Social> */}
        <Hero></Hero>
        <Project></Project>
        <Expertise></Expertise>
        <Skills></Skills>
        <Journey></Journey>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </SidebarInset>
    </SidebarProvider>
  )
}
