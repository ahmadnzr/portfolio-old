import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface Props{
  toggleMenu: () => void
}

const Navbar = ({toggleMenu}: Props) => {
  const {theme, toggleTheme}= useContext(ThemeContext)

  return (
    <nav className='dark:bg-black h-12 flex items-center justify-end gap-1 pr-2 sticky top-0 z-10'>
      <div
        className='h-9 w-9 rounded-full bg-gray-300/30 dark:bg-green-900/50 flex items-center justify-center cursor-pointer'
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='white'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='green'
            className='w-6 h-6 '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>
        )}
      </div>
      <div className='h-9 w-9 flex items-center justify-center cursor-pointer' onClick={toggleMenu}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke={theme === 'dark' ? 'white' : 'green'}
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar
