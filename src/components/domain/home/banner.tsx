'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Carousel, type CarouselApi } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import Autoplay from 'embla-carousel-autoplay'

const bannerItems = [
  {
    id: 1,
    title: '지원자 풀',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/search/applicants',
  },
  {
    id: 2,
    title: '마이페이지',
    image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/profile',
  },
  {
    id: 3,
    title: '모집 공고',
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/search/recruitments',
  },
]

export function Banner() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const autoplayOptions = {
    delay: 4500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  }

  useEffect(() => {
    if (!api) return

    setIsLoaded(true)
    setActiveIndex(api.selectedScrollSnap())

    api.on('select', () => {
      setActiveIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative mb-16 w-full overflow-hidden">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] pointer-events-none hidden md:block" />
      <Carousel
        opts={{
          loop: true,
          align: 'center',
          containScroll: 'trimSnaps',
          startIndex: 1,
        }}
        plugins={[Autoplay(autoplayOptions)]}
        setApi={setApi}
        className={cn('transition-opacity duration-1000', isLoaded ? 'opacity-100' : 'opacity-0')}
      >
        <Carousel.Content className="-ml-4">
          {bannerItems.map((item, index) => (
            <Carousel.Item
              key={item.id}
              className="relative md:h-80 pl-4 h-56 basis-[60%] md:basis-[70%]"
            >
              <Link href={item.link} className="relative block h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className={cn(
                    'absolute inset-0 transition-opacity duration-300',
                    activeIndex === index ? 'bg-black/0' : 'bg-black/50'
                  )}
                />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Button
          variant="outline"
          className="absolute rounded-full left-4 md:left-20 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 h-12 w-12 p-0 inline-flex items-center justify-center"
          asChild
        >
          <Carousel.Previous>
            <ChevronLeft className="h-4 w-4 md:h-8 md:w-8" />
            <span className="sr-only">이전 슬라이드</span>
          </Carousel.Previous>
        </Button>
        <Button
          variant="outline"
          className="absolute rounded-full right-4 md:right-20 top-1/2 -translate-y-1/2 bg-white opacity-80 hover:opacity-100 h-12 w-12 p-0 inline-flex items-center justify-center"
          asChild
        >
          <Carousel.Next>
            <ChevronRight className="h-4 w-4 md:h-8 md:w-8" />
            <span className="sr-only">다음 슬라이드</span>
          </Carousel.Next>
        </Button>
      </Carousel>
    </div>
  )
}
