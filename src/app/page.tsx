import Button from "@/components/Button";
import About from "@/components/About"
import { EastOutlined } from "@mui/icons-material";
import PROJECTS from '@/data/projects.json'
import Timeline from "@/components/Timeline";

export default function Home() {

  return (
      <main className="home-container px-2 sm:px-7 xl:max-w-[1280px] lg:mx-auto">
        <header id="header" className="flex flex-col gap-4 sm:gap-12 mt-5 sm:justify-center">
          <p className="text-2xl">Hello! I&apos;m Pedro.</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5 w-[300px] sm:w-[80vw] xl:w-[100%]">
            Front-end Developer with emphasis on <span className="text-gray-400">React and Next.js</span>
          </h1>
          <a href="https://www.linkedin.com/in/pedro-lucas-moura/" target="_blank">
            <Button value="Let&apos;s Talk" variant="primary" type="button" icon={<EastOutlined />} />
          </a>
        </header>
        <section id="about" className="mt-10">
          <p className="text-2xl">About me</p>
          <About />
        </section>
        <section id="experience" className="mt-10 h-screen">
          <p className="text-2xl mb-12">Experience</p>
          <Timeline />
        </section>
      </main>
  )
}