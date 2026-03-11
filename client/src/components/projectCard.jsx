import React from 'react'

// img
import Cat from "../assets/cat.jpg"

const projectCard = ({ project }) => {
  return (
    <div>
      <main
        className='group w-80 h-60 lg:w-100 lg:h-80 border rounded-box relative z-10 active:scale-102 overflow-hidden'>
        <article
          className='w-full h-full absolute top-0 left-0 rounded-box'></article>
          <section
            className="w-full h-full absolute group-hover:blur-sm"
          style={{
            "backgroundImage": `url(${Cat})`,
            "backgroundPosition": "center",
            "backgroundSize": "cover"
          }}></section>
          
          <section
        className='Detail absolute w-full h-0 group-hover:h-full top-0 left-0 rounded-2xl
        transition-all duration-600 overflow-hidden'>
          <div
          className='Detail-BG bg-black absolute w-full h-full opacity-85'>
            <h3 className='translate-x-5'>{project.projectId} </h3>
            <h1 className='text-center text-2xl font-bold italic'>{project.name} </h1>
            <p className='p-4'>{project.script} </p>
          </div>
        </section>
      </main>
        <h1 className='text-center text-2xl font-bold'>{project.name} </h1>
    </div>
  )
}

export default projectCard
