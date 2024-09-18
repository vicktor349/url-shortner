import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
    return (
        <>
            <Head>
                <title>Shortly | Home</title>
            </Head>
            <div className='flex items-center mt-36'>
                <div>
                    <p className='text-7xl font-semibold'>More than just</p>
                    <p className='text-7xl font-semibold'>Shorter links</p>
                    <section className='text-primary mt-2 text-lg'>
                        <p>Build your brand's recognition and  get detailed</p>
                        <p>insights on how your links are performing</p>
                    </section>
                    <section className='mt-6'>
                        <button className='bg-primary px-6 py-4 text-white font-semibold rounded-full'>Get Started</button>
                    </section>
                </div>
                <div className='ml-auto'>
                    <Image src="/images/workings.svg" alt='Image of someone working' height={500} width={500} className='w-[45rem] h-[35rem]' />
                </div>
            </div>
        </>
    )
}

export default HeroBanner