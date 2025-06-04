'use client'

import { Loader2 } from 'lucide-react'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import type { Recruitment } from '@/types/recruitment'

import { RecruitmentCard } from './recruitment-card'

interface RecruitmentListProps {
  recruitments: Recruitment[]
}

export default function RecruitmentList({ recruitments }: RecruitmentListProps) {
  const { displayedItems, hasMore, isLoading } = useInfiniteScroll(recruitments, 10)

  if (recruitments.length === 0) {
    return (
      <section className="container mx-auto max-w-7xl px-6 pb-8">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">검색 결과가 없습니다</h3>
            <p className="mt-2 text-gray-500">다른 조건으로 검색해보세요.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="container mx-auto max-w-7xl px-6 pb-8">
      <div className="flex flex-col space-y-6">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            총 <span className="font-semibold text-primary">{recruitments.length}</span>개의
            모집공고
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedItems.map(recruitment => (
            <RecruitmentCard
              key={recruitment.id}
              id={recruitment.id}
              lab={recruitment.lab}
              university={recruitment.university}
              department={recruitment.department}
              professor={recruitment.professor}
              applicationPeriod={recruitment.applicationPeriod}
              scholarship={recruitment.scholarship}
              fieldOfStudy={recruitment.fieldOfStudy}
              degree={recruitment.degree}
              location={recruitment.location}
            />
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
      </div>
    </section>
  )
}
