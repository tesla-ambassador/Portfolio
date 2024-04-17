"use client";
import { TextGenerateEffect } from "./acertenity_components/text-generate";
const words =
  "Hey, I'm Kevin, but you can call me the Tesla Ambassador. Based in Uganda, I'm fueled by a passion for creating extraordinary applications and writing software. From concept to code, I specialize in turning ideas into impactful digital solutions that resonate and inspire.";

export default function About() {
  return (
    <section
      id="aboutme"
      className="isolate overflow-hidden bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto w-20 rounded-full"
          src="/One Piece Monkey D_ Luffy Picking Nose.jpeg"
          alt=""
        />
        <div className="mt-10">
          <div className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9">
            <TextGenerateEffect words={words} />
          </div>
          <div className="mt-10">
            <img
              className="mx-auto w-[15rem] rounded-md"
              src="/Kevin pfp.jpg"
              alt="Kevin"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900 dark:text-gray-500 text-medium">
                Kevin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
