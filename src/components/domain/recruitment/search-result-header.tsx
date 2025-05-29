'use client'

import { Search } from 'lucide-react'
import { useEffect } from 'react'

import { useSearch } from '@/hooks/useSearch'

interface SearchResultHeaderProps {
  searchQuery: string
}

export function SearchResultHeader({ searchQuery }: SearchResultHeaderProps) {
  const {
    searchQuery: query,
    setSearchQuery,
    handleSubmit,
  } = useSearch({
    initialQuery: searchQuery,
  })

  // searchQuery prop이 변경될 때 내부 상태 동기화
  useEffect(() => {
    setSearchQuery(searchQuery)
  }, [searchQuery, setSearchQuery])

  return (
    <section className="container mx-auto max-w-7xl px-6 py-10 sm:py-0 sm:pb-14">
      <div className="flex min-w-fit max-w-2xl flex-col px-12 sm:mx-auto">
        <h1 className="sr-only">대학원생 모집공고</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 border-b-2 border-primary pb-2 sm:gap-5 sm:pb-3">
            <Search className="ml-2 h-6 w-6 shrink-0 text-primary sm:ml-4 sm:h-8 sm:w-8" />
            <input
              type="text"
              value={query}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="연구분야, 연구실, 대학 이름으로 검색"
              className="w-full border-none bg-transparent p-0 pr-4 text-lg font-bold shadow-none outline-none ring-0 placeholder:text-muted-foreground/50 focus:outline-none sm:text-2xl"
              aria-label="검색어 입력"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
