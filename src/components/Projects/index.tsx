import Image from 'next/image'
import React from 'react'
import vegetanizando from '../../../public/projects/vegetanizando.png'

export default function Projects() {

  return (
    <article className='mt-5'>
      <div className="flex flex-col md:flex-row gap-5 lg:gap-8 justify-between text-center md:text-left">
        <h2 className="text-5xl lg:text-6xl text-black font-bold">
          <span className="text-gray-400">Personal projects </span>I worked on
        </h2>
      </div>
      <div className="mt-10">
        <Image src={vegetanizando} alt="Vegetanizando" className='h-[250px] md:h-[400px] lg:h-[600px] object-contain' />
        <h3 className='text-3xl lg:text-4xl text-black font-bold'>Vegetanizando Restaurant - Comprehensive Front-end Overhau</h3>
        <p className='text-sm md:text-lg lg:text-xl text-black'>Overhaul of the entire 'Vegetanizando' project to achieve a more user-friendly and modern layout.</p>
      </div>
      <div className="mt-10">
        <Image src={vegetanizando} alt="Vegetanizando" className='h-[250px] md:h-[400px] lg:h-[600px] object-contain' />
        <h3 className='text-3xl lg:text-4xl text-black font-bold'>Azul Tour - e-commerce platform</h3>
        <p className='text-sm md:text-lg lg:text-xl text-black'>Overhaul of the entire 'Vegetanizando' project to achieve a more user-friendly and modern layout.</p>
      </div>
    </article>
  )
}

