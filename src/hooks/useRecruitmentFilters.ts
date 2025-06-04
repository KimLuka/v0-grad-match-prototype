import { useCallback, useMemo, useState } from 'react'

import type { Recruitment } from '@/types/recruitment'
import { MOCK_RECRUITMENTS } from '@/mocks/recruitments'

export interface FilterState {
  fieldOfStudy?: string
  university?: string
  degree?: string
  deadline?: Date
  hasScholarship: boolean
  sortBy: 'latest' | 'popular'
  searchQuery?: string
}

export function useRecruitmentFilters() {
  const [filters, setFilters] = useState<FilterState>({
    hasScholarship: false,
    sortBy: 'latest',
  })

  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters({
      hasScholarship: false,
      sortBy: 'latest',
    })
  }, [])

  const filteredRecruitments = useMemo(() => {
    let result = [...MOCK_RECRUITMENTS]

    // 검색 쿼리 필터링
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      result = result.filter(
        recruitment =>
          recruitment.lab.toLowerCase().includes(query) ||
          recruitment.professor.toLowerCase().includes(query) ||
          recruitment.tags.some(tag => tag.toLowerCase().includes(query)) ||
          recruitment.title.toLowerCase().includes(query)
      )
    }

    // 연구 분야 필터링
    if (filters.fieldOfStudy) {
      result = result.filter(recruitment => recruitment.fieldOfStudy === filters.fieldOfStudy)
    }

    // 대학교 필터링
    if (filters.university) {
      result = result.filter(recruitment => recruitment.university === filters.university)
    }

    // 학위 필터링
    if (filters.degree) {
      result = result.filter(recruitment => recruitment.degree === filters.degree)
    }

    // 장학금 필터링
    if (filters.hasScholarship) {
      result = result.filter(recruitment => recruitment.scholarship)
    }

    // 마감일 필터링
    if (filters.deadline) {
      const deadlineStr = filters.deadline.toISOString().split('T')[0]
      result = result.filter(recruitment => {
        const recruitmentDeadline = new Date(recruitment.applicationPeriod.end)
          .toISOString()
          .split('T')[0]
        return recruitmentDeadline <= deadlineStr
      })
    }

    // 정렬
    if (filters.sortBy === 'latest') {
      result.sort((a, b) => {
        const aDate = new Date(a.applicationPeriod.start)
        const bDate = new Date(b.applicationPeriod.start)
        return bDate.getTime() - aDate.getTime()
      })
    } else if (filters.sortBy === 'popular') {
      // 임시로 id 기준 정렬 (실제로는 조회수나 인기도 기준)
      result.sort((a, b) => parseInt(a.id) - parseInt(b.id))
    }

    return result
  }, [filters])

  return {
    filters,
    filteredRecruitments,
    updateFilter,
    clearFilters,
    totalCount: filteredRecruitments.length,
  }
}
