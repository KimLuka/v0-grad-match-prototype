"use client"

import { useState } from "react"
import { Filter, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecruitmentCard } from "@/components/recruitment-card"
import { SearchFilters } from "@/components/search-filters"

export default function RecruitmentSearchPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Recruitment Posts</h1>
            <p className="text-muted-foreground">Browse graduate program recruitment posts from Korean universities</p>
          </div>

          {/* Filter Toggle Button */}
          <div className="relative">
            <Button variant="outline" className="w-fit" onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>

            {/* Filter Modal Overlay */}
            {isFilterOpen && (
              <>
                <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsFilterOpen(false)} />
                <div className="absolute top-12 left-0 z-50 w-full max-w-md">
                  <Card className="shadow-lg border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Filters</h3>
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
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-white p-4 rounded-lg border">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by university, professor, or field..." className="pl-10 w-full" />
            </div>
            <div className="flex items-center gap-3">
              <Tabs defaultValue="recommended" className="w-auto">
                <TabsList>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <RecruitmentCard
              university="Seoul National University"
              department="Computer Science"
              professor="Dr. Kim Minho"
              deadline="2023-12-31"
              scholarshipAvailable={true}
              fieldOfStudy="Engineering"
            />
            <RecruitmentCard
              university="Korea University"
              department="Business Administration"
              professor="Dr. Park Jiwon"
              deadline="2023-11-30"
              scholarshipAvailable={true}
              fieldOfStudy="Business"
            />
            <RecruitmentCard
              university="KAIST"
              department="Artificial Intelligence"
              professor="Dr. Lee Sunghoon"
              deadline="2023-12-15"
              scholarshipAvailable={true}
              fieldOfStudy="Engineering"
            />
            <RecruitmentCard
              university="Yonsei University"
              department="International Studies"
              professor="Dr. Choi Jiyoung"
              deadline="2023-11-15"
              scholarshipAvailable={true}
              fieldOfStudy="Social Sciences"
            />
            <RecruitmentCard
              university="POSTECH"
              department="Mechanical Engineering"
              professor="Dr. Kang Hyunjin"
              deadline="2023-12-01"
              scholarshipAvailable={false}
              fieldOfStudy="Engineering"
            />
            <RecruitmentCard
              university="Hanyang University"
              department="Biomedical Engineering"
              professor="Dr. Jung Minseo"
              deadline="2023-12-10"
              scholarshipAvailable={true}
              fieldOfStudy="Life Sciences"
            />
            <RecruitmentCard
              university="Seoul National University"
              department="Economics"
              professor="Dr. Lee Jihoon"
              deadline="2023-12-20"
              scholarshipAvailable={true}
              fieldOfStudy="Social Sciences"
            />
            <RecruitmentCard
              university="Korea University"
              department="Chemistry"
              professor="Dr. Kim Soomin"
              deadline="2023-11-25"
              scholarshipAvailable={false}
              fieldOfStudy="Natural Sciences"
            />
            <RecruitmentCard
              university="Sungkyunkwan University"
              department="Materials Science"
              professor="Dr. Park Hyesung"
              deadline="2023-12-05"
              scholarshipAvailable={true}
              fieldOfStudy="Engineering"
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
                <span className="sr-only">Previous page</span>
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
                <span className="sr-only">Next page</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
