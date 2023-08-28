
import Image from "next/image";

const skillData = [
    {
        id: "1",
        name: "HTML 5",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
    },
    {
        id: "2",
        name: "CSS 3",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
    },
    {
        id: "3",
        name: "Javascript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: "4",
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    },
    {
        id: "5",
        name: "Twilwind CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
    },
    {
        id: "6",
        name: "Git",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
    },
    {
        id: "8",
        name: "NODE JS ",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        id: "9",
        name: "Express Js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
    },
    {
        id: "10",
        name: "Redux",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    {
        id: "11",
        name: "Next Js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
    },
    {
        id: "12",
        name: "Flask",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg"
    },
    {
        id: "13",
        name: "Bootstrap",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
    },
    {
        id: "14",
        name: "Material Ui",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
    },
    {
        id: "15",
        name: "Python",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
]

export default function Skills() {
    return (
        <section id="Skills" className="skills h-auto w-[80%] mt-[100px] rounded-lg">

            <h2 className="mb-6 text-2xl sm:text-4xl leading-9 text-gray-200 font-bold">I have experience with these technologies</h2>
            <div className="skillsGrid p-6 ">
                {skillData.length > 0 && skillData.map((item) => {
                    return (
                        <div key={item.id} className="imgComp" >
                            <Image style={{ backgroundColor: "whitesmoke", padding: "10px", borderRadius: "10px" }} src={item.url} width={100} height={100} unoptimized={true} alt={item.name} />
                        </div>
                    )
                })}
            </div>

        </section>
    );
}