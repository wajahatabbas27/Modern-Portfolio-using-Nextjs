import React from "react";
import { motion } from "framer-motion";
import { Experiences } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experiences;
};

// just creating the template for us here that is rough will be combining with the sanity io
function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col max-h-screen rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(experience?.companyImage).url()}
        alt='card company image'
        className='w-32 h-32 object-cover object-center rounded-full '
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>CEO & Founder of IZCLOUD</h4>
        <p className='text-2xl font-bold mt-1'>IZ CLOUD</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech used icons */}
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt='ts image icons'
              className='w-10 h-10 rounded-full object-cover object-center'
            />
          ))}
          {/* Tech used icons */}
        </div>
        <p className='uppercase py-5 text-gray-500'>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 pr-5'>
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
