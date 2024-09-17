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
      <div id={loc} className={` bg-[#FFFFFF] text-center lg:text-start`}>
        <div className='flex flex-col justify-start items-center lg:place-items-start py-20 mx-10 lg:py-28 lg:px-60'>
          <div>
            <div className='text-[#147EFB] font-bold text-lg'>CONTACT</div>
            <div className='my-3 font-extrabold text-2xl'>Don't be shy! Hit me up! 👇</div>
          </div>
          <div className='lg:flex lg:space-x-10 lg:mt-6'>
            <div className='my-6 flex flex-col lg:flex-row justify-start items-center lg:space-x-5'>
              <div>
                <GrLocation className='text-[#147EFB]' size={28}/>
              </div>
              <div>
                <h3 className='my-1 font-bold text-lg'>Location</h3>
                <p className=' text-gray-500 text-xl cursor-pointer hover:text-blue-500 hover:transition hover:delay-120'>Bhopal, India</p>
              </div>
            </div>
            <div className='my-6 flex flex-col lg:flex-row justify-start items-center lg:space-x-5'>
              <div>
                <MdOutlineEmail className='text-[#147EFB]' size={28}/>
              </div>
              <div>
                <h3 className='my-1 font-bold text-lg'>Mail</h3>
                <Link href={"mailto:shubhamsahu9290@gmail.com"} className='text-gray-500 text-xl cursor-pointer hover:text-blue-500 hover:transition hover:delay-120'>shubhamsahu9290@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact ;