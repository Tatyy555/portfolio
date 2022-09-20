import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  HomeIcon,
  ClockIcon,
  BuildingLibraryIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <div className="text-my-black">
      {/* ---Header--- */}
      <header>
        <nav className="flex fixed top-0 left-0 justify-evenly w-full bg-my-lightblue border-b-4 border-my-yellow md:justify-end z-20">
          <ul className="flex text-2xl">
            <a href="#welcome-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <HomeIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Welcome</p>
              </li>
            </a>
            <a href="#timeline-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <ClockIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Timeline</p>
              </li>
            </a>
            <a href="#project-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <BuildingLibraryIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Libraries</p>
              </li>
            </a>
            <a href="#contact-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl flex items-center space-x-2">
                <ChatBubbleLeftRightIcon className="h-7 w-7" />
                <p className="hidden md:inline-flex">Contact </p>
              </li>
            </a>
          </ul>
        </nav>
      </header>
      {/* ---Header--- */}

      {/* ---Welcome Section--- */}
      <div
        id="welcome-section"
        className="flex flex-col text-center h-screen bg-mine justify-center"
      >
        <h1 className="text-white font-bold text-5xl lg:text-7xl font-Arial leading-relaxed lg:pb-8 lg:leading-loose">
          Nice to meet you!
          <br />
          I&apos;m Tatsuya Yamaguchi.
        </h1>
        <p className="text-yellow-400 text-3xl italic lg:text-5xl font-bold font-Arial mt-2">
          a web developer
        </p>
      </div>
      {/* ---Welcome Section--- */}

      {/* Timeline Section */}
      <div id="timeline-section" className="bg-my-lightblue">
        <div className="max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-lightblue">
          <h1 className="mb-10 text-4xl underline font-extrabold">Timeline</h1>
          <ul className="p-10 shadow-xl shadow-blue-300/40 text-left leading-8  lg:text-xl lg:leading-loose bg-my-white">
            <li>
              <strong>Spt 2022</strong> -{" "}
              <a
                href="https://google-clone-tatyy555.vercel.app/"
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
              (JavaScript) with reference to the study material of{" "}
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
              (JavaScript) with reference to{" "}
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
              (JavaScript) with reference to{" "}
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
              (JavaScript) with reference to the study material of{" "}
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
                Certificate for &quot;JavaScript Algorithms and Data Structure&quot;
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
        </div>
      </div>
      {/* Timeline Section */}

      {/* ---Project Section--- */}
      <div
        id="project-section"
        className="max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-white"
      >
        <h1 className="mb-10 text-4xl underline font-extrabold">
          Library of My Works
        </h1>

        <div className="bg-slate-100 p-10 shadow-xl shadow-blue-300/40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl::grid-cols-4">
            <a
              href="https://google-clone-tatyy555.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/google-clone.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Gooqle</h2>
                  <p className="mt-2 text-sm">
                    Google-clone using JavaScript (It shows &quot;Google&quot; for the
                    result of search engine so as to reduce the cost currently)
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://nft-collection-starter-project-chi-orcin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/web3-nft-collection.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">NFT Collection</h2>
                  <p className="mt-2 text-sm">
                    Web3 App for getting an orginal NFT with three words of
                    vehicle using Goerli Testnet
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://twitter-clone-tatyy555.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    src="/images/gwitter.png"
                    className="h-60 w-60 rounded-2xl object-cover"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Gwitter</h2>
                  <p className="mt-2 text-sm">
                    Twitter-Clone with Green Color using JavaScript (First, sign
                    in with Google Account)
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://nftdrop-challenge-flax.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/nft-drop.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">NFT Drop App</h2>
                  <p className="mt-2 text-sm">
                    NFT drop of super creatures using Goerli Testnet
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://d-app-starter-project-phi-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/web3-wave-app.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Web3 Wave App</h2>
                  <p className="mt-2 text-sm">
                    Web3 App for waving with message using Rinkeby Testnet
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://rpg-game-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/rpg-game.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">RPG Game</h2>
                  <p className="mt-2 text-sm">
                    2D RPG Game using JavaScript (within 10 min to complete)
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Tatyy555/first_project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/news-app.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">News Log App</h2>
                  <p className="mt-2 text-sm">
                    An iOS app for logging your own news using Flutter
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Tatyy555/auto-trading-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/auto-trading-system.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Auto Trading System</h2>
                  <p className="mt-2 text-sm">
                    A system for auto trading using Python and Coincheck
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/Tatyy555/word-cloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <Image
                    className="h-60 w-60 rounded-2xl object-cover"
                    src="/images/word-cloud-maker.png"
                    alt=""
                    height={200}
                    width={200}
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Word Cloud Maker</h2>
                  <p className="mt-2 text-sm">
                    An App for generating a word-cloud from txt using Python
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ---Project Section--- */}

      {/* ---Contact Section--- */}
      <div
        id="contact-section"
        className="flex flex-col text-center h-contact bg-my-lightblue justify-center"
      >
        <h2 className="text-2xl lg:text-4xl lg:mb-5 pb-3 lg:pb-5 px-6">
          Please check the followings if you&apos;d like to know more...
        </h2>
        <div className="flex justify-center">
          <a
            href="https://github.com/Tatyy555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              GitHub
            </p>
          </a>
          <a
            href="https://www.kaggle.com/tatyy555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              Kaggle
            </p>
          </a>
        </div>
      </div>
      {/* ---Contact Section--- */}

      {/* ---Footer Section--- */}
      <footer className="flex h-footer bg-my-black text-my-white justify-around items-center lg:text-2xl border-t-4 border-my-yellow">
        <p>Thank you for vising.</p>
        <p>Created by Yamaguchi</p>
      </footer>
      {/* ---Footer Section--- */}
    </div>
  );
};

export default Home;
