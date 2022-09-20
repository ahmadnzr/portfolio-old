import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Photo from './assets/photos/photo.png'
import Square from './assets/icons/square.png'
import LeftMenu from './components/LeftMenu'
import { ThemeContext } from './context/ThemeContext'
import Card from './components/Card'
import AboutContent from './components/Contents/AboutContent'
import ProjectContent from './components/Contents/ProjectContent'
import TechContent from './components/Contents/TechContent'
import ContactContent from './components/Contents/ContactContent'
import ThanksContent from './components/Contents/ThanksContent'

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme} h-screen w-screen text-slate-700 overflow-x-hidden`}>
      <Navbar toggleMenu={() => setShowMenu(!showMenu)} />
      <LeftMenu showMenu={showMenu} hideMenu={() => setShowMenu(false)} />
      <div className='bg-gradient-to-t from-green-100 to-white  dark:from-green-900 dark:to-black'>
        <div className='h-screenCard  relative'>
          <div className='ml-10 mt-16 antialiased text-xl absolute dark:text-white'>
            <h2 className='text-2xl font-bold mb-2'>
              Hi, I&apos;am <strong className='text-green-800'>Nizar.</strong>
            </h2>
            <p>
              I&apos;am <strong>Web Developer</strong>
              <br />
              from <strong>Indonesia</strong>
            </p>
            <div className='flex gap-3 text-sm mt-5'>
              <a
                href='#'
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
          <img src={Square} alt='' className='absolute bg-cover h-20 bottom-44 left-48' />
          <img src={Photo} alt='' className='absolute inset-x-0 bottom-0 bg-cover h-96' />
        </div>
        <Card title={'About'} subtitle={'Lombok, Indonesia'} content={<AboutContent />} />
        <Card
          title={'Projects'}
          subtitle={'Yogyakarta, Indonesia'}
          content={<ProjectContent />}
          sponsor
        />
        <Card title={'Tech Stack'} subtitle={'Makkah, Saudi Arabia'} content={<TechContent />} />
        <Card title={'Contact Me'} subtitle={'Tokyo, Japan'} content={<ContactContent />} />
        <Card
          title={'Ahmad Nizar'}
          subtitle={'Yogyakarta, Indonesia'}
          content={<ThanksContent />}
        />
      </div>
    </div>
  )
}

export default App
