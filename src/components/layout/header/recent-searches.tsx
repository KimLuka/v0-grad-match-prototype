import { X } from 'lucide-react'

import styles from '@/styles/scroll.module.css'

interface RecentSearchesProps {
  searches: string[]
  onSearchClick: (term: string) => void
  onDeleteSearch: (term: string) => void
}

export function RecentSearches({ searches, onSearchClick, onDeleteSearch }: RecentSearchesProps) {
  if (searches.length === 0) return null

  return (
    <div className={`max-h-fit overflow-y-auto bg-background px-5 py-7 ${styles.hide}`}>
      <div className="container mx-auto max-w-7xl">
        <h3 className="mb-6 text-base font-bold text-primary sm:text-lg">최근 검색어</h3>
        <ul className="flex flex-col gap-4">
          {searches.map(term => (
            <li key={term} className="flex items-center justify-between">
              <button
                className="w-full truncate text-left text-sm transition-colors hover:opacity-60 sm:text-base"
                onClick={() => onSearchClick(term)}
              >
                {term}
              </button>
              <button
                className="rounded-r-full px-2 py-1 text-xs transition-colors hover:opacity-60"
                onClick={() => onDeleteSearch(term)}
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
