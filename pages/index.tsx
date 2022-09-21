import type { NextPage } from "next";
import Head from "next/head";
import ContactSction from "../components/ContactSction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import TimelineSection from "../components/TimelineSection";
import WelcomeSection from "../components/WelcomeSection";

const Home: NextPage = () => {
  return (
    <div className="text-my-black">
      <Head>
        <title>Portfolio 2.0</title>
      </Head>

      {/* ---Header--- */}
      <Header />

      {/* ---Welcome Section--- */}
      <WelcomeSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* ---Project Section--- */}
      <ProjectSection />

      {/* ---Contact Section--- */}
      <ContactSction />
      
      {/* ---Footer Section--- */}
      <Footer />

    </div>
  );
};

export default Home;
