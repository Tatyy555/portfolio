import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ContactSction from "../components/ContactSction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import TimelineSection from "../components/TimelineSection";
import WelcomeSection from "../components/WelcomeSection";
import { Project, Skill } from "../typing";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkill";

type Props = {
  skills: Skill[],
  projects: Project[],
}


const Home = ({projects, skills} : Props) => {
  return (
    <div className=" h-screen text-my-black  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-30">
    {/* // <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> */}
      <Head>
        <title>Portfolio 2.0</title>
      </Head>

      {/* ---Header--- */}
      <Header />

      {/* ---Welcome Section--- */}
      <WelcomeSection skills={skills}/>

      {/* Timeline Section */}
      <TimelineSection />

      {/* ---Project Section--- */}
      <ProjectSection projects={projects}/>

      {/* ---Contact Section--- */}
      <ContactSction />
      
      {/* ---Footer Section--- */}
      <Footer />

    </div>
  );
};

export default Home;


export const getStaticProps:GetStaticProps<Props> = async () =>{
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      skills,
      projects,
    },
    revalidate: 10,
  };
}


