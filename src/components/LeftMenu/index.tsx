import React, { useState } from 'react'

interface Props {
  showMenu: boolean
  hideMenu: () => void
}

const LeftMenu = ({ showMenu, hideMenu }: Props) => {

  return (
    <div
      className={`z-20 h-screen w-screen bg-gradient-to-t from-green-100 to-white absolute top-12 left-full flex flex-col items-center justify-center gap-10 ${
        showMenu && '-translate-x-full'
      } duration-500`}
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
