import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

interface LandingPageProps {
  color: string;
  loc: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ color, loc }) => {
  return (
    <div id={loc} className={`bg-[#F9F9F9]`}>
      <div className="pt-6 pb-1 mx-10 lg:px-60 lg:pt-20">
        <div className='lg:flex lg:space-x-32'>
          <div className="h-[310px] relative flex justify-center items-center">
            <div className="h-[300px] w-[300px] relative rounded-full overflow-hidden border-black bubble-animation">
              <Image
                src="/shubh_photo1.jpg"
                alt="shubhcode92"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div>
            <div className='my-5 text-[#2D2E32] text-center text-[30px] font-bold font-sans leading-tight flex items-center justify-center flex-wrap lg:flex-nowrap lg:text-[50px] lg:text-start'>
              <h1> Full-Stack Software Developer 👋</h1>
            </div>
            <div>
              <p className='my-5 text-center text-gray-600 text-lg lg:text-start'>Hi, I'm Shubham Sahu. A passionate Full-Stack Software Developer based in Bhopal, India.📍</p>
            </div>
            <div className='mt-8'>
              <span className="flex items-center justify-center space-x-4 lg:justify-start">
                <Link href={"https://www.linkedin.com/in/shubhcode92/"} passHref><LiaLinkedin size={36} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
                <Link href={"https://github.com/shubhcode92"} passHref><LuGithub size={30} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
                <Link href={"https://leetcode.com/u/shubhcode92/"} passHref><SiLeetcode size={28} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
              </span>
            </div>
          </div>
        </div>
        <div className='lg:flex lg:items-center lg:my-20'>
          <div className='flex flex-col items-center mt-20 lg:mb-10 lg:mt-12 lg:mr-16'>
            <h3 className='font-semibold text-black text-lg lg:font-bold lg:text-xl' >Tech Stack</h3>
            <div className='border-black border-[1px] w-24 mt-2 lg:w-28'></div>
          </div>
          <div className="flex mt-12 mb-28 items-center justify-center lg:mb-10 lg:mt-12">
            <div className="grid grid-cols-5 gap-x-12 gap-y-7 lg:flex lg:flex-wrap lg:justify-center">
              {[
                "/html-icon.svg",
                "/css-icon.svg",
                "/javascript-icon.svg",
                "/tailwind-css-icon.svg",
                "/react-js-icon.svg",
                "/nextjs-icon.svg",
                "/mongodb-icon.svg",
                "/html-icon.svg",
                "/node-js-icon.svg",
                "/java-icon.svg",
              ].map((src, index) => (
                <div key={index} className="h-10 w-10 lg:h-10 lg:w-8 relative cursor-pointer transform transition-transform duration-500 hover:-translate-y-3">
                  <Image src={src} alt="shubhcode92" layout="fill" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
