import { useCallback, useMemo, useState } from 'react'

import type { Applicant } from '@/types/applicant'
import { MOCK_APPLICANTS } from '@/mocks/applicants'

export interface ApplicantFilterState {
  fieldOfStudy?: string
  degree?: string
  topikLevel?: string
  major?: string
  sortBy: 'latest' | 'popular'
  searchQuery?: string
}

export function useApplicantFilters() {
  const [filters, setFilters] = useState<ApplicantFilterState>({
    sortBy: 'latest',
  })

  const updateFilter = useCallback((key: keyof ApplicantFilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters({
      sortBy: 'latest',
    })
  }, [])

  const filteredApplicants = useMemo(() => {
    let result = [...MOCK_APPLICANTS]

    // 검색 쿼리 필터링
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(
        applicant =>
          applicant.name.toLowerCase().includes(query) ||
          applicant.nationality.toLowerCase().includes(query) ||
          applicant.interests.some(interest => interest.toLowerCase().includes(query)) ||
          applicant.major.toLowerCase().includes(query) ||
          applicant.education.toLowerCase().includes(query)
      )
    }

    // 관심 분야 필터링
    if (filters.fieldOfStudy) {
      result = result.filter(applicant => applicant.fieldOfStudy === filters.fieldOfStudy)
    }

    // 학위 필터링
    if (filters.degree) {
      result = result.filter(applicant => applicant.desiredDegree === filters.degree)
    }

    // TOPIK 등급 필터링
    if (filters.topikLevel) {
      result = result.filter(applicant => applicant.topikLevel === filters.topikLevel)
    }

    // 전공 필터링
    if (filters.major) {
      result = result.filter(applicant =>
        applicant.major.toLowerCase().includes(filters.major!.toLowerCase())
      )
    }

    // 정렬
    if (filters.sortBy === 'latest') {
      // 임시로 id 기준 정렬 (실제로는 등록일순)
      result.sort((a, b) => parseInt(b.id) - parseInt(a.id))
    } else if (filters.sortBy === 'popular') {
      // 임시로 논문 수 기준 정렬 (실제로는 조회수나 인기도 기준)
      result.sort((a, b) => (b.publications || 0) - (a.publications || 0))
    }

    return result
  }, [filters])

  return {
    filters,
    filteredApplicants,
    updateFilter,
    clearFilters,
    totalCount: filteredApplicants.length,
  }
}
