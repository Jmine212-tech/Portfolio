import React from 'react'
import { projects } from '../config/data'

// component
import ProjectCard from "../components/projectCard"

// icon
import { PhoneIcon, MailIcon, FacebookIcon, } from 'lucide-react'

const HomePage = () => {

    return (
        <div
            className='h-screen'
            data-them="dark">
            <nav
                className='w-full h-15 bg-base-300 flex items-center pl-3 pr-3'>
                <div
                    className='LOGO text-2xl font-bold font-serif'>
                    <span>J'</span>
                    <span className='text-amber-600 italic'>Creative</span>
                </div>
            </nav>

            <main>
                <article
                    className='HEART h-80 rounded-bl-4xl rounded-br-4xl relative flex flex-col items-center
                    bg-linear-to-b from-amber-500 to-orange-500'>
                    <section
                        className='ProfileText text-center font-bold text-2xl absolute top-20'>
                        <p>- Hello -</p>
                        <p className='italic font-serif text-4xl'>- I', JMine212 -</p>
                    </section>
                    <section
                        className='ProfileImg w-50 h-50 bg-white rounded-4xl absolute -bottom-12 border-3 border-pink-500'></section>
                </article>

                <article
                    className='IntroBox border rounded-2xl p-4 mt-20 bg-base-300'>
                    <h1 className='text-center text-2xl font-bold'>Hello, I’m **Jmine212** 👋</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a <i className='font-semibold'> ** Junior Full-Stack Web Developer ** </i>
                        who enjoys building modern and user-friendly web applications.
                        I focus on creating clean interfaces on the frontend and reliable
                        systems on the backend.</p>

                    <div>
                        <h1>💻 **My Skills**</h1>
                        <span>
                            <h3>**Frontend**</h3>

                            <p>* React</p>
                            <p>* Tailwind CSS</p>
                        </span>

                        <span>
                            <h3>**Backend**</h3>
                            <p>* Node.js</p>
                            <p>* Express</p>
                            <p>* JavaScript</p>
                        </span>

                        <span>
                            <h3>**Database**</h3>
                            <p>* MongoDB</p>
                        </span>

                        <span>
                            <h3>🌏 **Languages**</h3>
                            <p>* Shan (Tai)</p>
                            <p>* Thai</p>
                            <p>* English (B1–B2)</p>
                            <p>* Burmese</p>
                        </span>

                        <p>I’m passionate about learning new technologies and improving
                            my development skills every day. My goal is to build useful, scalable,
                            and well-designed web applications.</p>
                        <p>Feel free to explore my projects and see what I’ve been working on.</p>
                    </div>
                </article>

                <article
                className='rounded-2xl flex flex-col items-center'>
                    <h1 className='pt-2 pb-2 text-center text-2xl font-bold'>Projects</h1>
                    <section
                    className='border overflow-y-scroll h-100 grid grid-flow-row grid-cols-1 gap-4 p-4
                    bg-base-300'>
                        {
                            projects.map(project => {
                                return(
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

                <section
                    className='p-4 flex flex-col items-center gap-2'>
                    <p className='flex items-center gap-2'><span><MailIcon /></span>: Jmineworkingacc@gmail.com</p>
                    <p className='flex items-center gap-2'><span><PhoneIcon /></span>: 09 458 960 460</p>
                    <p className='flex items-center gap-2'><span><FacebookIcon /></span>: www.facebook.com</p>
                </section>
            </footer>
        </div>
    )
}

export default HomePage
