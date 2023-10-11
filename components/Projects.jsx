import Image from "next/image"
import { IoLogoGithub } from "react-icons/io5"

const projectData = [
    {
        id: "1",
        title: "Wikipedia clone",
        tech: "HTML, CSS, JavaScript, Wiki Api",
        githubUrl: "https://github.com/suresh475330/wikipedia-sk.github.io",
        projectUrl: "https://suresh475330.github.io/wikipedia-sk.github.io/",
        imageUrl: "https://i.ibb.co/YcZn4pj/wiki.png",
    },
    {
        id: "2",
        title: "To Do App",
        tech: "HTML, CSS, JavaScript",
        githubUrl: "https://github.com/suresh475330/todolist/",
        projectUrl: "https://suresh475330.github.io/todolist/",
        imageUrl: "https://i.ibb.co/qrz9wyW/To-Do-App.png",
    },
    {
        id: "3",
        title: "University website",
        tech: "HTML, CSS, JavaScript",
        githubUrl: "https://github.com/suresh475330/university-website/",
        projectUrl: "https://universitywebsite777.firebaseapp.com/",
        imageUrl: "https://i.ibb.co/6XfF38M/uivercity.png",
    },
    {
        id: "4",
        title: "Mern (CURD & Auth) app",
        tech: "React, Authentication, Redux",
        githubUrl: "https://github.com/suresh475330/mern-curd-and-auth-view",
        projectUrl: "https://curd-auth-job.netlify.app/",
        imageUrl: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62ab5f47ec52040073ca54f2/screenshot_2022-06-16-16-50-38-0000.png",
    },
    {
        id: "5",
        title: "Movie & photo search App",
        tech: "React, Tailwind CSS, Movie Api",
        githubUrl: "https://github.com/suresh475330",
        projectUrl: "https://mp-app-sk.netlify.app",
        imageUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/627e8380b8e8e8009fab04a2/screenshot_2022-05-13-16-13-16-0000.png",
    },
    {
        id: "6",
        title: "Quiz App",
        tech: "React,Figma",
        githubUrl: "https://github.com/suresh475330/quiz-app-sk.github.io",
        projectUrl: "https://quiz-app-sk.netlify.app",
        imageUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/625ff45b3a5e390d375d6548/screenshot_2022-04-20-11-54-16-0000.png",
    },
    {
        id: "7",
        title: "Music Streaming App",
        tech: "MERN, Redux, Firebase, Material UI",
        githubUrl: "https://github.com/suresh475330/music_player_api",
        projectUrl: "https://cat-music-player.web.app/",
        imageUrl: "https://user-images.githubusercontent.com/99592234/225608281-6c401c60-5837-4e8b-8a5f-55f6d4572e8b.png",
    },
    {
        id: "8",
        title: "Jobs Openings App",
        tech: "Python, Flask, Sqlalchemy, planetscale",
        githubUrl: "https://github.com/suresh475330/make-careers-website",
        projectUrl: "https://makecareers.onrender.com/",
        imageUrl: "https://i.ibb.co/tshkD7f/make.png",
    },
    {
        id: "9",
        title: "Blog web Application",
        tech: "Next js, TypeScript, Tailwind css, Sanity CMS",
        githubUrl: "https://github.com/suresh475330/blog-app-sanity",
        projectUrl: "https://blog-app-cyan.vercel.app",
        imageUrl: "https://github.com/suresh475330/img_upload/assets/99592234/967ca57e-65ca-4a65-a486-37b96b05055d",
    },

]


export default function Projects() {
    return (
            <section id="Projects" className="mt-24">

                <h2 className="text-2xl sm:text-4xl text-white font-bold leading-tight text-center mb-6">My Projects</h2>

                <div className="flex flex-wrap items-center justify-evenly gap-4">

                    {projectData.length > 0 && projectData.map((item) => {
                        return (

                            <div
                                key={item.id}
                                className="
                    max-w-[275px] md:max-w-[275px]
                    rounded-2xl
                    text-[#1A2421]
                    backdrop-blur-lg
                    [ p-4 md:p-6 lg:p-6 ]
                    border border-zinc-600  hover:border-zinc-900 duration-100 ease-in-out 
                    [ bg-gradient-to-b from-white/60 to-white/30 ]
                    [ border-[1px] border-solid border-white border-opacity-30 ]
                    [ shadow-black/70 shadow-2xl ]" >
                                <p className="mb-4 uppercase font-bold [ text-lg md:text-xl lg:text-xl ]">
                                    {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
                                </p>

                                <a href={item.projectUrl} target="_blank">

                                    <Image
                                        src={item.imageUrl}
                                        className="w-full h-full object-cover rounded-md my-4 cursor-pointer"
                                        alt="project image"
                                        width={100}
                                        height={50}
                                        unoptimized={true}
                                    />
                                </a>

                                <div className="flex flex-1 items-center justify-between">
                                    <p className="text-lg text-gray-900">
                                        Technologies
                                        <span className="block text-xs">
                                            {item.tech}
                                        </span>
                                    </p>
                                    <a href={item.githubUrl} target="_blank">
                                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}

                </div>


            </section>

    )
}
