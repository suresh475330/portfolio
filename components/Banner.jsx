import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <section id="Home" className={styles.banner}>

            <div className="absolute z-10 px-6 md:px-32 flex flex-col justify-center align-between">
                <h1 className="text-4xl md:text-6xl text-white mt-64 font-bold tracking-wide">
                    Hi, My name is
                    <span className="ml-3 whitespace-nowrap bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                        Suresh
                    </span>
                </h1>
                <h1 className="text-4xl md:text-6xl text-white font-bold tracking-wide mt-4">I'm a Full Stack Developer.</h1>
                <div className="cursor-pointer text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                    <div className="bg-white">
                        <a href="#About" className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
                            Know more
                        </a>
                    </div>
                </div>
            </div>
            <Image className="absolute z-0 right-0 bottom-0" src={"/images/design2.png"} alt="desing2" height={200} width={400} />
        </section>
    )
} 