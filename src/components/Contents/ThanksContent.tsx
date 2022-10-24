import React from 'react'

import FB from '../../assets/icons/fb.png'
import GB from '../../assets/icons/github.png'
import IG from '../../assets/icons/instagram.png'
import LN from '../../assets/icons/linkedin.png'
import YT from '../../assets/icons/youtube.png'

const ThanksContent = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3'>
      <strong className='text-2xl uppercase'>thank you.</strong>
      <div className='flex flex-col items-center gap-2'>
        <span>Connect with me</span>
        <div className='flex gap-1'>
          <a
            href='#'
            className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 hover:bg-green-200 rounded-full duration-300'
          >
            <img src={FB} alt='' className='h-4' />
          </a>
          <a
            href='https://www.instagram.com/ahmadnzr__/'
            target={'_blank'}
            rel={'noreferrer'}
            className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 hover:bg-green-200 rounded-full duration-300'
          >
            <img src={IG} alt='' className='h-4' />
          </a>
          <a
            href='https://github.com/ahmadnzr'
            target={'_blank'}
            rel={'noreferrer'}
            className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 hover:bg-green-200 rounded-full duration-300'
          >
            <img src={GB} alt='' className='h-4' />
          </a>
          <a
            href='https://www.linkedin.com/in/ahmadnzr/'
            target={'_blank'}
            rel={'noreferrer'}
            className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 hover:bg-green-200 rounded-full duration-300'
          >
            <img src={LN} alt='' className='h-4' />
          </a>
          <a
            href='#'
            className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 hover:bg-green-200 rounded-full duration-300'
          >
            <img src={YT} alt='' className='h-4' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ThanksContent
