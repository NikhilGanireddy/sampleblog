"use client"
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import NikhilGanireddy from "../../public/Nikhil_Ganireddy.jpg"
import {IoClose} from "react-icons/io5";

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    const [showDropDown, setShowDropDown] = useState(false)
    const handleOpenDropDown = () => setShowDropDown(true)
    const handleCloseDropDown = () => setShowDropDown(false)
    return <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-2xl py-6 flex justify-between items-center ">
        <h1 className="text-2xl font-normal text-violet-600">
            <Link href={"/"}>thegdp</Link>
        </h1>
        <ul>
            {loggedIn ? (<div className="relative">
                <li className=" flex flex-col items-end ">
                    <Image className="cursor-pointer object-cover object-center rounded-full overflow-hidden "
                           src={NikhilGanireddy}
                           alt={"person"}
                           width={60}
                           height={60}
                           onClick={handleOpenDropDown}
                    />
                    {showDropDown && <div
                        className="min-w-[150px] flex items-start text-white transition-all duration-200 absolute top-full mt-2 gap-1 rounded-lg text-sm z-20 bg-white/20 backdrop-blur-sm flex-col overflow-hidden">
                        <div onClick={handleCloseDropDown}
                             className="w-full cursor-pointer py-2 px-4 hover:bg-white/10 duration-200 transition-all font-light flex justify-between items-center gap-2 ">
                            <span>Close </span>
                            <IoClose size={20}/>
                        </div>
                        <Link href={"/post/createpost"}
                              className=" py-2 px-4  hover:bg-white/10 duration-200 transition-all w-full"
                        >
                            Create Post
                        </Link>
                        <Link
                            href={"/logOut"}
                            className=" py-2 px-4  hover:bg-white/10 duration-200 transition-all w-full"
                        >Log Out</Link>
                    </div>}
                </li>
            </div>) : (<div className="flex justify-center items-center gap-4">
                <Link
                    className="px-6 py-2 rounded-lg border-neutral-500 bg-transparent border font-normal "
                    href={"/login"}
                >Login</Link>
                <Link
                    href={"/register"}
                    className=" px-6 py-2 rounded-lg border-violet-600 bg-violet-600 font-normal "
                >Register</Link>

            </div>)}
        </ul>
    </div>
}

export default Navbar