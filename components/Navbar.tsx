import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center font-semibold'>
            <div className='flex items-center space-x-5'>
                <Link href="/" className='text-4xl'>Shortly</Link>
                <Link href="/" className='text-primary hover:text-black'>Features</Link>
                <Link href="/" className='text-primary hover:text-black'>Pricing</Link>
                <Link href="/" className='text-primary hover:text-black'>Resources</Link>
            </div>
            <div className='ml-auto space-x-5'>
                <Link href="/" className='text-primary hover:text-black'>Login</Link>
                <Link href="/" className='bg-primary py-3 px-6 rounded-full text-white'>Sign Up</Link>
            </div>
        </div>
    )
}

export default Navbar