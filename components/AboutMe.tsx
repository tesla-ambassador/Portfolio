"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words =
  "I'm a front-end developer with 5 years of experience building clean, responsive web applications. I refine my skills through Frontend Mentor, freelance projects, and machine learning experiments. Passionate about intuitive design and usability, I focus on crafting visually appealing, high-performing websites that deliver seamless digital experiences through clean code and a user-first approach.";

export default function About() {
  return (
    <section
      id="aboutme"
      className="isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-20 rounded-full"
          src="/One Piece Monkey D_ Luffy Picking Nose.jpeg"
          alt=""
        />
        <div className="mt-10">
          <div className="text-center text-xl font-semibold leading-8 text-gray-100 sm:text-2xl sm:leading-9">
            <TextGenerateEffect words={words} />
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-amber-300 text-medium">
                Kevin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
