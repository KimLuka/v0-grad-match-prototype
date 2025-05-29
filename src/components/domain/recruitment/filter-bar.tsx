'use client'

import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useIsMobile } from '@/hooks/use-mobile'

import SortDropdown, { type SortOption } from './sort-dropdown'

const RESEARCH_FIELDS = [
  '인공지능',
  '빅데이터',
  '컴퓨터비전',
  '자연어처리',
  '로보틱스',
  '사이버보안',
] as const

const UNIVERSITIES = [
  '서울대학교',
  '연세대학교',
  '고려대학교',
  '한양대학교',
  '성균관대학교',
  '서강대학교',
] as const

const DEGREES = ['석사', '박사', '석박사통합'] as const

export default function FilterBar() {
  const [date, setDate] = useState<Date>()
  const [selectedField, setSelectedField] = useState<string>()
  const [selectedUniversity, setSelectedUniversity] = useState<string>()
  const [selectedDegree, setSelectedDegree] = useState<string>()
  const [selectedSort, setSelectedSort] = useState<SortOption>('latest')
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
                        {selectedField || '연구 분야'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {RESEARCH_FIELDS.map(field => (
                        <DropdownMenuItem
                          key={field}
                          onClick={() => setSelectedField(field)}
                          className={selectedField === field ? 'bg-gray-100' : ''}
                        >
                          {field}
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
                        {selectedUniversity || '학교'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {UNIVERSITIES.map(university => (
                        <DropdownMenuItem
                          key={university}
                          onClick={() => setSelectedUniversity(university)}
                          className={selectedUniversity === university ? 'bg-gray-100' : ''}
                        >
                          {university}
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
                        {selectedDegree || '학위'}
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {DEGREES.map(degree => (
                        <DropdownMenuItem
                          key={degree}
                          onClick={() => setSelectedDegree(degree)}
                          className={selectedDegree === degree ? 'bg-gray-100' : ''}
                        >
                          {degree}
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
              variant="outline"
              className="rounded-full data-[state=open]:bg-gray-700 data-[state=open]:text-white"
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
