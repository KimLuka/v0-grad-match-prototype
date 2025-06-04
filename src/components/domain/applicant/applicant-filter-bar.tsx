'use client'

import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DEGREES } from '@/constants/degree'
import { FIELD_OF_STUDY } from '@/constants/field-of-study'
import { useIsMobile } from '@/hooks/use-mobile'
import type { ApplicantFilterState } from '@/hooks/useApplicantFilters'

import SortDropdown, { type SortOption } from '../recruitment/sort-dropdown'

// TOPIK 등급 상수
const TOPIK_LEVELS = [
  { value: '6급', label: '6급' },
  { value: '5급', label: '5급' },
  { value: '4급', label: '4급' },
  { value: '3급', label: '3급' },
  { value: '2급', label: '2급' },
  { value: '1급', label: '1급' },
  { value: '없음', label: '없음' },
] as const

// 주요 전공 상수
const MAJORS = [
  { value: '컴퓨터공학과', label: '컴퓨터공학과' },
  { value: '기계공학과', label: '기계공학과' },
  { value: '전자공학과', label: '전자공학과' },
  { value: '화학공학과', label: '화학공학과' },
  { value: '생물학과', label: '생물학과' },
  { value: '물리학과', label: '물리학과' },
  { value: '수학과', label: '수학과' },
  { value: '경영학과', label: '경영학과' },
  { value: '경제학과', label: '경제학과' },
  { value: '심리학과', label: '심리학과' },
  { value: '정치학과', label: '정치학과' },
  { value: '언어학과', label: '언어학과' },
  { value: '의학과', label: '의학과' },
  { value: '교육학과', label: '교육학과' },
  { value: '건축학과', label: '건축학과' },
  { value: '예술사학과', label: '예술사학과' },
  { value: '음악학과', label: '음악학과' },
] as const

interface ApplicantFilterBarProps {
  filters: ApplicantFilterState
  updateFilter: (key: keyof ApplicantFilterState, value: any) => void
}

export default function ApplicantFilterBar({ filters, updateFilter }: ApplicantFilterBarProps) {
  const _isMobile = useIsMobile()

  const handleFieldChange = (fieldValue: string) => {
    const newValue = filters.fieldOfStudy === fieldValue ? undefined : fieldValue
    updateFilter('fieldOfStudy', newValue)
  }

  const handleDegreeChange = (degreeValue: string) => {
    const newValue = filters.degree === degreeValue ? undefined : degreeValue
    updateFilter('degree', newValue)
  }

  const handleTopikChange = (topikValue: string) => {
    const newValue = filters.topikLevel === topikValue ? undefined : topikValue
    updateFilter('topikLevel', newValue)
  }

  const handleMajorChange = (majorValue: string) => {
    const newValue = filters.major === majorValue ? undefined : majorValue
    updateFilter('major', newValue)
  }

  const handleSortChange = (sortValue: SortOption) => {
    updateFilter('sortBy', sortValue)
  }

  return (
    <section className="sticky top-16 z-40 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="mx-auto flex max-w-screen-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <div
              className="scrollbar-hide overflow-x-auto overflow-y-hidden"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <menu className="flex min-w-max gap-2 whitespace-nowrap pb-1">
                <li className="flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="whitespace-nowrap outline-none data-[state=open]:bg-gray-100"
                      >
                        {filters.fieldOfStudy
                          ? FIELD_OF_STUDY.find(field => field.value === filters.fieldOfStudy)
                              ?.label
                          : '관심 분야'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="max-h-80 max-w-60 overflow-y-auto"
                    >
                      {FIELD_OF_STUDY.map(field => (
                        <DropdownMenuItem
                          key={field.value}
                          onClick={() => handleFieldChange(field.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={filters.fieldOfStudy === field.value}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                          />
                          <span className="truncate">{field.label}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="whitespace-nowrap outline-none data-[state=open]:bg-gray-100"
                      >
                        {filters.degree
                          ? DEGREES.find(deg => deg.value === filters.degree)?.label
                          : '학위'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="max-w-60">
                      {DEGREES.map(degree => (
                        <DropdownMenuItem
                          key={degree.value}
                          onClick={() => handleDegreeChange(degree.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={filters.degree === degree.value}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                          />
                          <span className="truncate">{degree.label}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="whitespace-nowrap outline-none data-[state=open]:bg-gray-100"
                      >
                        {filters.topikLevel || 'TOPIK'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="max-w-60">
                      {TOPIK_LEVELS.map(level => (
                        <DropdownMenuItem
                          key={level.value}
                          onClick={() => handleTopikChange(level.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={filters.topikLevel === level.value}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                          />
                          <span className="truncate">{level.label}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="flex-shrink-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="whitespace-nowrap outline-none data-[state=open]:bg-gray-100"
                      >
                        {filters.major
                          ? MAJORS.find(major => major.value === filters.major)?.label
                          : '졸업 학과'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="max-h-80 max-w-60 overflow-y-auto"
                    >
                      {MAJORS.map(major => (
                        <DropdownMenuItem
                          key={major.value}
                          onClick={() => handleMajorChange(major.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={filters.major === major.value}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                          />
                          <span className="truncate">{major.label}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </menu>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-1">
            <SortDropdown selectedSort={filters.sortBy} setSelectedSort={handleSortChange} />
          </div>
        </div>
      </div>
    </section>
  )
}
