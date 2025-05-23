'use client'

import { Filter, Search, X } from 'lucide-react'
import { useState } from 'react'

import { RecruitmentCard } from '@/components/domain/recruitment/recruitment-card'
import { SearchFilters } from '@/components/domain/recruitment/search-filters'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RecruitmentSearchPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">모집공고</h1>
            <p className="text-muted-foreground">
              한국 대학교의 대학원 프로그램 모집공고를 둘러보세요
            </p>
          </div>

          {/* Filter Toggle Button */}
          <div className="relative">
            <Button
              variant="outline"
              className="w-fit"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              필터
            </Button>

            {/* Filter Modal Overlay */}
            {isFilterOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/20"
                  onClick={() => setIsFilterOpen(false)}
                />
                <div className="absolute left-0 top-12 z-50 w-full max-w-md">
                  <Card className="border shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">필터</h3>
                        <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <SearchFilters />
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col items-start justify-between gap-4 rounded-lg border bg-white p-4 sm:flex-row sm:items-center">
            <div className="relative max-w-2xl flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="연구실, 교수, 분야로 검색..." className="w-full pl-10" />
            </div>
            <div className="flex items-center gap-3">
              <Tabs defaultValue="recommended" className="w-auto">
                <TabsList>
                  <TabsTrigger value="recommended">추천</TabsTrigger>
                  <TabsTrigger value="popular">인기</TabsTrigger>
                  <TabsTrigger value="latest">최신</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <RecruitmentCard
              lab="인공지능 연구실"
              university="서울대학교"
              professor="김민호 교수"
              deadline="2023-12-31"
              scholarshipAvailable={true}
              fieldOfStudy="인공지능/머신러닝"
              location="서울"
            />
            <RecruitmentCard
              lab="경영전략 연구실"
              university="고려대학교"
              professor="박지원 교수"
              deadline="2023-11-30"
              scholarshipAvailable={true}
              fieldOfStudy="경영학/마케팅"
              location="서울"
            />
            <RecruitmentCard
              lab="머신러닝 연구실"
              university="KAIST"
              professor="이성훈 교수"
              deadline="2023-12-15"
              scholarshipAvailable={true}
              fieldOfStudy="컴퓨터 비전/딥러닝"
              location="대전"
            />
            <RecruitmentCard
              lab="국제관계 연구실"
              university="연세대학교"
              professor="최지영 교수"
              deadline="2023-11-15"
              scholarshipAvailable={true}
              fieldOfStudy="국제학/정치학"
              location="서울"
            />
            <RecruitmentCard
              lab="로봇공학 연구실"
              university="POSTECH"
              professor="강현진 교수"
              deadline="2023-12-01"
              scholarshipAvailable={false}
              fieldOfStudy="로봇공학/제어시스템"
              location="포항"
            />
            <RecruitmentCard
              lab="바이오메디컬 연구실"
              university="한양대학교"
              professor="정민서 교수"
              deadline="2023-12-10"
              scholarshipAvailable={true}
              fieldOfStudy="생명공학/의공학"
              location="서울"
            />
            <RecruitmentCard
              lab="계량경제학 연구실"
              university="서울대학교"
              professor="이지훈 교수"
              deadline="2023-12-20"
              scholarshipAvailable={true}
              fieldOfStudy="경제학/통계학"
              location="서울"
            />
            <RecruitmentCard
              lab="유기화학 연구실"
              university="고려대학교"
              professor="김수민 교수"
              deadline="2023-11-25"
              scholarshipAvailable={false}
              fieldOfStudy="화학/유기합성"
              location="서울"
            />
            <RecruitmentCard
              lab="나노소재 연구실"
              university="성균관대학교"
              professor="박혜성 교수"
              deadline="2023-12-05"
              scholarshipAvailable={true}
              fieldOfStudy="재료공학/나노기술"
              location="수원"
            />
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center pt-8">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">이전 페이지</span>
              </Button>
              <Button variant="outline" size="sm" className="font-medium">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">다음 페이지</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
