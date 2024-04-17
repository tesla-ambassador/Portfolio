"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./acertenity_components/typewriter-effect";
export function Hero() {
  const words = [
    {
      text: "Hey",
    },
    {
      text: "there!",
    },
    {
      text: "I'm",
    },
    {
      text: "Kevin.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const myAlias = "You can also call me the Tesla Ambassador :-)";
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full  bg-[url('/anas-alshanti-feXpdV001o4-unsplash-min.jpg')] bg-cover bg-no-repeat bg-center">
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base  ">
        {myAlias}
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href={"/#projects"}>
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            My projects
          </button>
        </Link>
        <Link href={"/#contact"}>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Contact me
          </button>
        </Link>
      </div>
    </div>
  );
}
