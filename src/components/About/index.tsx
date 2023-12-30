'use client';

import React from 'react'
import Image from "next/image";
import pedro_image from '../../../public/pedro.png'
import Button from '../Button';
import { EastOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className="flex flex-col gap-5 mt-5 mb-10">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-8 justify-between text-center md:text-left">
                <h2 className="text-5xl lg:text-6xl text-black font-bold">
                    <span className="text-gray-400">My Journey and Passion, </span>as a FrontEnd Developer
                </h2>
                <div className='flex flex-col gap-12'>
                    <p className="text-sm md:text-lg lg:text-xl text-black" dangerouslySetInnerHTML={{ __html: ARTICLE_SUB }} />
                    <a href="https://www.linkedin.com/in/pedro-lucas-moura/" target="_blank">
                        <Button className='hidden md:block ml-auto' value="Let's Talk" variant="primary" type="button" icon={<EastOutlined />} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:mt-12 lg:gap-8 md:flex-row">
                <Image
                    src={pedro_image}
                    alt="Pedro Moura - Frontend Developer"
                    className='grayscale-[0.5] xs:self-center md:self-auto rounded-3xl xs:w-[100%] sm:w-[80%] md:w-3/4 h-4/5 object-cover'
                />
                <aside className='w-[100%] gap-8 flex flex-col'>
                    <p dangerouslySetInnerHTML={{ __html: ARTICLE_TEXT }} className='text-sm md:text-base md2:text-lg lg:text-left'>
                    </p>
                    <div className="flex align-middle justify-between px-2 md:flex-wrap lg-mx-0 md:mt-0 lg:mt-12">
                        {
                            TECH_ICONS.map((icon, key) => (
                                <div
                                    key={key}
                                    className='flex flex-col align-middle justify-between'>
                                    <Image
                                        src={icon.svg}
                                        alt={icon.alt}
                                        className='xs:w-fit xs:h-10 sm:h-16 md:h-14 lg:h-20 w-24 h-24 object-contain self-center' />
                                    <span className='mt-3 xs:text-xs sm:text-sm lg:text-lg text-center whitespace-nowrap'>{icon.alt}</span>
                                </div>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </motion.article>
    )
}

const ARTICLE_SUB = "I&apos;m Pedro Moura, a Frontend Developer in Rio de Janeiro, crafting digital experiences that are user-friendly and highly efficient."
const ARTICLE_TEXT = "I&apos;m passionate about creating intuitive and visually appealing interfaces. My skills encompass technologies like <strong>React, Redux, React Native, NEXTJS, VITE,</strong> and <strong>JavaScript/TypeScript</strong>, enabling me to build high-performance web and mobile applications. With a strong background in JavaScript and TypeScript, I ensure efficiency and robustness in my code. My approach includes utilizing various tools such as <strong>HTML, CSS</strong>, and frameworks like <strong>Material UI</strong> and <strong>Tailwind CSS</strong>. I stay continuously updated with emerging technologies to deliver cutting-edge solutions."

import nextIcon from '../../../public/icons/next-js.svg'
import typescriptIcon from '../../../public/icons/typescript.svg'
import tailwindIcon from '../../../public/icons/tailwind-css.svg'
import reactIcon from '../../../public/icons/react.svg'
import materialIcon from '../../../public/icons/material-ui.svg'

const TECH_ICONS = [
    {
        id: 1,
        svg: nextIcon,
        alt: 'Nextjs'
    },
    {
        id: 2,
        svg: reactIcon,
        alt: 'React'
    },
    {
        id: 3,
        svg: typescriptIcon,
        alt: 'Typescript'
    },
    {
        id: 4,
        svg: materialIcon,
        alt: 'Material UI'
    },
    {
        id: 5,
        svg: tailwindIcon,
        alt: 'TailwindCSS'
    },
]