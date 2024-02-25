import About from "@/components/About";
import { BtnLetsTalk } from "@/components/Button";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <main className="home-container px-2 sm:px-7 xl:max-w-[1280px] lg:mx-auto">
      <header id="header" className="flex flex-col gap-4 sm:gap-12 mt-5 sm:justify-center">
        <p className="text-2xl">{t('greetings')}</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5 w-[300px] sm:w-[80vw] xl:w-[100%]">
          {t('title-init')}{" "}<span className="text-gray-400">{t('title-end')}</span>
        </h1>
        <BtnLetsTalk link="https://www.linkedin.com/in/pedro-lucas-moura/" variant="primary" />
      </header>
      <section id="about" className="mt-10">
        <p className="text-2xl">{t('about-title')}</p>
        <About />
      </section>
      <section id="experience" className="mt-10">
        <p className="text-2xl mb-12">{t('exp-title')}</p>
        <Timeline />
      </section>
      <section id="skills" className="mt-10 h-screen">
        <p className="text-2xl my-4">{t('skills-title')}</p>
        <Skills />
      </section>
    </main>
  )
}