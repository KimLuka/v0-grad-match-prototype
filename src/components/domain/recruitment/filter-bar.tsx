'use client'

import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

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

import SortDropdown, { type SortOption } from './sort-dropdown'

type ResearchField = (typeof FIELD_OF_STUDY)[number]['value']
type University = (typeof UNIVERSITIES)[number]['value']
type Degree = (typeof DEGREES)[number]['value']

export default function FilterBar() {
  const [date, setDate] = useState<Date>()
  const [selectedField, setSelectedField] = useState<ResearchField>()
  const [selectedUniversity, setSelectedUniversity] = useState<University>()
  const [selectedDegree, setSelectedDegree] = useState<Degree>()
  const [selectedSort, setSelectedSort] = useState<SortOption>('latest')
  const [hasScholarship, setHasScholarship] = useState(false)
  const [_isOpen, _setIsOpen] = useState(false)
  const [_selectedFilters, _setSelectedFilters] = useState<string[]>([])
  const _isMobile = useIsMobile()

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
                        className="whitespace-nowrap data-[state=open]:bg-gray-100"
                      >
                        {selectedField
                          ? FIELD_OF_STUDY.find(field => field.value === selectedField)?.label
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
                          onClick={() => setSelectedField(field.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={selectedField === field.value}
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
                        className="whitespace-nowrap data-[state=open]:bg-gray-100"
                      >
                        {selectedUniversity
                          ? UNIVERSITIES.find(uni => uni.value === selectedUniversity)?.label
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
                          onClick={() => setSelectedUniversity(university.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={selectedUniversity === university.value}
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
                        className="whitespace-nowrap data-[state=open]:bg-gray-100"
                      >
                        {selectedDegree
                          ? DEGREES.find(deg => deg.value === selectedDegree)?.label
                          : '학위'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="max-w-60">
                      {DEGREES.map(degree => (
                        <DropdownMenuItem
                          key={degree.value}
                          onClick={() => setSelectedDegree(degree.value)}
                          className="flex items-center gap-2 px-2 py-1.5"
                        >
                          <Checkbox
                            checked={selectedDegree === degree.value}
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
                        className="whitespace-nowrap data-[state=open]:bg-gray-100"
                      >
                        {date ? format(date, 'yyyy.MM.dd', { locale: ko }) : '마감일'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
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
              variant={hasScholarship ? 'default' : 'outlinePrimary'}
              className="rounded-full transition-colors"
              onClick={() => setHasScholarship(!hasScholarship)}
            >
              장학금
            </Button>
            <SortDropdown selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
          </div>
        </div>
      </div>
    </section>
  )
}
