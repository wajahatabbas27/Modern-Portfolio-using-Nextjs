import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "../typings";

type Props = {
  experiences: Experiences[];
};

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]'>
        Experience
      </h3>
      <div className='w-full  flex snap-x snap-mandatory space-x-5 overflow-x-scroll mt-32 md:pt-32 xl:pt-32 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
