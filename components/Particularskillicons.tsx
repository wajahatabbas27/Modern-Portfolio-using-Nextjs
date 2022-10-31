import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Particularskillicons({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        className='w-24 h-24 object-cover rounded-full border border-gray-500 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:h-32 xl:w-32 rounded-full'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black'>{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Particularskillicons;
