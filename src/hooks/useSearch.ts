'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useCallback, useState } from 'react'

interface UseSearchOptions {
  onSearch?: (query: string) => void
  initialQuery?: string
}

export function useSearch({ onSearch, initialQuery = '' }: UseSearchOptions = {}) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const router = useRouter()

  const saveToRecentSearches = useCallback((query: string) => {
    if (typeof window !== 'undefined') {
      const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]')
      const updated = [query, ...recent.filter((item: string) => item !== query)].slice(0, 5)
      localStorage.setItem('recentSearches', JSON.stringify(updated))
    }
  }, [])

  const executeSearch = useCallback(
    (query: string) => {
      if (!query.trim()) return

      saveToRecentSearches(query)
      onSearch?.(query)
      router.push(`/search/recruitments?q=${encodeURIComponent(query)}`)
    },
    [saveToRecentSearches, onSearch, router]
  )

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      executeSearch(searchQuery)
    },
    [executeSearch, searchQuery]
  )

  const updateQuery = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  return {
    searchQuery,
    setSearchQuery: updateQuery,
    handleSubmit,
    executeSearch,
  }
}
