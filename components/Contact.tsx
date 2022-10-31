import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase text-2xl tracking-[20px] text-gray-500 '>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 mt-20'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='underline decoration-[#F7AB0A]/20'>Lets Talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A]/20 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+923472923515</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A]/20 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>wajahatabbas27@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A]/20 h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 Developer Lane</p>
          </div>
        </div>

        {/*Implemented the form on getForm.io by providing Action and Method*/}
        {/* Created the account on the console of getform.io and by doing this we get the link that we provide in the action inside the attribute of the form */}
        <form
          className='flex flex-col space-y-2 w-fit mx-auto'
          action='https://getform.io/f/1146fe34-ad2a-4a5f-9159-9b5c1b5a3f4a'
          method='POST'
        >
          <div className='flex space-x-2'>
            <input
              placeholder='Name'
              className='contactInput'
              type='text'
              name='name'
            />
            <input
              placeholder='Email'
              className='contactInput'
              type='email'
              name='email'
            />
          </div>
          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            name='subject'
          />
          <textarea
            className='contactInput'
            placeholder='Message'
            name='Message'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] text-black font-bold rounded-md py-5 px-10'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
