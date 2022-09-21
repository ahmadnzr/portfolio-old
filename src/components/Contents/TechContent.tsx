import React from 'react'
import {
  BOOTSTRAP,
  CSS,
  FIGMA,
  GITHUB,
  HTML,
  INKSCAPE,
  LINUX,
  NEXT,
  NODEJS,
  POSTMAN,
  REACT,
  TAILWIND,
  TYPESCRIPT,
  VSCODE,
} from './techimage'

const TechContent = () => {
  return (
    <div className='h-full flex items-center justify-center '>
      <div className='w-4/5 flex flex-wrap gap-3 items-center justify-center'>
        <img src={GITHUB} alt='' className='h-10' />
        <img src={HTML} alt='' className='h-10' />
        <img src={CSS} alt='' className='h-10' />
        <img src={FIGMA} alt='' className='h-10' />
        <img src={REACT} alt='' className='h-10' />
        <img src={NEXT} alt='' className='h-10' />
        <img src={INKSCAPE} alt='' className='h-10' />
        <img src={POSTMAN} alt='' className='h-10' />
        <img src={TYPESCRIPT} alt='' className='h-10' />
        <img src={NODEJS} alt='' className='h-10' />
        <img src={TAILWIND} alt='' className='h-10' />
        <img src={BOOTSTRAP} alt='' className='h-10' />
        <img src={LINUX} alt='' className='h-10' />
        <img src={VSCODE} alt='' className='h-10' />
      </div>
    </div>
  )
}

export default TechContent
