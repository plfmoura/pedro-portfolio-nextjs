'use client'

import { Download, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import pedro_image from '../../../public/pedro.png';
import { BtnLetsTalk, Button } from '../Button';

export default function About() {
    const t = useTranslations('about');
    const ui = useTranslations('ui');

    return (
        <motion.article
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className="flex flex-col gap-5 mt-5 mb-10">
            <div className="flex flex-col md:flex-row gap-5 lg:gap-8 justify-between text-center md:text-left">
                <h2 className="text-5xl lg:text-6xl text-black font-bold">
                    <span className="text-gray-400">{t('title-init')}</span>{t('title-end')}
                </h2>
                <div className='flex flex-col gap-12'>
                    <p className="text-sm md:text-lg lg:text-xl text-black">
                        {t('description')}
                    </p>
                    <BtnLetsTalk link="https://www.linkedin.com/in/pedro-lucas-moura/" variant="primary" />
                </div>
            </div>
            <div className="flex flex-col gap-5 lg:mt-12 lg:gap-8 md:flex-row items-center md:items-start">
                <Image
                    src={pedro_image}
                    alt="Pedro Moura - Frontend Developer"
                    className='grayscale-[0.5] sm:h-[400px] sm:w-[400px] h-[300px] lg:h-[400px] rounded-3xl w-[300px] lg:w-[600px] object-cover'
                />
                <aside className='w-[100%] gap-8 flex flex-col'>
                    <p className='text-sm md:text-base md2:text-lg lg:text-left'>
                        {t('text')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 md:gap-[3%] md2:gap-6 m-auto mb-6 md:mb-auto">
                        <a href="https://github.com/plfmoura" target="_blank">
                            <Button value={ui('btn-git')} variant="primary" type="button" icon={<GitHub />} />
                        </a>
                        <a href="https://drive.google.com/file/d/1C2A90WFf7NohguvGAIaQUiV-O1dwsGcO/view?usp=sharing" target="_blank">
                            <Button value={ui('btn-cv')} variant="secondary" type="button" icon={<Download />} />
                        </a>
                    </div>
                </aside>
            </div>
        </motion.article>
    )
}
