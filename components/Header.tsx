import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start p-5 justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'
      >
        <SocialIcon
          url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          //   url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          //   url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/wajahat.abbas.7982'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0.5, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center cursor-pointer text-gray-300'
      >
        <SocialIcon network='email' bgColor='transparent' fgColor='gray' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
