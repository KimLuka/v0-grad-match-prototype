import { Bookmark } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

interface BookmarkButtonProps {
  iconClassName?: string
  fillColor?: string
  iconSize?: number
  onBookmarkChange?: (isBookmarked: boolean) => void
  initialBookmarked?: boolean
}

export function BookmarkButton({
  iconClassName = 'text-primary-foreground',
  fillColor = 'white',
  iconSize = 24,
  onBookmarkChange,
  initialBookmarked = false,
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
    <Button variant="link" size="icon" onClick={handleClick}>
      <Bookmark
        className={iconClassName}
        fill={isBookmarked ? fillColor : 'none'}
        size={iconSize}
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
      />
    </Button>
  )
}
