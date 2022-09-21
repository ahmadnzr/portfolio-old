import React, { useCallback, useState } from 'react'
import PhotoCard from '../../assets/photos/photo-circle.png'
import { HeartIcon as HeartIconFull } from '@heroicons/react/24/solid'
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/24/outline'

interface Props {
  id: string
  title: string
  subtitle: string
  content: React.ReactNode
  sponsor?: boolean
  nextSection?: string
}

const Card = ({ id, title, subtitle, content, sponsor = false, nextSection = '' }: Props) => {
  const [like, setLike] = useState<boolean>(true)

  const toggleLike = useCallback(() => {
    setLike((like) => !like)
  }, [])

  return (
    <div
      className='h-cardSmall md:h-cardMedium md:w-1/2 min-h-min flex flex-col mt-2 md:shadow-md scroll-m-12 snap-start'
      id={id}
    >
      <div className='flex items-center justify-between bg-white dark:bg-black dark:text-white px-4 py-1'>
        <img className='h-12' src={PhotoCard} alt='' />
        <div className='flex-1 mx-2'>
          <strong className='block text-lg capitalize'>{title}</strong>
          <span className='capitalize text-sm'>{subtitle}</span>
        </div>
        <EllipsisVerticalIcon className='h-6 dark:text-white' />
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
            <HeartIcon className='h-6 cursor-pointer' onClick={toggleLike} />
          ) : (
            <HeartIconFull
              className='h-6 cursor-pointer text-red-400 animate-pulse'
              onClick={toggleLike}
            />
          )}
          <ChatBubbleOvalLeftIcon className='h-6 cursor-pointer' />
          <PaperAirplaneIcon className='h-6 cursor-pointer' />
        </div>
        <div>
          <a href={`#${nextSection}`} className='cursor-pointer'>
            <ChevronDownIcon className='h-6' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
