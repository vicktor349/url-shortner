import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className='flex items-center font-semibold'>
            <div className='flex items-center space-x-5'>
                <Link href="/" className='text-2xl ssm:text-5xl'>Shortly</Link>
                <Link href="/" className='text-primary hover:text-black hidden md:block text-lg'>Features</Link>
                <Link href="/" className='text-primary hover:text-black hidden md:block text-lg'>Pricing</Link>
                <Link href="/" className='text-primary hover:text-black hidden md:block text-lg'>Resources</Link>
            </div>
            <div className='ml-auto space-x-5 hidden md:block'>
                <Link href="/" className='text-primary hover:text-black'>Login</Link>
                <Link href="/" className='bg-primary py-3 px-6 rounded-full text-white'>Sign Up</Link>
            </div>
            <div className='ml-auto block md:hidden'>
                <RxHamburgerMenu className='h-8 w-8' />
            </div>
        </div>
    )
}

export default Navbar