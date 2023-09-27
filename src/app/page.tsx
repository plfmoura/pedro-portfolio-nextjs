import Button from "@/components/Button";
import { EastOutlined } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="home-container ">
      <header className="flex flex-col gap-2 px-2 mt-5">
        <p className="text-2xl">Hello! I'm Pedro.</p>
        <h1 className="text-6xl font-bold mb-5">
          Front-end Developer with emphasis on <span className="text-gray-400">React and Next.js</span>
        </h1>
        <Button value="Let's Talk" variant="primary" type="button" icon={<EastOutlined />}/>
      </header>
      <section className="w-[100vw] px-2 flex gap-2 justify-center items-center">
      </section>
    </main>
  )
}
