import { Sniglet } from 'next/font/google';
import React, { FC } from 'react';

interface NavbarProps {
  links: { name: string; url: string }[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
<div className="grid grid-rows-4 justify-center pl-[10%] pr-[10%] relative top-0">
     {links.map((link, index) => (
          <button key={index} style={{top: index * 2, fontFamily: "Sniglet" }} className="bg-white col-span-full rounded-md h-[6rem] w-[10rem] text-barber-blue">
            <a href={link.url} style={{ textDecoration: 'none' }}>
              {link.name}
            </a>
          </button>
        ))} 
        </div>    

  );
};

export default Navbar;
