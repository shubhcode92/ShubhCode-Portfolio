import React from 'react';
import Link from 'next/link';
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";


interface ContactProps {
  color: string;
  loc: string;
}

const Contact: React.FC<ContactProps> = ({ color, loc }) => {
  return (
    <>
      <div id={loc} className={` bg-[#FFFFFF] text-center`}>
        <div className='mx-10 flex flex-col justify-start items-center py-20'>
          <div className='text-[#147EFB] font-bold text-lg'>CONTACT</div>
          <div className='my-3 font-extrabold text-2xl'>Don't be shy! Hit me up! 👇</div>
          <div className='my-6 flex flex-col justify-start items-center'>
            <GrLocation className='text-[#147EFB]' size={28}/>
            <h3 className='my-1 font-bold text-lg'>Location</h3>
            <p className=' text-gray-500 text-xl cursor-pointer hover:text-blue-500 hover:transition hover:delay-120'>Bhopal, India</p>
          </div>
          <div className='my-6 flex flex-col justify-start items-center'>
            <MdOutlineEmail className='text-[#147EFB]' size={28}/>
            <h3 className='my-1 font-bold text-lg'>Mail</h3>
            <Link href={"mailto:shubhamsahu9290@gmail.com"} className='text-gray-500 text-xl cursor-pointer hover:text-blue-500 hover:transition hover:delay-120'>shubhamsahu9290@gmail.com</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact ;