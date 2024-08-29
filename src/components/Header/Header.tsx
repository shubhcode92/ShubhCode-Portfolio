'use client';

import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx"; 
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleSideBar = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <header className="h-[79.6px] w-full bg-[#FFFFFF] text-[17px] font-sans font-semibold shadow-lg sticky top-0 z-50">
                <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${toggle ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 z-40`}>
                    <div className="flex text-black place-content-between py-[25px] pl-[40px] pr-[50px]">
                        <div></div>
                        <div onClick={handleSideBar} className="cursor-pointer hover:text-blue-500 hover:transition hover:delay-120">
                            <RxCross2 size={32} />
                        </div>
                    </div>
                    <ul className="flex flex-col items-center mt-36 space-y-12 font-semibold text-2xl">
                        <Link href="#Home" passHref><li className="cursor-pointer hover:text-blue-500 hover:transition hover:delay-120" onClick={handleSideBar}>Home</li></Link>
                        <Link href="#About" passHref><li className="cursor-pointer hover:text-blue-500 hover:transition hover:delay-120" onClick={handleSideBar}>About</li></Link>
                        <Link href="#Projects" passHref><li className="cursor-pointer hover:text-blue-500 hover:transition hover:delay-120" onClick={handleSideBar}>Projects</li></Link>
                        <Link href="#Contact" passHref><li className="cursor-pointer hover:text-blue-500 hover:transition hover:delay-120" onClick={handleSideBar}>Contact</li></Link>
                    </ul>
                </div>
                <div className="flex text-black place-content-between py-[25px] pl-[45px] pr-[45px]">
                    <Link href={"#Home"}><div className="text-[#2D2E32] font-bold text-xl">ShubhCode</div></Link>
                    <div className="hidden lg:flex text-[#2D2E32] space-x-6">
                        <ul className="flex">
                            <Link href="#Home" passHref><li className="cursor-pointer">Home</li></Link>
                            <Link href="#About" passHref><li className="cursor-pointer">About</li></Link>
                            <Link href="#Projects" passHref><li className="cursor-pointer">Projects</li></Link>
                            <Link href="#Contact" passHref><li className="cursor-pointer">Contact</li></Link>
                        </ul>
                    </div>
                    <div className="lg:hidden cursor-pointer hover:text-blue-500 hover:transition hover:delay-120" onClick={handleSideBar}>
                        <FiAlignRight size={34} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
