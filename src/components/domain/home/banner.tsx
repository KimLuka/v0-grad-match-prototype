'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

const bannerItems = [
  {
    id: 1,
    title: 'Fall 2024 Applications Now Open',
    description: 'Apply to top Korean universities for the Fall 2024 semester',
    image: '/placeholder.svg?height=400&width=800',
    link: '/search/recruitments?term=fall2024',
  },
  {
    id: 2,
    title: 'Scholarship Opportunities',
    description: 'Discover fully-funded scholarship programs for international students',
    image: '/placeholder.svg?height=400&width=800',
    link: '/scholarships',
  },
  {
    id: 3,
    title: 'Virtual Open House',
    description: 'Join our upcoming virtual open house with Korean university representatives',
    image: '/placeholder.svg?height=400&width=800',
    link: '/events/open-house',
  },
]

export function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % bannerItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + bannerItems.length) % bannerItems.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative mb-16 h-[400px] w-full overflow-hidden rounded-xl">
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <Image
            src={item.image || '/placeholder.svg'}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h2 className="mb-4 max-w-2xl text-3xl font-bold text-white">{item.title}</h2>
            <p className="mb-6 max-w-xl text-white/90">{item.description}</p>
            <Button asChild>
              <Link href={item.link}>Learn More</Link>
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
