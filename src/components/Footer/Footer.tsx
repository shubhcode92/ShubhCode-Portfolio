import Link from 'next/link';
import React from 'react'
import { LuGithub } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
        <div className='bg-black text-white text-base font-bold'>
            <div className='lg:flex lg:justify-between lg:items-center justify-center text-center lg:justify-start lg:text-start py-14 mx-10 lg:py-12 lg:px-60 lg:flex lg:space-x-10'>
                <h2 className='lg:flex lg:justify-center lg:items-center'>Copyright © {year} ShubhCode. All rights are reserved.</h2>
                <div className='my-5'>
                    <span className="flex items-center justify-center space-x-4">
                        <Link href={"https://www.linkedin.com/in/shubhcode92/"} passHref><LiaLinkedin size={36} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
                        <Link href={"https://github.com/shubhcode92"} passHref><LuGithub size={30} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
                        <Link href={"https://leetcode.com/u/shubhcode92/"} passHref><SiLeetcode size={28} className='hover:text-blue-500 hover:transition hover:delay-120' /></Link>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer