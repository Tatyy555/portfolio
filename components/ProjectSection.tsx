import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function ProjectSection({}: Props) {
  return (
    <div
      id="project-section"
      className="max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-white"
    >
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
      >
        <h1 className="mb-10 text-4xl underline font-extrabold">
          Library of My Works
        </h1>

        <div className="bg-slate-100 p-10 shadow-xl shadow-blue-300/40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl::grid-cols-4">
            <a
              href="https://google-clone-omega-sandy.vercel.app/"
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
                    Google-clone using JavaScript (It shows &quot;Google&quot;
                    for the result of search engine so as to reduce the cost
                    currently)
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
      </motion.div>
    </div>
  );
}
