'use client';

import React from 'react'
import Image from "next/image";
import pedro_image from '../../../public/pedro.png'
import Button from '../Button';
import { EastOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion'

export default function Article() {
    return (
        <motion.article 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="flex flex-col gap-5 mt-5">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-8 justify-between text-center md:text-left">
                <h2 className="text-5xl lg:text-6xl text-black font-bold">
                    <span className="text-gray-400">My Journey and Passion, </span>as a FrontEnd Developer
                </h2>
                <div className='flex flex-col gap-12'>
                    <p className="text-sm md:text-lg lg:text-xl text-black">
                        {ARTICLE_SUB}
                    </p>
                    <Button className='hidden md:block ml-auto' value="Let's Talk" variant="primary" type="button" icon={<EastOutlined />} />
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:mt-12 lg:gap-8 lg:flex-row">
                <Image src={pedro_image} alt="Pedro Moura - Frontend Developer" width={500} height={500} />
                <aside className='w-[100%] gap-8 flex flex-col'>
                    <p className='text-sm lg:text-lg lg:text-left'>
                        {ARTICLE_TEXT}
                    </p>
                    <div className="flex align-middle justify-between px-2 md:mt-8 lg:mt-12">
                        {
                            TECH_ICONS.map(icon => (
                                <Image 
                                key={icon.id} 
                                src={icon.svg} 
                                alt={icon.alt} 
                                className='w-2/12 object-contain' />
                            ))
                        }
                    </div>
                </aside>
            </div>
        </motion.article>
    )
}

const ARTICLE_SUB = "I'm Pedro Moura, a Frontend Developer in Rio de Janeiro, crafting digital experiences that are user-friendly and highly efficient."
const ARTICLE_TEXT = "I'm passionate about creating intuitive and visually appealing interfaces. My skills encompass technologies like React, Redux, React Native, NEXTJS, VITE, and JavaScript/TypeScript, enabling me to build high-performance web and mobile applications. With a strong background in JavaScript and TypeScript, I ensure efficiency and robustness in my code. My approach includes utilizing various tools such as HTML, CSS, and frameworks like Material UI and Tailwind CSS. I stay continuously updated with emerging technologies to deliver cutting-edge solutions."

import nextIcon from '../../../public/icons/next-js.svg'
import typescriptIcon from '../../../public/icons/typescript.svg'
import tailwindIcon from '../../../public/icons/tailwind-css.svg'
import reactIcon from '../../../public/icons/react.svg'
import materialIcon from '../../../public/icons/material-ui.svg'

const TECH_ICONS = [
    {
        id: 1,
        svg: nextIcon,
        alt: 'nextjs'
    },
    {
        id: 2,
        svg: reactIcon,
        alt: 'react'
    },
    {
        id: 3,
        svg: typescriptIcon,
        alt: 'typescript'
    },
    {
        id: 4,
        svg: materialIcon,
        alt: 'material-ui'
    },
    {
        id: 5,
        svg: tailwindIcon,
        alt: 'tailwindCSS'
    },
]