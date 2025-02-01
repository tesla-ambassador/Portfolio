import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <div id="projects" className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Activate Body Therapy",
    description:
      "A website for one of the top body clinics and health clubs in Uganda!",
    link: "https://activatebodytherapy.com",
  },
  {
    title: "Mona Faces",
    description:
      "A website for Uganda's leading makeup service provider, Mona Faces!",
    link: "https://monamakeupstudio.com",
  },
  {
    title: "Aggregate Consulting Ltd",
    description:
      "A simple website for a tax consultation firm in Uganda. At the moment of this writing it's nearly finished",
    link: "https://aggregate-consulting.vercel.app",
  },
  {
    title: "Parking Space Allocation",
    description:
      "This is a project I started when I was studying at ISBAT University. It uses computer vision and machine learning to determine empty and full parking spots",
    link: "https://github.com/tesla-ambassador/Parking-space-allocator.git",
  },
  {
    title: "GPT Classification",
    description:
      "This is a challenge by Zindi Africa and I was tasked to use chat GPT to train a model to classify some data in swahili.",
    link: "https://colab.research.google.com/drive/1obxT_UxrXZ9tiH0BDS4CcQTPLPco-a5Z?usp=sharing",
  },
  {
    title: "Tip Calculator",
    description:
      "A Frontend Mentor challenge to build a tip calculator web application and get it functioning and looking as expected.",
    link: "https://tesla-ambassador.github.io/tip-calculator",
  },
  {
    title: "Space Tourism",
    description:
      "A Frontend Mentor challenge to build out a multi-page space tourism website and get it looking as close to the design as possible.",
    link: "https://space-tourism-xi-nine.vercel.app",
  },
  {
    title: "Sentiment Analysis model",
    description:
      "This is a machine learning model I created when learning Natural Language Processing. It takes in tweets and provides the sentiment potrayed in the tweets.",
    link: "https://colab.research.google.com/drive/1tz4-LXUYeXpdUFZ4bFYtPZW1422owhIr?usp=sharing",
  },

  {
    title: "Loopstudios landing page",
    description:
      "This is among the first pages I created from the Frontend Mentor challenges back when I was beginning my journey in web development.",
    link: "https://tesla-ambassador.github.io/Loopstudios-landing-page/",
  },
];
