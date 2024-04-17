"use client";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import { Hero } from "./Hero";
import { HeroMac } from "./HeroMac";
import { HeroMob } from "./HeroMob";
import Features from "./Features";
import { Projects } from "./Projects";
import About from "./AboutMe";
import ContactMe from "./Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <div className="hidden lg:block w-full h-full">
          <HeroMac />
        </div>
        <div className="lg:hidden w-full h-full flex justify-center items-center py-20">
          <HeroMob />
        </div>
        <Features />
        <Projects />
        <About />
        <ContactMe />
      </div>
    </NextUIProvider>
  );
}
