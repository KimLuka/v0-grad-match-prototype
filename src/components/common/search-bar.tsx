'use client'

import { Search } from 'lucide-react'
import type React from 'react'

import { Input } from '@/components/ui/input'
import { useSearch } from '@/hooks/useSearch'

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
  const { searchQuery, setSearchQuery, handleSubmit } = useSearch({ onSearch })

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary outline-none" />
        <Input
          type="text"
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
