import EXPERIENCE from '@/data/experience.json';
import { useTranslations } from 'next-intl';

export default function Timeline() {
  const t = useTranslations('experience');

    return (
        <ol className="items-center sm:flex mt-5 ml-4">
            {
                EXPERIENCE.map((item) => (
                    <li key={item.id} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                <a href={item.link} className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-3 ring-8 ring-white hover:ring-slate-100">
                                    <img className="rounded-full shadow-lg" src={item.path} alt={item.company} />
                                </a>
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold text-gray-900">{item.company}</h3>
                            {item.position.map((pos, key) => (
                                <time key={key} className="inline-block mr-2 mb-2 text-sm font-normal leading-none text-gray-600 mt-2">
                                    {t(pos)}
                                </time>
                            ))}
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">{item.time} - {item.status ? t('at-the-moment') : item.end}</time>
                            <p className="text-base font-normal text-gray-500 ">{t(item.desc)}</p>
                        </div>
                    </li>
                ))
            }
        </ol>




    )
}
