'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

import { type University } from '@/constants/universities'
import { cn } from '@/utils/cn'

const universityLogoVariants = cva('relative flex-shrink-0', {
  variants: {
    size: {
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-14 w-14',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const universityLogoWrapperVariants = cva('flex flex-shrink-0 items-center justify-center gap-2', {
  variants: {
    size: {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
      xl: 'h-16',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

interface UniversityLogoProps extends VariantProps<typeof universityLogoVariants> {
  university: University
  className?: string
}

export function UniversityLogo({ university, size, className }: UniversityLogoProps) {
  return (
    <div className={cn(universityLogoVariants({ size, className }))}>
      <Image
        src={university.symbol}
        alt={`${university.label} logo`}
        fill
        className="object-contain"
        onError={e => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent) {
            const initials = university.label.replace('대학교', '').slice(0, 2)
            parent.innerHTML = `<div class="${cn(universityLogoVariants({ size }), 'bg-primary/20 rounded-lg flex items-center justify-center text-xs font-bold text-primary')}">${initials}</div>`
          }
        }}
      />
    </div>
  )
}

export function UniversityLogoWithLabel({ university, size, className }: UniversityLogoProps) {
  return (
    <div className={cn(universityLogoWrapperVariants({ size, className }))}>
      <UniversityLogo university={university} size={size} />
      <span className="text-sm font-medium text-muted-foreground">{university.label}</span>
    </div>
  )
}
