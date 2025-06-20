'use client'

import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { DEGREES } from '@/constants/degree'
import { FIELD_OF_STUDY } from '@/constants/field-of-study'
import { UNIVERSITIES } from '@/constants/universities'
import { useIsMobile } from '@/hooks/use-mobile'
import type { FilterState } from '@/hooks/useRecruitmentFilters'

import SortDropdown, { type SortOption } from './sort-dropdown'

interface FilterBarProps {
  filters: FilterState
  updateFilter: (key: keyof FilterState, value: any) => void
}

export default function FilterBar({ filters, updateFilter }: FilterBarProps) {
  const _isMobile = useIsMobile()

  const handleFieldChange = (fieldValue: string) => {
    const newValue = filters.fieldOfStudy === fieldValue ? undefined : fieldValue
    updateFilter('fieldOfStudy', newValue)
  }

  const handleUniversityChange = (universityValue: string) => {
    const newValue = filters.university === universityValue ? undefined : universityValue
    updateFilter('university', newValue)
  }

  const handleDegreeChange = (degreeValue: string) => {
    const newValue = filters.degree === degreeValue ? undefined : degreeValue
    updateFilter('degree', newValue)
  }

  const handleDateChange = (date: Date | undefined) => {
    updateFilter('deadline', date)
  }

  const handleScholarshipToggle = () => {
    const newValue = !filters.hasScholarship
    updateFilter('hasScholarship', newValue)
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
                // TODO: 기존 PR 병합 후 styles 폴더에 분리
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
                          : '연구 분야'}
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
                        {filters.university
                          ? UNIVERSITIES.find(uni => uni.value === filters.university)?.label
                          : '학교'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="max-h-80 max-w-60 overflow-y-auto"
                    >
                      {UNIVERSITIES.map(university => (
                        <DropdownMenuItem
                          key={university.value}
                          onClick={() => handleUniversityChange(university.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={filters.university === university.value}
                            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                          />
                          <span className="truncate">{university.label}</span>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="whitespace-nowrap outline-none data-[state=open]:bg-gray-100"
                      >
                        {filters.deadline
                          ? format(filters.deadline, 'yyyy.MM.dd', { locale: ko })
                          : '마감일'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={filters.deadline}
                        onSelect={handleDateChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </li>
              </menu>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-1">
            <Button
              variant={filters.hasScholarship ? 'default' : 'outlinePrimary'}
              className="rounded-full transition-colors"
              onClick={handleScholarshipToggle}
            >
              장학금
            </Button>
            <SortDropdown selectedSort={filters.sortBy} setSelectedSort={handleSortChange} />
          </div>
        </div>
      </div>
    </section>
  )
}
