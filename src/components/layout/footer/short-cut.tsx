'use client'

import { Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

type SocialLink = {
  href: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  imageSrc?: string
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://unie.kr/',
    label: 'UNIE',
    imageSrc: '/logos/unie-symbol.png',
  },
  {
    href: 'https://www.instagram.com/unie.kr/',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'mailto:contact@gradmatch.com',
    label: 'Email',
    icon: Mail,
  },
]

export function ShortCut() {
  return (
    <div className="flex justify-center space-x-4">
      {SOCIAL_LINKS.map(social => (
        <Button
          key={social.href}
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full border  transition-all duration-200 border-gray-300 bg-white text-primary"
          asChild
        >
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            {social.imageSrc ? (
              <Image
                src={social.imageSrc}
                alt={social.label}
                width={20}
                height={20}
                className="h-5 w-5"
                onError={(e) => {
                  const target = e.target as HTMLElement
                  const button = target.closest('button')
                  if (button) button.style.display = 'none'
                }}
              />
            ) : social.icon && (
              <social.icon className="h-5 w-5" />
            )}
            <span className="sr-only">{social.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}
