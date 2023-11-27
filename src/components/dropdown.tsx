"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false);

    const DropDownToggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

  return (
    <nav className="w-full">
        {/* Dropdown */}
        <div className="md:hidden font-mono text-xl flex flex-col pb-10 w-16">
            <button className=" flex hover:underline decoration-red-500 decoration-2" onClick={DropDownToggle}>{isOpen ? "<-" : "->"}</button>
            {isOpen && (
                <div>
                    <Link href={""} className="hover:underline decoration-red-500 decoration-2">
                        <h1>Home</h1>
                    </Link>
                    <Link href={""} className="hover:underline decoration-red-500 decoration-2">
                        <h1>About</h1>
                    </Link>
                    <Link href={""} className="hover:underline decoration-red-500 decoration-2">
                        <h1>Jobs</h1>
                    </Link>

                    <hr/>

                    <Link href={""} className="hover:underline decoration-red-500 decoration-2">
                        <h1>Login</h1>
                    </Link>
                    <Link href={""} className="hover:underline decoration-red-500 decoration-2">
                        <h1>Register</h1>
                    </Link>
                </div>
            )}
        </div>
    </nav>
  )
}