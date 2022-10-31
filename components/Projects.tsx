import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto z-0 '>
      <h3 className='absolute top-24 text-2xl uppercase text-gray-500 tracking-[20px]'>
        Projects
      </h3>
      <div className='relative flex snap-x snap-mandatory overflow-y-hidden overflow-x-scroll z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {projects?.map((project, i) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex items-center flex-col space-y-5 justify-center p-20 md:p-44 h-screen '
            key={i}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt='project image'
              className=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/10'>
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <a href={project?.linkToBuild} target='_blank' rel='noreferrer'>
                  {project?.title}{" "}
                </a>
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt={technology.title}
                    className='h-10 w-10 rounded-full object-cover'
                  />
                ))}
              </div>
              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </div>
  );
}

export default Projects;
