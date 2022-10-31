import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { motion } from "framer-motion";
import { Experiences, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";

// type for static side props
// Inside of here we will be having all the types of the functions that we will be going to use here all the way!
type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

// Destructuring the props that are coming all the way
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} Portfolio</title>
      </Head>

      <Header socials={socials} />
      {/* Hero */}
      <section id='hero' className='snap-start '>
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start overflow-x-hidden'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      {/* Footer icon to take us to the top */}
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <motion.div
            initial={{ opacity: 0, x: -800 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className='flex items-center justify-center'
          >
            <img
              src='http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmypic.4f7315fd.png&w=128&q=75'
              alt='footer image'
              className='w-10 h-10 rounded-full grayscale hover:grayscale-0'
            />
          </motion.div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// Using Static Page Regenerations - getStaticProps
// Props are the types we have to define on the Top that we are using here all the way!
export const getStaticProps: GetStaticProps<Props> = async () => {
  // Fetching the utility functions here that we have created
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experiences[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  // return the props is necessary this will be passed in the page that we needed and we require all the way!
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Nextjs will attempt to re-generate the page;
    // -- When the request comes in
    // -- At most every 10 seconds
    revalidate: 10,
  };
};
