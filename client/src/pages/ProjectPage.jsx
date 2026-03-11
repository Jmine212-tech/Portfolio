import React, {useState} from 'react'
import { projects } from '../config/data'

// component
import ProjectCard from '../components/projectCard'

const ProjectPage = () => {
    const [ search, setSearch ] = useState("")
    const searchProject = projects.filter((item)=>{return item.name.toLowerCase().includes(search.toLocaleLowerCase())})

    return (
        <div
            className='min-h-screen'
            data-theme="dark">
            <nav
                className='TopNavBar w-full h-15 bg-base-300 rounded-tl-full rounded-br-full border border-black
      flex items-center pl-10 pr-10 gap-2 sticky top-0 z-99 translate-y-2'>
                <h1 className='LOGO text-xl text-amber-500 font-bold italic font-serif '>
                    Pro<span className='text-stone-300 font-sans'>j</span>ects
                </h1>
                <label>
                    <input type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className='border-base-100 border rounded-2xl w-35 h-8 text-center text-sm' />
                </label>
            </nav>

            <main>
                <article
                    className='rounded-2xl flex flex-col items-center'>
                    <section
                        className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                        {
                            searchProject.map(project => {
                                return (
                                    <ProjectCard project={project} />
                                )
                            })
                        }
                    </section>
                </article>
            </main>

             <footer
                className='h-50 bg-base-300 mt-4 rounded-tl-4xl rounded-tr-4xl'>
                <div
                    className='LOGO text-2xl font-bold font-serif text-center pt-3'>
                    <span>J'</span>
                    <span className='text-amber-600 italic'>Creative</span>
                </div>
                <p className='text-center text-xs'>© 2026 Jmine212. All rights reserved.</p>

            </footer>
        </div>
    )
}

export default ProjectPage
