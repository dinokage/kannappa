import React from 'react'
import Image from 'next/image'

function Location() {
  return (
    <div className='w-full'>
        <Image src="/location.png" alt="location" width={1000} height={1000} className="w-7xl container mx-auto h-auto" />
        
    </div>
  )
}

export default Location