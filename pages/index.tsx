import type { GetStaticProps, NextPage } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import ContactSction from "../components/ContactSction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import TimelineSection from "../components/TimelineSection";
import WelcomeSection from "../components/WelcomeSection";
import { sanityClient } from "../sanity";
import { Project, Skill } from "../typing";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkill";

type Props = {
  skills: Skill[];
  projects: Project[];
};

const Home = ({ projects, skills }: Props) => {
  return (
    <div className=" h-screen text-my-black  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-30 sm:snap-mandatory sm:snap-y">
      {/* // <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> */}
      <Head>
        <title>Portfolio 2.0</title>
      </Head>

      {/* ---Header--- */}
      <Header />

      {/* ---Welcome Section--- */}
      <WelcomeSection skills={skills} />

      {/* ---Project Section--- */}
      <ProjectSection projects={projects} />

      {/* Timeline Section */}
      <TimelineSection />

      {/* ---Contact Section--- */}
      <ContactSction />

      {/* ---Footer Section--- */}
      <Footer />
    </div>
  );
};

export default Home;

// export const getStaticProps:GetStaticProps = async (context) =>{
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();

//   return {
//     props: {
//       skills,
//       projects,
//     },
//     revalidate: 10,
//   };
// }

// This function gets called at build time

const skillsQuery = groq`
  *[_type == "skill"]
`;

const projectsQuery = groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
`;

export async function getStaticProps() {
  const skills: Skill[] = await sanityClient.fetch(skillsQuery);
  const projects: Project[] = await sanityClient.fetch(projectsQuery);

  return {
    props: {
      skills,
      projects,
    },
    revalidate: 10,
  };
}
