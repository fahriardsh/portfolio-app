"use client";

import { FolderCode, Microscope } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge"

export function Expertise() {
  return (
    <div className="py-20">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10 text-center">
            <h2 className="text-3xl md:text-5xl mb-4 text-black font-bold dark:text-white">
            Area of Expertise
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Leveraging advanced technical skills and data-driven insights to build innovative solutions.
            </p>
        </div>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 px-20 py-10">
            <GridItem1
            // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<FolderCode className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Software Engineering"
                description="3+ years of development expertise, creating scalable solutions and driving innovation."
            />
            <GridItem2
            // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Microscope className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Data Science"
                description="Turning data into insights to provide solutions."
            />
            {/* <GridItem2
                // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Microscope className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Data Science"
                description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
            /> */}
        </ul>
    </div>
  );
}

interface GridItemProps {
//   area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

// const GridItem = ({ area, icon, title, description }: GridItemProps) => {
const GridItem1 = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
                <Badge variant="secondary">Full Stack Development</Badge>
                <Badge variant="secondary">Web Application</Badge>
                <Badge variant="secondary">Database Management</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">API Development</Badge>
                <Badge variant="secondary">System Design</Badge>
                <Badge variant="secondary">Agile</Badge>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const GridItem2 = ({ icon, title, description }: GridItemProps) => {
    return (
      <li className={`min-h-[14rem] list-none`}>
        <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                  {title}
                </h3>
                <h2
                  className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                >
                  {description}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                  <Badge variant="secondary">EDA</Badge>
                  <Badge variant="secondary">Data Cleaning</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Predictive Analytics</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">AI</Badge>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
