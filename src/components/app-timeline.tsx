// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2017",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">An International Education</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            My journey began when I graduated from high school in Jakarta, Indonesia. Inspired by a desire for new challenges and broader horizons, I made the significant decision to pursue my undergraduate degree abroad, setting my sights on Malaysia.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src="/img/fahri.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/img/fahri.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
          {/* <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
          Relocating to Malaysia was a transformative experience. Immersed in a new culture, I forged lasting friendships, expanded my worldview, and gained invaluable knowledge in the field of software engineering.
          </p> */}
        </div>
      ),
    },
    // {
    //   title: "Early 2020",
    //   content: (
    //     <div>
    //       <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">Navigating Uncharted Waters</p>
    //       <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
    //         The onset of the COVID-19 pandemic forced an unexpected return to Indonesia. Undeterred, I adapted to the situation and successfully completed my final semester of studies remotely.
    //       </p>
    //     </div>
    //   ),
    // },
    {
        title: "2020",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">A First Taste of Industry</p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
              Fueled by a desire to apply my newfound knowledge, I secured an internship at Dreta Teknologi Solusindo. This hands-on experience proved to be incredibly enriching, providing me with a comprehensive introduction to the world of software development.
            </p>
          </div>
        ),
    },
    {
      title: "Mid 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">Full-Time Immersion</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            My internship at Dreta Teknologi Solusindo transitioned into a full-time position. Working on real-world projects and collaborating with experienced professionals accelerated my learning curve and provided invaluable insights into the practical application of software engineering principles.
          </p>
        </div>
      ),
    },
    {
      title: "Late 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">A Foundation of Knowledge</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            I proudly graduated from Universiti Utara Malaysia (UUM) with a Bachelor of Science in Information Technology, majoring in Software Engineering. I was honored to have achieved Dean&apos;s List recognition twice during my studies, a testament to my dedication and commitment to academic excellence.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">Elevating my Expertise</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            Driven by a desire for continuous growth and specialized expertise, I made the difficult decision to resign from my position at Dreta Teknologi Solusindo and embark on a new chapter in my academic journey: pursuing a Master&apos;s degree, once again in Malaysia.
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">A Year of Growth and Resilience</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            My year of Master&apos;s studies in Asia Pacific University (APU) was a rollercoaster of emotions, filled with joy, challenge, hardship, and even moments of frustration. However, the experience proved to be immensely rewarding, pushing my analytical skills to new heights in Data Science and Business Analytics, and connecting me with a vibrant community of professionals.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-semibold">The Future Awaits</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-8">
            As I look ahead to 2025, I am eager to leverage my academic achievements, industry experience, and international perspective to contribute and make a positive impact on the world.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
