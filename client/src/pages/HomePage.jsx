import React from 'react'
import {Link} from "react-router-dom"

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
                className='w-full h-15 bg-base-300 flex items-center justify-between pl-4 pr-4 sticky top-0 z-99'>
                <div
                    className='LOGO text-2xl font-bold font-serif'>
                    <span>J'</span>
                    <span className='text-amber-600 italic'>Creative</span>
                </div>
                <Link
                to={"/ProjectPage"}
                className='text-lg font-semibold'>Projects</Link>
            </nav>

            <main>
                <article
                    className='HEART h-80 rounded-bl-4xl rounded-br-4xl relative flex flex-col items-center
                    bg-linear-to-b from-amber-500 to-orange-500'>
                    <section
                        className='name-intro text-center font-bold text-2xl absolute top-20'>
                        <p>- Hello -</p>
                        <p className='italic font-serif text-4xl'>- I', JMine212 -</p>
                    </section>
                    <section
                        className='J-box w-50 h-50 rounded-4xl absolute -bottom-12 border-3 border-pink-500
                        flex items-center justify-center bg-linear-to-b from-white to-stone-400'>
                        <h1 className='text-9xl text-black font-bold font-serif'>J</h1>
                    </section>
                </article>

                <article
                    className='IntroBox p-4 mt-15 relative'>
                    <h1 className='text-center text-2xl font-bold bg-base-300 pt-4 pb-4 rounded-2xl mb-2'>Hello, I’m **Jmine212** 👋</h1>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        I’m a <i className='font-semibold'> ** Junior Full-Stack Web Developer ** </i>
                        who enjoys building modern and user-friendly web applications.
                        I focus on creating clean interfaces on the frontend and reliable
                        systems on the backend.</p>
                    <div
                        className='mt-4 relative'>
                        <div
                            className='w-full h-40 bg-linear-to-b from-orange-400 absolute -z-10 top-0 left-0'></div>
                        <h1 className='text-center text-2xl font-bold'>💻 **My Skills**</h1>
                        <div className='flex justify-between pl-4 pr-4 mt-4'>
                            <span className='border p-2 rounded-box bg-base-300'>
                                <h3 className='text-xl font-semibold mb-2'>**Frontend**</h3>
                                <p>* React</p>
                                <p>* Tailwind CSS</p>
                            </span>
                            <span className='border p-2 rounded-box bg-base-300'>
                                <h3 className='text-xl font-semibold mb-2'>**Backend**</h3>
                                <p>* Node.js</p>
                                <p>* Express</p>
                                <p>* JavaScript</p>
                            </span>
                        </div>
                        <div className='border p-2 rounded-box bg-base-300 text-center mt-4'>
                            <h3 className='text-xl font-semibold mb-2'>**Database**</h3>
                            <p>* MongoDB</p>
                        </div>

                        <div className='border mt-4 text-center rounded-2xl bg-base-300'>
                            <h3 className='font-semibold mb-2 text-xl'>🌏 **Languages**</h3>
                            <p>* Shan (Tai)</p>
                            <p>* Thai</p>
                            <p>* English (B1–B2)</p>
                            <p>* Burmese</p>
                        </div>

                        <p className='mt-4'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            I’m passionate about learning new technologies and improving
                            my development skills every day. My goal is to build useful, scalable,
                            and well-designed web applications.</p>
                        <p>Feel free to explore my projects and see what I’ve been working on.</p>
                    </div>

                    <div
                        className='w-full h-40 bg-linear-to-b to-base-300 absolute -z-10 bottom-0 left-0
                        rounded-bl-2xl rounded-br-2xl'></div>
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
