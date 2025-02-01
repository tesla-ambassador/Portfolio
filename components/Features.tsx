"use client";
import { Code } from "@mui/icons-material";

import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandFirebase,
  IconBrandTailwind,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandFortnite,
  IconBrandMongodb,
  IconBrandMysql,
} from "@tabler/icons-react";

const features = [
  {
    name: "Web design",
    description:
      "I excel in web design, combining creativity with functionality to create visually stunning and user-friendly interfaces that captivate audiences and elevate user experiences.",
    icon: Code,
  },
  {
    name: "JavaScript",
    description:
      "Master of interactivity! I wield JavaScript to breathe life into web pages, delivering dynamic and responsive user experiences that keep visitors engaged and delighted.",
    icon: IconBrandJavascript,
  },
  {
    name: "Tailwind css",
    description:
      "My secret sauce for streamlined styling! With Tailwind, I craft elegant and consistent designs effortlessly, speeding up development while maintaining flexibility and scalability.",
    icon: IconBrandTailwind,
  },
  {
    name: "React",
    description:
      "My toolkit for building interactive web experiences! With React, I create fast, responsive, and scalable applications, delivering seamless user interfaces that adapt to every need.",
    icon: IconBrandReact,
  },
  {
    name: "TypeScript",
    description:
      "Elevating my coding game! With TypeScript, I ensure robust, scalable, and maintainable codebases, leveraging strong typing and modern JavaScript features for enhanced development efficiency and reliability",
    icon: IconBrandTypescript,
  },
  {
    name: "Firebase",
    description:
      "My go-to for seamless backend solutions! With Firebase, I effortlessly build and deploy scalable applications, leveraging its powerful features for real-time database management, authentication, and cloud functions.",
    icon: IconBrandFirebase,
  },
  {
    name: "Python",
    description:
      "My Swiss Army knife for development! With Python, I tackle everything from web development to machine learning, leveraging its simplicity, versatility, and vast ecosystem for efficient and powerful solutions.",
    icon: IconBrandPython,
  },
  {
    name: "Next.js",
    description:
      "Turbocharging my web development! With Next.js, I create lightning-fast and SEO-friendly React applications, leveraging its powerful features for server-side rendering, routing, and seamless deployment.",
    icon: IconBrandNextjs,
  },
  {
    name: "Node js",
    description:
      "Powering my backend prowess! With Node.js, I craft efficient and scalable server-side applications, leveraging its asynchronous event-driven architecture for high-performance and real-time capabilities.",
    icon: IconBrandNodejs,
  },

  {
    name: "MySQL",
    description:
      "My trusted database companion! With MySQL, I ensure efficient data management and retrieval, leveraging its reliability and performance for robust backend solutions in web development projects.",
    icon: IconBrandMysql,
  },

  {
    name: "MongoDb",
    description:
      "Unleashing the power of NoSQL! With MongoDB, I seamlessly handle data storage for web applications, ensuring flexibility, scalability, and performance for handling diverse and evolving data needs",
    icon: IconBrandMongodb,
  },
  {
    name: "Fortnite",
    description:
      "My downtime indulgence! When not coding, I master the art of survival and combat in Fortnite for some well-deserved relaxation. My username is tesla-ambassador let's play!",
    icon: IconBrandFortnite,
  },
];

export default function Features() {
  return (
    <div className="bg-slate-800 py-24 sm:py-32 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My trusted tools and skillset
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            As a developer, I'm proficient in diverse programming languages and
            frameworks, specializing in both frontend and backend development.
            My expertise lies in crafting responsive websites, scalable web
            applications, and integrating advanced technologies to exceed
            expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-200">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
