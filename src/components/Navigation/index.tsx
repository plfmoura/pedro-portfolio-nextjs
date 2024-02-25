'use client'

import { MenuOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Navigation() {
    const router = useRouter();
    const t = useTranslations('nav')

    const [showMenu, setShowMenu] = useState(false);

    const MENU_OPTIONS = [
        { label: "home", route: "home" },
        { label: "about", route: "about" },
        { label: "experience", route: "experience" },
        { label: "skills", route: "skills" },
        { label: "contact", route: "contact" }
    ]
    const LOCALE_OPTIONS = [
        { label: "English", locale: 'en' },
        { label: "Português", locale: 'br' }
    ]

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
                <span className='text-gray-400'>dev</span>.pedro
            </motion.h3>
            <div className='relative cursor-pointer'>
                <MenuOutlined onClick={() => setShowMenu(true)} style={{ fontSize: 34 }} />
                {
                    showMenu && (
                        <ul className='absolute select-none cursor-default top-0 right-0 py-4 px-6 flex flex-col gap-2 bg-slate-200' onMouseLeave={() => setShowMenu(false)}>
                            {
                                MENU_OPTIONS.map((item, key) => (
                                    <li
                                        onClick={() => handleTargetClick(item.route)}
                                        className='hover:text-slate-500 capitalize cursor-pointer'
                                        key={key}
                                    >
                                        {t(item.label)}
                                    </li>
                                ))
                            }
                            <span className='my-2 text-slate-600'>{t('language')}</span>
                            {
                                LOCALE_OPTIONS.map((item, key) => (
                                    <li
                                        onClick={() => router.replace(`/${item.locale}`)}
                                        className='hover:text-blue-600 capitalize cursor-pointer'
                                        key={key}
                                    >
                                        {item.label}
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
            <li className='text-xl'>Experience</li>
            <li className='text-xl'>Contact</li>
        </ul>
    )
}
