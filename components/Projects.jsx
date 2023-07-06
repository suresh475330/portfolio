import Image from "next/image"
import { IoLogoGithub } from "react-icons/io5"

const data = [
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
        title: "Blog App",
        tech: "Next js, TypeScript, Tailwind css,  Sanity CMS",
        githubUrl: "https://github.com/suresh475330/blog-app-sanity",
        projectUrl: "https://blog-app-cyan.vercel.app",
        imageUrl: "https://i.ibb.co/NsxytFh/sss.png",
    },

]

export default function Projects() {
    return (
        <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="Projects">

            {data.map((item) => {
                return(

                    <div
                    key={item.id}
                    className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out bg-blue-700" >
                    <p className="text-lg text-textBase font-medium uppercase text-center">
                        {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : data[0].title}
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
                        <p className="text-lg text-gray-300">
                            Technologies
                            <span className="block text-sm text-gray-500">
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
           
        </section>
    )
}