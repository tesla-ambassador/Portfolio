"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

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

export function NewHero() {
  const words =
    "Based in Uganda, I'm fueled by a passion for creating extraordinary web applications and writing software. From concept to code, I specialize in turning ideas into impactful digital solutions that resonate and inspire.";
  const myAlias = "You can also call me the Tesla Ambassador :-)";
  return (
    <div className=" relative min-h-screen w-full text-white bg-[url('/kevin-landing-bg.JPG')] bg-cover bg-no-repeat bg-center flex justify-center
    after:absolute after:bg-black after:h-full after:w-full after:left-0 after:top-0 after:opacity-50
    ">
      <div className="relative z-10 flex flex-col items-center justify-center h-screen w-full md:max-w-2xl p-4">
        <p className="text-neutral-200 text-sm sm:text-base text-center  ">{myAlias}</p>
        <div className="py-3">
          <h1 className="text-lg sm:text-xl lg:text:3xl xl:text-5xl font-bold">
            Hey There I'm <span className="text-amber-400">Kevin</span>
          </h1>
        </div>
        <div className="pb-6">
          <p className="text-center text-sm sm:text-lg">{words}</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <Link href={"/#projects"}>
            <button className="w-40 h-10 rounded-xl text-black bg-amber-400 border dark:border-white border-transparent text-sm">
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
    </div>
  );
}
