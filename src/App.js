import './App.css';
import wordCloud from './images/word-cloud-maker.png';
import autoTradingSystem from './images/auto-trading-system.png'
import rpgGame from './images/rpg-game.png'
import web3Wave from './images/web3-wave-app.png'
import nftDrop from './images/nft-drop.png'
import newsApp from './images/news-app.png'

function App() {
  return (
    <div className="text-my-black">
      {/* ---Header--- */}
      <header>
        <nav className="flex justify-end fixed top-0 left-0 w-full bg-my-lightblue border-b-4 border-my-black">
          <ul className="flex mr-4 text-xl md:text-2xl">
            <a href="#welcome-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl">
                Welcome
              </li>
            </a>
            <a href="#timeline-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl">
                Timeline
              </li>
            </a>
            <a href="#project-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl">
                Work
              </li>
            </a>
            <a href="#contact-section">
              <li className="p-4 hover:bg-my-skyblue rounded-3xl">
                Contact  
              </li>
            </a>
          </ul>
        </nav>
      </header>
      {/* ---Header--- */}
      
      {/* ---Welcome Section--- */}
      <div id="welcome-section" className="flex flex-col text-center h-screen bg-mine justify-center">
        <h1 className="text-white font-bold text-5xl lg:text-7xl font-Arial leading-relaxed lg:pb-8 lg:leading-loose">
          Nice to meet you! 
          <br />I'm Tatsuya Yamaguchi.
        </h1>
        <p className="text-yellow-400 text-3xl italic lg:text-5xl font-bold font-Arial mt-2">
          a web developer
        </p>
      </div>
      {/* ---Welcome Section--- */}

      {/* Timeline Section */}
      <div id="timeline-section" className="bg-my-lightblue">
        <div className="max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-lightblue">
          <h1 className="mb-10 text-4xl underline font-extrabold">
            Timeline
          </h1>
          <ul className="p-10 shadow-xl shadow-blue-300/40 text-left leading-8  lg:text-xl lg:leading-loose bg-my-white">
            <li>
              <span className="font-bold">
                Jul 2022
              </span>
              {" "}-{" "}
              <a href="https://github.com/Tatyy555/word-cloud" className="underline hover:text-my-yellow hover:duration-300">
                "Word Cloud Maker"
              </a>
              {" "}(Python) with reference to{" "}
              <a href="https://resanaplaza.com/2022/05/21/%E3%80%90%E5%AE%9F%E8%B7%B5%E3%80%91python%E3%81%A7wordcloud%EF%BC%88%E3%83%AF%E3%83%BC%E3%83%89%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%EF%BC%89%E3%81%97%E3%82%88%E3%81%86%E3%81%9C%EF%BC%81/" className="underline hover:text-my-yellow hover:duration-300">
                this website
              </a>
            </li>
            <li>
              <span className="font-bold">
                Aug 2022
              </span>
              {" "}-{" "}
              <a href="https://github.com/Tatyy555/auto-trading-system" className="underline hover:text-my-yellow hover:duration-300">
                "Auto Trading System"
              </a>
              {" "}(Python) with reference to{" "}
              <a href="https://tech-diary.net/python-bitcoin-intro/" className="underline hover:text-my-yellow hover:duration-300">
                this website by hayatasu
              </a>
            </li>
            <li>
              <span className="font-bold">
                Aug 2022
              </span>
                {" "}-{" "}
              <a href="https://github.com/Tatyy555/first_project" className="underline hover:text-my-yellow hover:duration-300">
                "News Log App"
              </a>
              {" "}(flutter) with reference to{" "} 
              <a href="https://www.flutter-study.dev/" className="underline hover:text-my-yellow hover:duration-300">
                this website
              </a>
            </li>
            <li>
              <strong>
                Aug 2022
              </strong>
              {" "}-{" "}
              <a href="https://rpg-game-smoky.vercel.app/" className="underline hover:text-my-yellow hover:duration-300">
                "RPG Game"
              </a>
              {" "}(JavaScript) with reference to{" "}
              <a href="https://www.youtube.com/playlist?list=PLJ86MSrhnFKVcfaffKPYkvfkPg4qRsijs" className="underline hover:text-my-yellow hover:duration-300">
                the youtube by T.Umezawa
              </a>
            </li>
            <li>
              <strong>
                Aug 2022
              </strong> 
              {" "}-{" "}
              <a href="https://www.freecodecamp.org/certification/TATYY/javascript-algorithms-and-data-structures" className="underline hover:text-my-yellow hover:duration-300">
                Certificate for "JavaScript Algorithms and Data Structure"
              </a>
              {" "}from{" "}
              <a href="https://www.freecodecamp.org/learn/" className="underline hover:text-my-yellow hover:duration-300">
                freeCodeCamp.org
              </a>
            </li>
            <li>
              <strong>
                Spt 2022
              </strong> 
              {" "}-{" "}
              <a href="https://www.freecodecamp.org/certification/TATYY/responsive-web-design" className="underline hover:text-my-yellow hover:duration-300">
                Certificate for "Responsive Web Design"
              </a>
              {" "}from{" "}
              <a href="https://www.freecodecamp.org/learn/" className="underline hover:text-my-yellow hover:duration-300">
                freeCodeCamp.org
              </a>
            </li>
            <li>
              <strong>
                Spt 2022
              </strong>
              {" "}-{" "}
              <a href="https://d-app-starter-project-phi-opal.vercel.app/" className="underline hover:text-my-yellow hover:duration-300">
                Web3 Wave App
              </a>
              {" "}(JavaScript) with reference to the study material of{" "} 
              <a href="https://www.unchain.tech/" className="underline hover:text-my-yellow hover:duration-300">
                Unchain
              </a> 
            </li>
            <li>
              <strong>
                Spt 2022
              </strong>
              {" "}-{" "}
              <a href="https://nftdrop-challenge-flax.vercel.app/" className="underline hover:text-my-yellow hover:duration-300">
                NFT Drop App
              </a>
              {" "}(JavaScript) with reference to{" "} 
              <a href="https://www.youtube.com/watch?v=B1pnHVdnN64&list=PLf16UKl7nR5Avl7PYcU42nt1iz36lxLeU" className="underline hover:text-my-yellow hover:duration-300">
                YouTube by Sonny Sangha
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Timeline Section */}

      {/* ---Project Section--- */}
      <div id="project-section" className="max-w-7xl mx-auto flex-col min-h-screen flex py-20 px-10 2xl:px-0 bg-my-white">

        <h1 className="mb-10 text-4xl underline font-extrabold">
          Some of My Works
        </h1>

        <div className="bg-slate-100 p-10 shadow-xl shadow-blue-300/40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl::grid-cols-4">
            <a href="https://github.com/Tatyy555/word-cloud" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={wordCloud} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Word Cloud Maker</h2>
                  <p className="mt-2 text-sm">A code for generating a word cloud from txt</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/Tatyy555/auto-trading-system" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={autoTradingSystem} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Auto Trading System</h2>
                  <p className="mt-2 text-sm">A system for auto trading using python and Coincheck</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/Tatyy555/first_project" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={newsApp} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">News Log App</h2>
                  <p className="mt-2 text-sm">An iOS app for logging your own news</p>
                </div>
              </div>
            </a>

            <a href="https://rpg-game-smoky.vercel.app/" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={rpgGame} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">RPG Game</h2>
                  <p className="mt-2 text-sm">2D RPG Game</p>
                </div>
              </div>
            </a>

            <a href="https://d-app-starter-project-phi-opal.vercel.app/" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={web3Wave} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">Web3 Wave App</h2>
                  <p className="mt-2 text-sm">Web3 App for waving with message using Rinkeby Testnet</p>
                </div>
              </div>
            </a>

            <a href="https://nftdrop-challenge-flax.vercel.app/" target="_blank"  rel="noopener noreferrer">
              <div className="flex flex-col cursor-pointer items-center transition-all duration-200 hover:scale-105">
                <div className="rounded-xl bg-mine p-2">
                  <img className="h-60 w-60 rounded-2xl object-cover" src={nftDrop} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="text-3xl">NFT Drop App</h2>
                  <p className="mt-2 text-sm">NFT drop of super creatures using Goerli Testnet</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      {/* ---Project Section--- */}

      {/* ---Contact Section--- */}
      <div id="contact-section" className="flex flex-col text-center h-contact bg-my-lightblue justify-center">
        <h2 className="text-2xl lg:text-4xl lg:mb-5 pb-3 lg:pb-5 px-6">
          Please check the followings if you'd like to know more...
        </h2>
        <div className="flex justify-center">
          <a href="https://github.com/Tatyy555" target="_blank"  rel="noopener noreferrer">
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              GitHub
            </p>
          </a>
          <a href="https://www.kaggle.com/tatyy555" target="_blank"  rel="noopener noreferrer">
            <p className="font-extrabold underline px-2 text-3xl lg:text-5xl hover:text-my-yellow hover:translate-y-2 hover:duration-300">
              Kaggle
            </p>
          </a>
        </div>
      </div>
      {/* ---Contact Section--- */}

      {/* ---Footer Section--- */}
      <footer className="flex h-footer bg-my-black text-my-white justify-around items-center lg:text-2xl border-t-4 border-my-yellow">
        <p>
          Thank you for vising.
        </p>
        <p>
          Created by Yamaguchi
        </p>
      </footer>
      {/* ---Footer Section--- */}


    </div>
  );
}

export default App;
