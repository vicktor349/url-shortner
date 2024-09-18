import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='ssssm:mx-2 ssm:mx-3 sm:mx-6 lg:mx-12 xl:mx-20 2xl:mx-48 3xl:mx-52 mt-10 font-Poppins'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout