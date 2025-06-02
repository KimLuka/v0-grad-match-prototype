import { Bookmark } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

interface BookmarkButtonProps {
  iconClassName?: string
  fillColor?: string
  iconSize?: number
  onBookmarkChange?: (isBookmarked: boolean) => void
  initialBookmarked?: boolean
  variant?: 'link' | 'outline' | 'default' | 'ghost' | 'outlinePrimary' | 'secondary'
  size?: 'icon' | 'default' | 'sm' | 'lg' | 'icon'
}

export function BookmarkButton({
  iconClassName = 'text-primary-foreground',
  fillColor = 'white',
  iconSize = 24,
  onBookmarkChange,
  initialBookmarked = false,
  variant,
  size,
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialBookmarked)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newBookmarked = !isBookmarked
    setIsBookmarked(newBookmarked)
    onBookmarkChange?.(newBookmarked)
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      <Bookmark
        className={iconClassName}
        fill={isBookmarked ? fillColor : 'none'}
        size={iconSize}
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      />
      <span className="sr-only">저장</span>
    </Button>
  )
}
