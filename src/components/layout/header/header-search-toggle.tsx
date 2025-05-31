'use client'

import { Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SearchBar } from '@/components/common/search-bar'
import { Button } from '@/components/ui/button'

import { RecentSearches } from './recent-searches'

export function HeaderSearchToggle() {
  const [showSearch, setShowSearch] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  useEffect(() => {
    if (showSearch && typeof window !== 'undefined') {
      setRecentSearches(JSON.parse(localStorage.getItem('recentSearches') || '[]'))
    }
  }, [showSearch])

  const deleteRecentSearch = (term: string) => {
    const updated = recentSearches.filter(item => item !== term)
    setRecentSearches(updated)
    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(updated))
    }
  }

  const handleRecentSearchClick = (term: string) => {
    window.location.href = `/search/recruitments?q=${encodeURIComponent(term)}`
    setShowSearch(false)
  }

  return (
    <>
      {showSearch && (
        <div
          className="z-60 fixed inset-0 bg-black/50"
          onClick={e => {
            if (e.target === e.currentTarget) setShowSearch(false)
          }}
        >
          <div className="border-b bg-background">
            <div className="container mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
              <div className="flex-1">
                <SearchBar autoFocus onSearch={() => setShowSearch(false)} />
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <span className="text-gray-400">닫기</span>
              </Button>
            </div>
          </div>

          <RecentSearches
            searches={recentSearches}
            onSearchClick={handleRecentSearchClick}
            onDeleteSearch={deleteRecentSearch}
          />
        </div>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowSearch(!showSearch)}
        className={showSearch ? 'bg-gray-100' : ''}
      >
        {showSearch ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
        <span className="sr-only">{showSearch ? '검색 닫기' : '검색'}</span>
      </Button>
    </>
  )
}
