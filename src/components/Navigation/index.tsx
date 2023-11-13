'use client'

import { MenuOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

export function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    const MENU_OPTIONS = ['home', 'about', 'projects', 'contact']
    
    const handleTargetClick = (target: string) => {
        const targetElement = document.getElementById(target);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
    
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
    
            setShowMenu(false);
        }
    }

    return (
        <nav className='flex justify-between px-2 mt-5 sm:px-7 xl:max-w-[1280px] lg:mx-auto'>
            <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
                className='font-bold xs:text-2xl sm:text-3xl md:text-4xl'>
                <span className='text-gray-400'>pedro</span>.dev
            </motion.h3>
            <div className='relative cursor-pointer'>
                <MenuOutlined onClick={() => setShowMenu(true)} style={{ fontSize: 34 }} />
                {
                    showMenu && (
                        <ul className='absolute top-0 right-0 p-4 flex flex-col gap-2 bg-slate-200'>
                            {
                                MENU_OPTIONS.map((item, key) => (
                                    <li
                                        onClick={() => handleTargetClick(item)}
                                        className='hover:text-slate-500 capitalize'
                                        key={key}
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export function NavMiddle() {
    return (
        <ul className='flex justify-center gap-8'>
            <li className='text-xl'>About</li>
            <li className='text-xl'>Projects</li>
            <li className='text-xl'>Contact</li>
        </ul>
    )
}