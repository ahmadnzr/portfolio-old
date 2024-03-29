import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { MoonIcon, SunIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

interface Props {
  toggleMenu: () => void
}

const Navbar = ({ toggleMenu }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className='dark:bg-black bg-white h-14 flex items-center justify-end md:justify-between md:px-40 gap-1 pr-2 sticky top-0 z-10'>
      <div
        className='h-9 w-9 rounded-full bg-gray-300/30 dark:bg-green-900/50 flex items-center justify-center cursor-pointer'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <SunIcon className='h-6 text-white animate-spin' />
        ) : (
          <MoonIcon className='h-6 text-green-800 animate-pulse' />
        )}
      </div>
      <div className='hidden md:flex gap-3 text-green-800 dark:text-white font-semibold'>
        <a href='#top' className='font-normal'>
          Home
        </a>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#tech'>Tech. Stack</a>
        <a href='#contact'>Contact</a>
      </div>
      <div
        className='h-9 w-9 flex items-center justify-center cursor-pointer md:hidden'
        onClick={toggleMenu}
      >
        <Bars3BottomLeftIcon className='h-6 dark:text-white text-green-800' />
      </div>
    </nav>
  )
}

export default Navbar
