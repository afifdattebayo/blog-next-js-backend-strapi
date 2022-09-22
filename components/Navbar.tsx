import React from 'react'
import Link from "next/link"
import Image from "next/image"

function Navbar() {
    return (
        <nav className='flex items-center justify-between py-6'>
            <Link href="/">
                <div className='flex items-center cursor-pointer'>
                    <Image src="/logo.png" height={35} width={40} />
                    <span className='font-bold ml-2 text-primary'>Blog Next-js</span>
                </div>
            </Link>

            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Products</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Pricing</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Docs</a>
                </li>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Company</a>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='mr-6 font-medium text-gray-600'>
                    <a href="#" className='hover:text-gray-400'>Log In</a>
                </li>
                <li className='font-medium text-gray-600'>
                    <a href="#" className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all '>Sign Up</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar