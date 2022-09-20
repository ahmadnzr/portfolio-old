import React, { useState } from 'react'

interface Props {
  showMenu: boolean
  hideMenu: () => void
}

const LeftMenu = ({ showMenu, hideMenu }: Props) => {
  if (!showMenu) return null

  return (
    <div
      className={`z-20 h-screenCard w-screen bg-gradient-to-t from-green-100 to-white dark:from-green-900 dark:to-black dark:text-white absolute top-12 flex flex-col items-center justify-center gap-10`}
    >
      <div className='flex flex-col items-center justify-center gap-5 text-3xl font-bold'>
        <a href='#' onClick={hideMenu}>
          Home
        </a>
        <a href='#' onClick={hideMenu}>
          About
        </a>
        <a href='#' onClick={hideMenu}>
          Tech. Stack
        </a>
        <a href='#' onClick={hideMenu}>
          Projects
        </a>
        <a href='#' onClick={hideMenu}>
          Contacts
        </a>
      </div>
      <span className=''>design by nizar</span>
    </div>
  )
}

export default LeftMenu
