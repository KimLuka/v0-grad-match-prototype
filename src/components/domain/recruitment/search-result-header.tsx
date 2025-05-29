import { Search } from 'lucide-react'

interface SearchResultHeaderProps {
  searchQuery: string
}

export function SearchResultHeader({ searchQuery }: SearchResultHeaderProps) {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-10 sm:py-0 sm:pb-14">
      <div className="flex flex-col">
        <h1 className="sr-only">대학원생 모집공고</h1>

        <div className="flex items-center gap-4 border-b-2 border-primary pb-4 sm:gap-6 sm:pb-6">
          <Search className="ml-2 h-6 w-6 shrink-0 text-primary sm:ml-4 sm:h-8 sm:w-8" />
          <h2 className="line-clamp-1 text-lg font-bold sm:text-2xl">{searchQuery}</h2>
        </div>
      </div>
    </section>
  )
}
