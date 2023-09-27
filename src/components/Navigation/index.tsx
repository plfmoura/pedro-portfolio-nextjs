'use client'

import { MenuOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='flex justify-between px-2 mt-5'>
            <h3 className='font-bold'>pedro.dev</h3>
            <div className='relative'>
                <MenuOutlined onClick={() => setShowMenu(true)} />
                {
                    showMenu && (
                        <ul className='absolute top-0 right-0 p-4 flex flex-col gap-2 bg-slate-200'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}
