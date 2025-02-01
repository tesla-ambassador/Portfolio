"use client";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/react";
import { Hero, NewHero } from "../components/Hero";
import { HeroMac } from "../components/HeroMac";
import { HeroMob } from "../components/HeroMob";
import Features from "../components/Features";
import { Projects } from "../components/Projects";
import About from "../components/AboutMe";
import ContactMe from "../components/Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <NewHero />
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
