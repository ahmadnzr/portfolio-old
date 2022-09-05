import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Photo from './assets/photos/photo.png'
import Square from './assets/icons/square.png'
import LeftMenu from './components/LeftMenu'

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className='h-screen w-screen text-slate-700 relative overflow-hidden'>
      <Navbar toggleMenu={() => setShowMenu(!showMenu)} />
      <LeftMenu showMenu={showMenu} hideMenu={() => setShowMenu(false)} />

      <div className='h-screenCard bg-gradient-to-t from-green-100 to-white relative'>
        <div className='ml-10 mt-16 antialiased  text-xl absolute'>
          <h2 className='text-2xl font-bold mb-2'>
            Hi, I&apos;am <strong className='text-green-800'>Nizar.</strong>
          </h2>
          <p>
            I&apos;am <strong>Web Developer</strong>
            <br />
            from <strong>Indonesia</strong>
          </p>
          <div className='flex gap-3 text-sm mt-5'>
            <a href='#' className='px-2 py-1 bg-green-500/10 text-green-700 rounded-sm'>
              Download CV
            </a>
            <a
              href='#'
              className='px-2 py-1 bg-white border border-green-700 text-green-700 rounded-sm'
            >
              Contact Me
            </a>
          </div>
        </div>
        <img src={Square} alt='' className='absolute bg-cover h-20 bottom-44 left-48' />
        <img src={Photo} alt='' className='absolute inset-x-0 bottom-0 bg-cover h-96' />
      </div>

      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
      <div className='h-96'></div>
    </div>
  )
}

export default App
