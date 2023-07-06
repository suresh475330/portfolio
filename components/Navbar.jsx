import { IoMenu, } from "react-icons/io5";
import { useState } from "react";
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Contact', href: '#Contact' },
]


export default function Navbar() {


    const [isActive, setIsActive] = useState(false);


    return (
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-4 flex justify-center items-center">

            <div className="w-full md:w-880 bg-[#1C1C65] p-4 rounded-2xl flex items-center">
                <Image className="rounded-lg" src={"/images/logo2.png"}  alt="Picture of the logo" width={30} height={30} />

                <div className="hidden md:flex items-center gap-6 ml-auto cursor-pointer mr-4">
                    {navigation.map((nav) => {
                        return (
                            <a key={nav.name} href={nav.href} className="text-base text-white font-semibold hover:underline decoration-2 cursor-pointer duration-100 ease-in">{nav.name}</a>
                        )
                    })}

                </div>

                <div className="block md:hidden ml-auto cursor-pointer" onClick={() => setIsActive(!isActive)}>
                    <IoMenu color="#FFFFFF" className="text-2xl text-textBase" />
                </div>

                {isActive && (
                    <div  className="block md:hidden p-4 w-200 bg-[#1C1C65] rounded-lg fixed top-24 right-10 flex flex-col items-center justify-evenly gap-4">
                        {navigation.map((nav) => {
                            return (
                                <a onClick={() => setIsActive(false)} key={nav.name} href={nav.href} className="text-base text-white font-semibold hover:text-black cursor-pointer duration-100 ease-in">{nav.name}</a>
                            )
                        })}
                    </div>
                )}
            </div>


        </nav>
    )
}
