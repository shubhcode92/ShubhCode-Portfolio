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
        <div className='py-20 flex flex-col justify-center items-center mx-10'>
          <Image className='rounded-2xl' src="/laptopImage.webp" alt="Laptop Image" width={500} height={500}/>
          <div className='text-center'>
            <div className='pt-10 text-blue-600 font-extrabold text-lg'>ABOUT ME</div>
            <div className='pt-4 text-3xl font-bold'>Software Developer based in Bhopal, India📍</div>
            <p className='pt-5 text-gray-500'>Hey, my name is Shubham Sahu, and I'm a Software Developer. My passion is to create and develop a good software for my users. <br /> <br />My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About ;