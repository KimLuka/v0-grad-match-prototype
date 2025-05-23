'use client'

import { Filter, Search, X } from 'lucide-react'
import { useState } from 'react'

import { ApplicantCard } from '@/components/domain/applicant/applicant-card'
import { ApplicantFilters } from '@/components/domain/applicant/applicant-filters'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ApplicantSearchPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">지원자 풀</h1>
            <p className="text-muted-foreground">
              한국 대학원 프로그램에 관심 있는 우수한 지원자들을 만나보세요
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
                      <ApplicantFilters />
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
              <Input placeholder="이름, 국적, 관심분야로 검색..." className="w-full pl-10" />
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
            <ApplicantCard
              name="김지민"
              nationality="미국"
              desiredDegree="박사과정"
              topikLevel="5급"
              interests={['인공지능', '머신러닝', '컴퓨터 비전']}
              education="MIT 컴퓨터공학 학사"
            />
            <ApplicantCard
              name="리웨이"
              nationality="중국"
              desiredDegree="석사과정"
              topikLevel="4급"
              interests={['경영전략', '마케팅', '국제경영']}
              education="베이징대학교 경영학 학사"
            />
            <ApplicantCard
              name="존 스미스"
              nationality="영국"
              desiredDegree="박사과정"
              topikLevel="3급"
              interests={['생명공학', '분자생물학', '유전학']}
              education="옥스포드 대학교 생물학 학사"
            />
            <ApplicantCard
              name="다나카 히로시"
              nationality="일본"
              desiredDegree="석사과정"
              topikLevel="6급"
              interests={['로봇공학', '자동화', '제어시스템']}
              education="도쿄대학교 기계공학 학사"
            />
            <ApplicantCard
              name="응우옌 티 란"
              nationality="베트남"
              desiredDegree="박사과정"
              topikLevel="4급"
              interests={['국제관계', '동아시아학', '정치학']}
              education="하노이국립대학교 정치학 학사"
            />
            <ApplicantCard
              name="마리아 가르시아"
              nationality="스페인"
              desiredDegree="석사과정"
              topikLevel="3급"
              interests={['화학공학', '나노소재', '에너지']}
              education="마드리드 공과대학교 화학공학 학사"
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
