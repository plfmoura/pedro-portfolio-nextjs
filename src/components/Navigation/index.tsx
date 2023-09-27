'use client'

import { MenuOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='flex justify-between px-2 mt-5 sm:px-7 xl:max-w-[1280px] lg:mx-auto'>
            <h3 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl'><span className='text-gray-400'>pedro</span>.dev</h3>
            <div className='relative'>
                <MenuOutlined onClick={() => setShowMenu(true)} style={{fontSize: 34}}/>
                {
                    showMenu && (
                        <ul className='absolute top-0 right-0 p-4 flex flex-col gap-2 bg-slate-200'>
                            <li><a href="#header">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}
