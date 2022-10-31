import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='flex flex-col h-screen relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px] '>
        About
      </h3>
      <motion.img
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt='my image'
        className='w-56 h-56 rounded-full flex-shrink-0 object-cover object-center mt-32 md:mt-20 md:rounded-lg md:w-64 md:h-[510px] xl:w-[500px] xl:h-[600px] xl:mt-64'
      />
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className='space-y-10 px:0 md:px-10 md:mt-20'
      >
        <h4 className='uppercase text-4xl font-semibold sm:mt-0 lg:mt-8 xl:mt-20'>
          Here is a{" "}
          <span className='underline decoration-yellow-200'>little</span>{" "}
          Background
        </h4>
        <p className='text-xs xl:text-sm'>
         {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default About;
