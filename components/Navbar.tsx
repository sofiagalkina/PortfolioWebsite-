import { Socials } from '@/constants';
import Image from "next/image";
import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5">
            <h1 className='text-white text-[45px]'> 
                Sofia <span className='font-thin'>Galkina</span>
                <span className='text-red-500'>.</span>
            </h1>
            <div className="flex flex-row gap-5">
                {Socials.map((social) => (
                    <a 
                        key={social.name}
                        href={social.url} // Link to the social media profile
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security best practices
                        className="flex items-center justify-center w-8 h-8" // Center the icon
                    >
                        <Image 
                            src={social.src}
                            alt={social.name}
                            width={24}
                            height={24}
                            className="transition-transform duration-300 ease-in-out hover:scale-150" // Add hover effect
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
