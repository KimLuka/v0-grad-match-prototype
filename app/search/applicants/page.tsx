"use client"

import { useState } from "react"
import { Filter, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicantCard } from "@/components/applicant-card"
import { ApplicantFilters } from "@/components/applicant-filters"

export default function ApplicantSearchPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Applicant Pool</h1>
            <p className="text-muted-foreground">Browse potential graduate students for your programs</p>
            <div className="text-sm text-red-500 mt-2">
              Note: This section is only accessible to verified professors
            </div>
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
                      <ApplicantFilters />
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
              <Input placeholder="Search by name, field, or nationality..." className="pl-10 w-full" />
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
            <ApplicantCard
              name="Sarah Johnson"
              nationality="United States"
              desiredDegree="Ph.D."
              topikLevel="Level 3"
              interests={["Artificial Intelligence", "Machine Learning"]}
              education="M.S. in Computer Science, University of Washington"
            />
            <ApplicantCard
              name="Ahmed Hassan"
              nationality="Egypt"
              desiredDegree="Ph.D."
              topikLevel="Level 2"
              interests={["Robotics", "Computer Vision"]}
              education="M.S. in Electrical Engineering, Cairo University"
            />
            <ApplicantCard
              name="Maria Rodriguez"
              nationality="Spain"
              desiredDegree="Master's"
              topikLevel="Level 4"
              interests={["International Relations", "East Asian Studies"]}
              education="B.A. in Political Science, University of Barcelona"
            />
            <ApplicantCard
              name="Li Wei"
              nationality="China"
              desiredDegree="Ph.D."
              topikLevel="Level 5"
              interests={["Biochemistry", "Molecular Biology"]}
              education="M.S. in Biochemistry, Peking University"
            />
            <ApplicantCard
              name="Raj Patel"
              nationality="India"
              desiredDegree="Master's"
              topikLevel="Level 2"
              interests={["Business Administration", "Finance"]}
              education="B.Com in Commerce, University of Delhi"
            />
            <ApplicantCard
              name="Olga Ivanova"
              nationality="Russia"
              desiredDegree="Ph.D."
              topikLevel="Level 3"
              interests={["Linguistics", "Korean Language"]}
              education="M.A. in Linguistics, Moscow State University"
            />
            <ApplicantCard
              name="John Smith"
              nationality="Canada"
              desiredDegree="Master's"
              topikLevel="Level 1"
              interests={["Environmental Science", "Sustainability"]}
              education="B.S. in Environmental Science, University of Toronto"
            />
            <ApplicantCard
              name="Fatima Al-Farsi"
              nationality="Saudi Arabia"
              desiredDegree="Ph.D."
              topikLevel="Level 3"
              interests={["Chemical Engineering", "Materials Science"]}
              education="M.S. in Chemical Engineering, King Saud University"
            />
            <ApplicantCard
              name="Chen Ming"
              nationality="Taiwan"
              desiredDegree="Ph.D."
              topikLevel="Level 4"
              interests={["Physics", "Quantum Computing"]}
              education="M.S. in Physics, National Taiwan University"
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
