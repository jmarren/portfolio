import { Sniglet } from 'next/font/google';
import React, { FC } from 'react';
import Image from 'next/image'

interface NavbarProps {
  links: { name: string; url: string }[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
<div className="grid grid-rows-4 justify-start pl-[10%] pr-[10%] ml-5 top-0 ">
     {links.map((link, index) => (
          <button key={index} 
          style={{
            top: index * 2, 
            fontFamily: "Sniglet" 
          }} 
          className=" text-sm sm:text-lg col-span-full text-left rounded-md h-[6rem] w-[5rem] pr-40 text-barber-blue hover:text-[#1b6d8b]">
            <a href={link.url} 
            style={{ textDecoration: 'none' }}>
              {link.name}
            </a>
          </button>
        ))} 
                <div className=" flex justify-start items-center  col-span-full h-[6rem] w-[10rem]">
          <a href="https://github.com/jmarren">
            <Image
            className="justify-center" 
            style={{fill: '#1b6d8b'}} 
            src="/icons/github-mark.svg" 
            alt="github icon" 
            width={50} 
            height={50}/>
            </a>
            </div>
        </div>    

  );
};

export default Navbar;
