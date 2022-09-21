import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'

import LeftMenu from './components/LeftMenu'
import { ThemeContext } from './context/ThemeContext'
import Card from './components/Card'
import AboutContent from './components/Contents/AboutContent'
import ProjectContent from './components/Contents/ProjectContent'
import TechContent from './components/Contents/TechContent'
import ContactContent from './components/Contents/ContactContent'
import ThanksContent from './components/Contents/ThanksContent'
import Hero from './components/Hero'

const App = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`${theme} h-screen w-screen text-slate-700 overflow-x-hidden scroll-smooth snap-y`}
    >
      <Navbar toggleMenu={() => setShowMenu(!showMenu)} />
      <LeftMenu showMenu={showMenu} hideMenu={() => setShowMenu(false)} />
      <div className='bg-gradient-to-t from-green-100 to-white  dark:from-green-900 dark:to-black'>
        <Hero />
        <div className='md:w-full md:flex flex-col items-center justify-center'>
          <Card
            id='about'
            title={'About'}
            subtitle={'Lombok, Indonesia'}
            content={<AboutContent />}
            nextSection='projects'
          />
          <Card
            id='projects'
            title={'Projects'}
            subtitle={'Yogyakarta, Indonesia'}
            content={<ProjectContent />}
            nextSection='tech'
            sponsor
          />
          <Card
            id='tech'
            title={'Tech Stack'}
            subtitle={'Makkah, Saudi Arabia'}
            content={<TechContent />}
            nextSection='contact'
          />
          <Card
            id='contact'
            title={'Contact Me'}
            subtitle={'Tokyo, Japan'}
            content={<ContactContent />}
            nextSection='thanks'
          />
          <Card
            id='thanks'
            title={'Ahmad Nizar'}
            subtitle={'Yogyakarta, Indonesia'}
            content={<ThanksContent />}
          />
        </div>
      </div>
    </div>
  )
}

export default App
