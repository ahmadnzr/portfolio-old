import React, { useCallback, useState } from 'react'
import PhotoCard from '../../assets/photos/photo-circle.png'
import { HeartIcon as HeartIconFull } from '@heroicons/react/24/solid'
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'

interface Props {
  title: string
  subtitle: string
  content: React.ReactNode
  sponsor?: boolean
}

const Card = ({ title, subtitle, content, sponsor = false }: Props) => {
  const [like, setLike] = useState<boolean>(true)

  const toggleLike = useCallback(() => {
    setLike((like) => !like)
  }, [])

  return (
    <div className='h-cardTwo min-h-min flex flex-col mt-2'>
      <div className='flex items-center justify-between bg-white dark:bg-black dark:text-white px-4 py-1'>
        <img className='h-12' src={PhotoCard} alt='' />
        <div className='flex-1 mx-2'>
          <strong className='block text-lg capitalize'>{title}</strong>
          <span className='capitalize text-sm'>{subtitle}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='h-1 w-1 rounded-full bg-black'></div>
          <div className='h-1 w-1 rounded-full bg-black'></div>
          <div className='h-1 w-1 rounded-full bg-black'></div>
        </div>
      </div>
      <div className='flex-1 bg-gray-100'>{content}</div>
      {sponsor && (
        <div className='bg-sky-700 h-8 flex justify-between items-center px-4 text-white'>
          <span className='text-sm'>Selengkapnya</span>
          <ChevronRightIcon className='h-4' />
        </div>
      )}
      <div className='flex items-center justify-between bg-white dark:bg-black dark:text-white px-4 py-3'>
        <div className='flex gap-2'>
          {like ? (
            <HeartIcon className='h-6' onClick={toggleLike} />
          ) : (
            <HeartIconFull className='h-6 text-red-400' onClick={toggleLike} />
          )}
          <ChatBubbleOvalLeftIcon className='h-6' />
          <PaperAirplaneIcon className='h-6' />
        </div>
        <div>
          <ChevronDownIcon className='h-6' />
        </div>
      </div>
    </div>
  )
}

export default Card
