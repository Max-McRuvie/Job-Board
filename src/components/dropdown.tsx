"use client"

import Link from 'next/link'
import React from 'react'

export default function Dropdown() {
    const [isOpen, setIsOpen] = React.useState(false);

    const DropDownToggle = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

  return (
    <nav className="w-full mb-5">
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