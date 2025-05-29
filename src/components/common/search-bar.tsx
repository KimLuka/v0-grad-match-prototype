'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import type React from 'react'
import { useState } from 'react'

import { Input } from '@/components/ui/input'

interface SearchBarProps {
  onSearch?: (query: string) => void
  placeholder?: string
  autoFocus?: boolean
}

export function SearchBar({
  onSearch,
  placeholder = '연구분야, 연구실, 대학 이름으로 검색',
  autoFocus,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      if (typeof window !== 'undefined') {
        const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]')
        const updated = [
          searchQuery,
          ...recent.filter((item: string) => item !== searchQuery),
        ].slice(0, 5)
        localStorage.setItem('recentSearches', JSON.stringify(updated))
      }

      onSearch?.(searchQuery)
      router.push(`/search/recruitments?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary outline-none" />
        <Input
          type="search"
          placeholder={placeholder}
          className="w-full rounded-full border-primary pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          autoFocus={autoFocus}
        />
      </div>
    </form>
  )
}
