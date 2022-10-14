import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function TimelineSection({}: Props) {
  return (
    <div id="timeline-section" className="bg-my-lightblue snap-center">
      <motion.div
        initial={{
          y: -20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="sm:max-h-screen max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-lightblue "
      >
        <h1 className="mb-10 text-4xl underline font-extrabold">Timeline</h1>
        <ul className="p-10 shadow-xl shadow-blue-300/40 text-left leading-8  lg:text-xl lg:leading-loose bg-my-white sm:overflow-y-scroll sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-300">

        <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://markdown-previewer-henna.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Markdown Previewer&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://www.freecodecamp.org/learn/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              freeCodeCamp.org
            </a>
          </li>

        <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://javascript-calculator-azure.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;JavaScript Calculator&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://www.freecodecamp.org/learn/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              freeCodeCamp.org
            </a>
          </li>

          <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://random-quote-machine-lovat.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Random Quote Machine&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://www.freecodecamp.org/learn/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              freeCodeCamp.org
            </a>
          </li>

          <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://github.com/Tatyy555/tracker-leads"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Tracker Leads&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://scrimba.com/learn/learnjavascript"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              scrimba by Per Harald Borgen
            </a>
          </li>

          <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://unit-conversion-psi.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Unit Convertor&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://scrimba.com/learn/learnjavascript"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              scrimba by Per Harald Borgen
            </a>
          </li>

          <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://password-generator-mu-steel.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Password Generator&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://scrimba.com/learn/learnjavascript"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              scrimba by Per Harald Borgen
            </a>
          </li>

          <li>
            <strong>Oct 2022</strong> -{" "}
            <a
              href="https://my-nft-game-xfn6.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Web3 Game&quot;
            </a>{" "}
            (JavaScript & Solidity) with reference to the study material of{" "}
            <a
              href="https://www.unchain.tech/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              Unchain
            </a>
          </li>
          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://basketball-scoreboard-dj8a.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Bascketball Scoreboard&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://scrimba.com/learn/learnjavascript"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              scrimba by Per Harald Borgen
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://google-clone-omega-sandy.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Gooqle&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://www.youtube.com/watch?v=24xpTmaPOdY&t=2407s"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              the YouTube by Sonny Sangha
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://nft-collection-starter-project-chi-orcin.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;NFT Collection&quot;
            </a>{" "}
            (JavaScript & Solidity) with reference to the study material of{" "}
            <a
              href="https://www.unchain.tech/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              Unchain
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://twitter-clone-tatyy555.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Gwitter&quot;
            </a>{" "}
            (JavaScript & Sanity) with reference to{" "}
            <a
              href="https://www.youtube.com/watch?v=rCselwxbUgA"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              the YouTube by Sonny Sangha
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://nftdrop-challenge-flax.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;NFT Drop App&quot;
            </a>{" "}
            (JavaScript & thirdweb) with reference to{" "}
            <a
              href="https://www.youtube.com/watch?v=B1pnHVdnN64&list=PLf16UKl7nR5Avl7PYcU42nt1iz36lxLeU"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              the YouTube by Sonny Sangha
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://d-app-starter-project-phi-opal.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Web3 Wave App&quot;
            </a>{" "}
            (JavaScript & Solidity) with reference to the study material of{" "}
            <a
              href="https://www.unchain.tech/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              Unchain
            </a>
          </li>

          <li>
            <strong>Spt 2022</strong> -{" "}
            <a
              href="https://www.freecodecamp.org/certification/TATYY/responsive-web-design"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              Certificate for &quot;Responsive Web Design&quot;
            </a>{" "}
            from{" "}
            <a
              href="https://www.freecodecamp.org/learn/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              freeCodeCamp.org
            </a>
          </li>
          <li>
            <strong>Aug 2022</strong> -{" "}
            <a
              href="https://www.freecodecamp.org/certification/TATYY/javascript-algorithms-and-data-structures"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              Certificate for &quot;JavaScript Algorithms and Data
              Structure&quot;
            </a>{" "}
            from{" "}
            <a
              href="https://www.freecodecamp.org/learn/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              freeCodeCamp.org
            </a>
          </li>

          <li>
            <strong>Aug 2022</strong> -{" "}
            <a
              href="https://rpg-game-smoky.vercel.app/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;RPG Game&quot;
            </a>{" "}
            (JavaScript) with reference to{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLJ86MSrhnFKVcfaffKPYkvfkPg4qRsijs"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              the YouTube by T.Umezawa
            </a>
          </li>

          <li>
            <span className="font-bold">Aug 2022</span> -{" "}
            <a
              href="https://github.com/Tatyy555/first_project"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;News Log App&quot;
            </a>{" "}
            (flutter) with reference to{" "}
            <a
              href="https://www.flutter-study.dev/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              this website
            </a>
          </li>

          <li>
            <span className="font-bold">Aug 2022</span> -{" "}
            <a
              href="https://github.com/Tatyy555/auto-trading-system"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Auto Trading System&quot;
            </a>{" "}
            (Python) with reference to{" "}
            <a
              href="https://tech-diary.net/python-bitcoin-intro/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              this website by hayatasu
            </a>
          </li>

          <li>
            <span className="font-bold">Jul 2022</span> -{" "}
            <a
              href="https://github.com/Tatyy555/word-cloud"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              &quot;Word Cloud Maker&quot;
            </a>{" "}
            (Python) with reference to{" "}
            <a
              href="https://resanaplaza.com/2022/05/21/%E3%80%90%E5%AE%9F%E8%B7%B5%E3%80%91python%E3%81%A7wordcloud%EF%BC%88%E3%83%AF%E3%83%BC%E3%83%89%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%EF%BC%89%E3%81%97%E3%82%88%E3%81%86%E3%81%9C%EF%BC%81/"
              className="underline hover:text-my-yellow hover:duration-300"
            >
              this website
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
