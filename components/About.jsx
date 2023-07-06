import Image from "next/image";

export default function About() {

    return (
        <section id="About" className="h-auto w-[80%] mt-4">

            <div className="flex flex-wrap justify-center items-center bg-gradient-to-b from-purple-600 to-blue-900 rounded-lg">
                <div className="w-full md:w-1/2 lg:w-1/3 p-6">
                    <Image
                        className="rounded-lg mx-auto object-cover object-center mb-6 bg-gradient-to-t from-transparent to-white backdrop-filter backdrop-blur-lg"
                        src={"/images/skpic.png"}
                        width={300}
                        height={400}
                        alt="Person Image" />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3 p-6">
                    <h1 className="text-3xl sm:text-5xl text-white font-bold leading-tight mb-2">About Me</h1>
                    <p className="text-md md:text-lg font-normal text-slate-200 mb-2">
                        Hi there! My name is Suresh and I'm a Full Stack Developer from Chennai.
                        I'm currently studying BCA at the University of Madras Arts and Science College in Nemmeli.
                    </p>
                    <p className="text-md md:text-lg font-normal text-slate-200 mb-2">
                        I have a deep love for programming and enjoy creating awesome projects and websites that are both functional and visually appealing.
                        As a Full Stack Developer, I specialize in JavaScript and have experience working with the MERN Stack.
                        I'm also skilled in creating web applications with Python.
                    </p>
                    <p className="text-md md:text-lg font-normal text-slate-200 mb-2">
                    If you're interested in learning more about my work or would like to discuss a project, 
                    please don't hesitate to contact me.
                    </p>

                    <a href="#Contact" className="w-auto relative mt-2 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                        <span className="w-auto relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact Us
                        </span>
                    </a>
                </div>
            </div>

        </section>
    )
}
