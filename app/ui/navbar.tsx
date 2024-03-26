'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

const menu = [
    { name: 'Home', url: '\\' },
    { name: 'Help', url: '\help' },
];

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleMenu}
                className="border p-1 m-2 md:hidden"
            >
                <Bars3Icon className="h-[32px] w-[32px]" />
            </button>            
            <nav className="flex flex-row">
                <div className={(!isOpen && "hidden") + " fixed inset-0 flex bg-gray-900/80"}></div>    
                <ul
                    className={(!isOpen ? "hidden md:flex w-0" : "w-3/4 ") + " md:w-auto fixed top-0 bottom-0 left-0 md:relative gap-5 bg-white justify-center"}
                >
                    {menu.map((item, index) => (
                        <a
                            href={item.url}
                            key={index}
                            className={(isOpen && "w-100 p-2") + " flex items-center hover:underline underline-offset-4"}
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>
            </nav>
        </>
    )
}