import { Bookmark } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/useToast'

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
  const { toast } = useToast()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const newBookmarked = !isBookmarked
    setIsBookmarked(newBookmarked)
    onBookmarkChange?.(newBookmarked)

    // Toast 메시지 표시
    toast({
      title: newBookmarked ? '북마크에 추가했습니다' : '북마크에서 제거했습니다',
      description: newBookmarked
        ? '마이페이지에서 확인할 수 있습니다.'
        : '언제든지 다시 추가할 수 있습니다.',
    })
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
