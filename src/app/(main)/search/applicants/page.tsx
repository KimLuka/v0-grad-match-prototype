'use client'

import ApplicantFilterBar from '@/components/domain/applicant/applicant-filter-bar'
import ApplicantList from '@/components/domain/applicant/applicant-list'
import { useApplicantFilters } from '@/hooks/useApplicantFilters'

export default function ApplicantSearchPage() {
  const { filters, filteredApplicants, updateFilter } = useApplicantFilters()

  return (
    <div className="min-h-screen bg-gray-50 sm:pt-14">
      <h1 className="sr-only text-3xl font-bold tracking-tight">지원자 풀</h1>
      <p className="sr-only text-muted-foreground">
        한국 대학원 프로그램에 관심 있는 우수한 지원자들을 만나보세요
      </p>

      <ApplicantFilterBar filters={filters} updateFilter={updateFilter} />
      <ApplicantList applicants={filteredApplicants} />
    </div>
  )
}
