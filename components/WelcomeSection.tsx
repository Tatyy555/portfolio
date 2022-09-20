import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

type Props = {};

export default function WelcomeSection({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Nice to meet you!",
      "I'm Tatsuya Yamaguchi",
      "Guy-who-loves-Manga.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      id="welcome-section"
      className="flex flex-col text-center h-screen bg-mine justify-center w-screen"
    >
      <BackgroundCircle />
      <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Arial leading-relaxed lg:pb-8 lg:leading-loose z-20">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
      <p className="text-yellow-400 text-3xl italic lg:text-5xl font-bold font-Arial mt-2 z-20">
        a web developer
      </p>
    </div>
  );
}
