import React from 'react'

import { EnvelopeIcon } from '@heroicons/react/24/outline'

const ContactContent = () => {
  return (
    <div className='flex h-full flex-col items-center text-center justify-center gap-3'>
      <span className='w-3/4'>Discuss with me or for any collaboration, please contact me to</span>
      <div className='flex items-center gap-2'>
        <div className='p-1 h-8 w-8 flex items-center justify-center bg-gray-300/30 rounded-full'>
          <EnvelopeIcon className='h-4' />
        </div>
        <strong>ahmad.rpl001@gmail.com</strong>
      </div>
    </div>
  )
}

export default ContactContent
