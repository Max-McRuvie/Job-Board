"use client"

import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const DropDownToggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }


  return (
    <nav className="w-full pb-5 border-b-4">
        {/* Full Navbar */}
        <div className="hidden md:flex font-mono h-fit text-xl flex flex-col md:flex-row gap-8 justify-between">
            <div className="w-fit text-xl flex gap-8">
                <Link href={""} className="hover:text-red-500">
                    <h1>Home</h1>
                </Link>
                <Link href={""} className="hover:text-red-500">
                    <h1>About</h1>
                </Link>
                <Link href={""} className="hover:text-red-500">
                    <h1>Jobs</h1>
                </Link>
            </div>

            <div className="text-xl flex gap-8">
                <Link href={""} className="hover:text-red-500">
                    <h1>Login</h1>
                </Link>
                <Link href={""} className="hover:text-red-500">
                    <h1>Register</h1>
                </Link>
            </div>
        </div>

        {/* Dropdown */}
        <div className="md:hidden font-mono text-xl flex flex-col w-16">
            <button className=" flex hover:text-red-500" onClick={DropDownToggle}>{isOpen ? "<-" : "->"}</button>
            {isOpen && (
                <div>
                    <Link href={""} className="hover:text-red-500">
                        <h1>Home</h1>
                    </Link>
                    <Link href={""} className="hover:text-red-500">
                        <h1>About</h1>
                    </Link>
                    <Link href={""} className="hover:text-red-500">
                        <h1>Jobs</h1>
                    </Link>

                    <hr/>

                    <Link href={""} className="hover:text-red-500">
                        <h1>Login</h1>
                    </Link>
                    <Link href={""} className="hover:text-red-500">
                        <h1>Register</h1>
                    </Link>
                </div>
            )}
        </div>
    </nav>
  )
}

