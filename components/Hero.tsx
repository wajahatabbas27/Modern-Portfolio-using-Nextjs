import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import mypic from "../assets/images/mypic.png";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, cursor] = useTypewriter({
    words: [
      "Hi, The Name's S.Wajahat Abbas Z.",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeHere/>",
      "Modern FullStack/Serverless Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={mypic}
        width={128}
        height={128}
        alt='Wajahat Abbas'
        className='object-cover rounded-full relative mx-auto'
      />
      <div className='z-20'>
        <h2 className='text-gray-500 uppercase text-sm tracking-[15px] pb-2'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='yellow' />
        </h1>
        <div className="pt-5">
          <Link href="about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
