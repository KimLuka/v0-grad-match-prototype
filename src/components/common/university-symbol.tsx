'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { useState } from 'react'

import { type University } from '@/constants/universities'
import { cn } from '@/utils/cn'

const symbolVariants = cva('relative flex-shrink-0', {
  variants: {
    size: {
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-10 w-10',
      xl: 'h-14 w-14',
    },
  },
  defaultVariants: { size: 'sm' },
})

const wrapperVariants = cva('flex flex-shrink-0 items-center justify-center gap-2', {
  variants: {
    size: {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
      xl: 'h-16',
    },
  },
  defaultVariants: { size: 'sm' },
})

interface UniversitySymbolProps extends VariantProps<typeof symbolVariants> {
  university: University
  className?: string
}

function UniversityInitials({ university, size }: UniversitySymbolProps) {
  const initials = university.label.replace('대학교', '').slice(0, 2)

  return (
    <div
      className={cn(
        symbolVariants({ size }),
        'flex items-center justify-center rounded-lg bg-primary/20 text-xs font-bold text-primary'
      )}
    >
      {initials}
    </div>
  )
}

export function UniversitySymbol({ university, size, className }: UniversitySymbolProps) {
  const [isImageError, setIsImageError] = useState(false)

  return (
    <div className={cn(symbolVariants({ size }), className)}>
      {isImageError ? (
        <UniversityInitials university={university} size={size} />
      ) : (
        <Image
          src={university.symbol}
          alt={`${university.label} logo`}
          fill
          className="object-contain"
          onError={() => setIsImageError(true)}
        />
      )}
    </div>
  )
}

export function UniversitySymbolWithLabel({ university, size, className }: UniversitySymbolProps) {
  return (
    <div className={cn(wrapperVariants({ size }), className)}>
      <UniversitySymbol university={university} size={size} />
      <span className="text-sm font-medium text-muted-foreground">{university.label}</span>
    </div>
  )
}
