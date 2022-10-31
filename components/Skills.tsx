import React from "react";
import Particularskillicons from "./Particularskillicons";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 text-2xl uppercase text-gray-500 tracking-[20px]'>
        Skills
      </h3>
      <h3 className='absolute top-36  text-sm uppercase text-gray-500 tracking-[3px] '>
        Hover over a skill for current proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5 '>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Particularskillicons key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Particularskillicons key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
