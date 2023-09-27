import Article from "@/components/Article";
import Button from "@/components/Button";
import { EastOutlined } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="home-container px-2 sm:px-7 xl:max-w-[1280px] lg:mx-auto">
      <header id="header" className="flex flex-col gap-4 sm:gap-12 mt-5 h-[70vh] sm:justify-center">
        <p className="text-2xl">Hello! I'm Pedro.</p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5 w-[300px] sm:w-[80vw] xl:w-[100%]">
          Front-end Developer with emphasis on <span className="text-gray-400">React and Next.js</span>
        </h1>
        <Button value="Let's Talk" variant="primary" type="button" icon={<EastOutlined />} />
      </header>
      <section id="about" className="mt-10">
        <p className="text-2xl">About me</p>
        <Article />
      </section>
    </main>
  )
}