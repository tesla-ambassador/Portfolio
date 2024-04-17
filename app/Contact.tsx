import { X, Telegram, Instagram } from "@mui/icons-material";
const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function ContactMe() {
  return (
    <div
      id="contact"
      className="bg-white dark:bg-slate-900 py-24 md:py-20 w-full flex items-center"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-black text-center">
          <h2 className="font-bold text-4xl dark:text-white">Get in Touch</h2>
          <p className="dark:text-gray-500 mt-3">
            Hey there! If you're into disrupting industries, exploring the next
            frontier, or just want to bounce around some big ideas, I'm your
            guy. Feel free to reach out
            <span className="text-indigo-500">
              <a href="mailto:kevindan641@gmail.com"> via email </a>
            </span>
            or ping me on my socials. Let's innovate, collaborate, and make some
            magic happen!
          </p>
          <div className="flex gap-3 items-center justify-center mt-6 dark:text-gray-500">
            <a href="https://twitter.com/home">
              <X />
            </a>
            <a href="https://www.instagram.com/kevin_mbawalla/">
              <Instagram />
            </a>
            <a href="https://t.me/share/url?url={@kevinmbawalla}">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
