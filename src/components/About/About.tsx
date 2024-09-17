import React from 'react';
import Image from 'next/image';

interface AboutProps {
  color: string;
  loc: string;
}

const About: React.FC<AboutProps> = ({ color, loc }) => {
  return (
    <>
      <div id={loc} className={`bg-[#FFFFFF]`}>
        <div className='flex flex-col lg:flex-row justify-center items-center py-20 mx-10 lg:px-60 lg:py-28 lg:space-x-14'>
          <Image className='rounded-2xl' src="/laptopImage.webp" alt="Laptop Image" width={500} height={500}/>
          <div className='text-center'>
            <div className='pt-10 lg:pt-0 text-blue-600 font-extrabold text-lg'>ABOUT ME</div>
            <div className='pt-4 text-[#2D2E32] text-[30px] font-bold font-sans leading-tight flex items-center justify-center flex-wrap sm:flex-nowrap'>Software Developer based in Bhopal, India📍</div>
            <p className='pt-5 text-gray-500'>Hey, my name is Shubham Sahu, and I'm a Software Developer. My passion is to create and develop a good software for my users. <br /> <br />My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About ;