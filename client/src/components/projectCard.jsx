import React from 'react'

const projectCard = ({project}) => {
  return (
    <div>
      <main
      className='group w-80 h-60 border rounded-box relative z-10 active:scale-102'>
        <article
        className='w-full h-full absolute top-0 left-0 rounded-box'></article>
      </main>
      <h1 className='text-center text-2xl font-bold'>{project.name} </h1>
    </div>
  )
}

export default projectCard
