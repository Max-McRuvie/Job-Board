import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full">
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
    </nav>
  )
}

