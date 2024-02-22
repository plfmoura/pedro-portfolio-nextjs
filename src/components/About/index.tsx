'use client';

import { Download, EastOutlined, GitHub } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from 'react';
import pedro_image from '../../../public/pedro.png';
import Button from '../Button';

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
            <div className="flex flex-col gap-5 lg:mt-12 lg:gap-8 md:flex-row items-center md:items-start">
                <Image
                    src={pedro_image}
                    alt="Pedro Moura - Frontend Developer"
                    className='grayscale-[0.5] sm:h-[400px] sm:w-[400px] h-[300px] lg:h-[400px] rounded-3xl w-[300px] lg:w-[600px] object-cover'
                />
                <aside className='w-[100%] gap-8 flex flex-col'>
                    <p dangerouslySetInnerHTML={{ __html: ARTICLE_TEXT }} className='text-sm md:text-base md2:text-lg lg:text-left'>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-[3%] md2:gap-6 m-auto mb-6 md:mb-auto">
                        <a href="https://github.com/plfmoura" target="_blank">
                            <Button value="Go to Github" variant="primary" type="button" icon={<GitHub />} />
                        </a>
                        <a href="https://drive.google.com/file/d/1C2A90WFf7NohguvGAIaQUiV-O1dwsGcO/view?usp=sharing" target="_blank">
                            <Button value="Download CV" variant="secondary" type="button" icon={<Download />} />
                        </a>
                    </div>
                </aside>
            </div>
            <p className="text-2xl my-4">Technologies i&apos;ve learning</p>
            <StackCarousel />
            <ul className="flex items-center gap-4 flex-wrap">
                {
                    TECH_ICONS.map((icon, key) => (
                        <li key={key} className="lowercase text-slate-500 whitespace-nowrap">
                            {icon.alt}
                        </li>
                    ))
                }
            </ul>
        </motion.article>
    )
}

const StackCarousel = () => {
    const animation = { duration: 6000, easing: (t: number) => t }

    const [active, setActive] = useState(true);

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            active && s.moveToIdx(5, true, animation)
        },
        updated(s) {
            active && s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            active && s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        slides: {
            perView: 8,
            spacing: 40,
        },
    })

    return (
        <div ref={ref} className="keen-slider flex w-full overflow-hidden"
            onMouseLeave={() => setActive(true)}
            onMouseEnter={() => setActive(false)}
        >
            {
                TECH_ICONS.map((icon, key) => (
                    <div key={key} className="keen-slider__slide number-slide">
                        <Tooltip title={icon.alt} arrow placement="top">
                            <Image
                                src={icon.svg}
                                alt={icon.alt}
                                className='w-10 h-10 object-contain select-none'
                            />
                        </Tooltip>
                    </div>
                ))
            }
        </div>
    )
}

const ARTICLE_SUB = "I&apos;m Pedro Moura, a Frontend Developer in Rio de Janeiro, crafting digital experiences that are user-friendly and highly efficient."
const ARTICLE_TEXT = "I&apos;m passionate about creating intuitive and visually appealing interfaces. My skills encompass technologies like <strong>React, Redux, React Native, NEXTJS, VITE,</strong> and <strong>JavaScript/TypeScript</strong>, enabling me to build high-performance web and mobile applications. With a strong background in JavaScript and TypeScript, I ensure efficiency and robustness in my code. My approach includes utilizing various tools such as <strong>HTML, CSS</strong>, and frameworks like <strong>Material UI</strong> and <strong>Tailwind CSS</strong>. I stay continuously updated with emerging technologies to deliver cutting-edge solutions."

import bootstrapIcon from '../../../public/icons/bootstrap.svg';
import clojureIcon from '../../../public/icons/clojure.svg';
import clojurescriptIcon from '../../../public/icons/clojurescript.svg';
import expoIcon from '../../../public/icons/expo.svg';
import gitIcon from '../../../public/icons/git.svg';
import gitHubIcon from '../../../public/icons/github.svg';
import javascriptIcon from '../../../public/icons/javascript.svg';
import materialIcon from '../../../public/icons/material-ui.svg';
import mongodbIcon from '../../../public/icons/mongodb.svg';
import nextIcon from '../../../public/icons/next-js.svg';
import nodeIcon from '../../../public/icons/node.svg';
import reactIcon from '../../../public/icons/react.svg';
import tailwindIcon from '../../../public/icons/tailwind-css.svg';
import typescriptIcon from '../../../public/icons/typescript.svg';
import vercelIcon from '../../../public/icons/vercel.svg';
import viteIcon from '../../../public/icons/vite.svg';
import vueIcon from '../../../public/icons/vue.svg';

const TECH_ICONS = [
    {
        svg: reactIcon,
        alt: 'React'
    },
    {
        svg: nextIcon,
        alt: 'Nextjs'
    },
    {
        svg: viteIcon,
        alt: 'Vite'
    },
    {
        svg: typescriptIcon,
        alt: 'Typescript'
    },
    {
        svg: javascriptIcon,
        alt: 'Javascript'
    },
    {
        svg: materialIcon,
        alt: 'Material UI'
    },
    {
        svg: tailwindIcon,
        alt: 'TailwindCSS'
    },
    {
        svg: vercelIcon,
        alt: 'Vercel'
    },
    {
        svg: gitIcon,
        alt: 'Git'
    },
    {
        svg: gitHubIcon,
        alt: 'GitHub'
    },
    {
        svg: bootstrapIcon,
        alt: 'Bootstrap'
    },
    {
        svg: mongodbIcon,
        alt: 'Mongodb'
    },
    {
        svg: clojureIcon,
        alt: 'Clojure'
    },
    {
        svg: clojurescriptIcon,
        alt: 'Clojurescript'
    },
    {
        svg: vueIcon,
        alt: 'Vue'
    },
    {
        svg: expoIcon,
        alt: 'Expo'
    },
    {
        svg: nodeIcon,
        alt: 'Node'
    }
]