'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  '/carousel/carousel.png',
  '/carousel/carousel2.png',
  '/carousel/carousel3.png',
  '/carousel/carousel4.png',
  '/carousel/carousel5.png'
]
const Carousel = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <div className="conatainer mx-auto relative max-w-7xl h-[30vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-10'
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            objectFit='cover'
          />
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h2 className="text-2xl font-bold">Lab-tested.Industry-approved.</h2>
        <p className="text-lg font-bold">&quot;Results that speak precision&quot;.</p>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-blue-600 text-white px-2 py-2 rounded-full hover:bg-blue-600">
          See More
        </button>
      </div>
    </div>
  )
}

export default Carousel