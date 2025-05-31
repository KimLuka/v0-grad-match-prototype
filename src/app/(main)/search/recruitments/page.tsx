'use client'

import { useSearchParams } from 'next/navigation'

import FilterBar from '@/components/domain/recruitment/filter-bar'
import RecruitmentList from '@/components/domain/recruitment/recruitment-list'
import { SearchResultHeader } from '@/components/domain/recruitment/search-result-header'

export default function RecruitmentSearchPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')

  return (
    <div className="min-h-screen bg-gray-50 pb-20 sm:pt-14">
      {searchQuery && <SearchResultHeader searchQuery={searchQuery} />}

      <FilterBar />
      <RecruitmentList />
    </div>
  )
}
