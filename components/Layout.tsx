import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='mx-48 mt-10 font-Poppins'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout