import React from 'react'
import Photo from '../../assets/photos/photo.png'
import Square from '../../assets/icons/square.png'

const Hero = () => {
  return (
    <div className='h-screenCard relative md:flex flex-row-reverse justify-evenly'>
      <div className='flex-1 md:flex items-center justify-start ml-10 mt-16 antialiased text-xl absolute md:static dark:text-white'>
        <div className='flex flex-col md:gap-5'>
          <h2 className='text-2xl md:text-7xl font-bold mb-2'>
            Hi, I&apos;am <strong className='text-green-800'>Nizar.</strong>
          </h2>
          <p className='md:text-4xl'>
            I&apos;am <strong>Web Developer</strong>
            <br />
            from <strong>Indonesia</strong>
          </p>
          <div className='flex gap-3 text-sm mt-5'>
            <a
              href='https://drive.google.com/file/d/1OvVCoj1B0Lr3SnfaiWDAUjswzfF_WYzN/view?usp=sharing'
              target={'_blank'}
              rel={'noreferrer'}
              className='px-2 py-1 bg-green-500/10 text-green-700 dark:text-white rounded-md'
            >
              Download CV
            </a>
            <a
              href='#'
              className='px-2 py-1 bg-white border border-green-700 text-green-700 rounded-md'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className='flex-1 flex'>
        <img
          src={Square}
          alt=''
          className='absolute bg-cover h-20 bottom-44 md:top-32 md:left-64 left-48'
        />
        <img
          src={Photo}
          alt=''
          className='absolute inset-x-0 bottom-0 md:left-52 bg-cover h-96 md:h-4/5'
        />
      </div>
    </div>
  )
}

export default Hero
