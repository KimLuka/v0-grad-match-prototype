'use client'

import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Carousel, type CarouselApi } from '@/components/ui/carousel'
import { cn } from '@/utils/cn'

const bannerItems = [
  {
    id: 1,
    title: '지원자 풀',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/search/applicants',
  },
  {
    id: 2,
    title: '마이페이지',
    image:
      'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/profile',
  },
  {
    id: 3,
    title: '모집 공고',
    image:
      'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1920',
    link: '/search/recruitments',
  },
]

export function Banner() {
  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!api) return

    setIsLoaded(true)
    setActiveIndex(api.selectedScrollSnap())

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap())
    }

    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="relative mb-16 w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10 hidden bg-[linear-gradient(to_right,white_0%,transparent_10%,transparent_90%,white_100%)] md:block" />
      <Carousel
        opts={{
          loop: true,
          align: 'center',
          containScroll: 'trimSnaps',
          startIndex: 1,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
          WheelGesturesPlugin(),
        ]}
        setApi={setApi}
        className={cn('transition-opacity duration-1000', isLoaded ? 'opacity-100' : 'opacity-0')}
      >
        <Carousel.Content className="-ml-4">
          {bannerItems.map((item, index) => (
            <Carousel.Item
              key={item.id}
              className="relative h-56 basis-[60%] pl-4 md:h-80 md:basis-[70%]"
            >
              <Link
                href={item.link}
                className="relative block h-full w-full overflow-hidden rounded-lg"
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" priority />
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
          className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white p-0 opacity-80 hover:opacity-100 md:left-20"
          asChild
        >
          <Carousel.Previous>
            <ChevronLeft className="h-4 w-4 md:h-8 md:w-8" />
            <span className="sr-only">이전 슬라이드</span>
          </Carousel.Previous>
        </Button>
        <Button
          variant="outline"
          className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white p-0 opacity-80 hover:opacity-100 md:right-20"
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
