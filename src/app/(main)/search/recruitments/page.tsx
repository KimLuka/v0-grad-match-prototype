'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import FilterBar from '@/components/domain/recruitment/filter-bar'
import RecruitmentList from '@/components/domain/recruitment/recruitment-list'
import { SearchResultHeader } from '@/components/domain/recruitment/search-result-header'
import { useRecruitmentFilters } from '@/hooks/useRecruitmentFilters'

export default function RecruitmentSearchPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const { filters, filteredRecruitments, updateFilter } = useRecruitmentFilters()

  // 검색 쿼리가 변경될 때 필터 업데이트
  useEffect(() => {
    updateFilter('searchQuery', searchQuery || undefined)
  }, [searchQuery, updateFilter])

  return (
    <div className="min-h-screen bg-gray-50 pb-20 sm:pt-14">
      {searchQuery && <SearchResultHeader searchQuery={searchQuery} />}

      <FilterBar filters={filters} updateFilter={updateFilter} />
      <RecruitmentList recruitments={filteredRecruitments} />
    </div>
  )
}
