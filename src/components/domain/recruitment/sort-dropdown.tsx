import { SortDesc } from 'lucide-react'
import { type Dispatch, type SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const SORT_OPTIONS = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
] as const

export type SortOption = (typeof SORT_OPTIONS)[number]['value']

interface SortDropdownProps {
  selectedSort: SortOption
  setSelectedSort: Dispatch<SetStateAction<SortOption>>
}

export default function SortDropdown({ selectedSort, setSelectedSort }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full data-[state=open]:bg-gray-100"
        >
          <SortDesc className="h-4 w-4" />
          <span className="sr-only">
            {SORT_OPTIONS.find(option => option.value === selectedSort)?.label || '정렬'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {SORT_OPTIONS.map(option => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setSelectedSort(option.value)}
            className={selectedSort === option.value ? 'bg-gray-100' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
