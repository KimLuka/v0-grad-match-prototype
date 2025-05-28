'use client'

import Image from 'next/image'

import { type University } from '@/constants/universities'

interface UniversityLogoProps {
  university: University
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const LOGO_SIZES = {
  sm: {
    container: 'h-6 w-6',
    wrapper: 'h-8'
  },
  md: {
    container: 'h-8 w-8',
    wrapper: 'h-10'
  },
  lg: {
    container: 'h-10 w-10',
    wrapper: 'h-12'
  },
  xl: {
    container: 'h-14 w-14',
    wrapper: 'h-16'
  }
}

export function UniversityLogo({ university, size = 'sm' }: UniversityLogoProps) {
  const sizes = LOGO_SIZES[size]
  
  return (
    <div className={`relative ${sizes.container} flex-shrink-0`}>
      <Image
        src={university.logo}
        alt={`${university.label} logo`}
        fill
        className="object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            const initials = university.label
              .replace('대학교', '')
              .slice(0, 2)
            parent.innerHTML = `<div class="${sizes.container} bg-primary/20 rounded-lg flex items-center justify-center text-xs font-bold text-primary">${initials}</div>`
          }
        }}
      />
    </div>
  )
}

export function UniversityLogoWithLabel({ university, size = 'sm' }: UniversityLogoProps) {
  const sizes = LOGO_SIZES[size]
  
  return (
    <div className={`flex ${sizes.wrapper} flex-shrink-0 items-center justify-center gap-2`}>
      <UniversityLogo university={university} size={size} />
      <span className="text-sm font-medium text-muted-foreground">{university.label}</span>
    </div>
  )
} 