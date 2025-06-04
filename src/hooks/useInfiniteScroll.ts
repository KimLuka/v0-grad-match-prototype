import { useCallback, useEffect, useState } from 'react'

export function useInfiniteScroll<T>(items: T[], itemsPerPage: number = 10) {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const hasMore = currentPage * itemsPerPage < items.length
  const displayedItems = items.slice(0, currentPage * itemsPerPage)

  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setIsLoading(true)
      // 로딩 시뮬레이션
      setTimeout(() => {
        setCurrentPage(prev => prev + 1)
        setIsLoading(false)
      }, 500)
    }
  }, [hasMore, isLoading])

  // 필터가 변경되면 페이지를 리셋
  useEffect(() => {
    setCurrentPage(1)
  }, [items.length])

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMore])

  return {
    displayedItems,
    hasMore,
    isLoading,
    loadMore,
    currentPage,
  }
}
