'use client'

import { Loader2 } from 'lucide-react'

import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import type { Applicant } from '@/types/applicant'

import { ApplicantCard } from './applicant-card'

interface ApplicantListProps {
  applicants: Applicant[]
}

export default function ApplicantList({ applicants }: ApplicantListProps) {
  const { displayedItems, hasMore, isLoading } = useInfiniteScroll(applicants, 10)

  if (applicants.length === 0) {
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
            총 <span className="font-semibold text-primary">{applicants.length}</span>명의 지원자
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {displayedItems.map(applicant => (
            <ApplicantCard
              key={applicant.id}
              name={applicant.name}
              nationality={applicant.nationality}
              desiredDegree={
                applicant.desiredDegree === 'master'
                  ? '석사과정'
                  : applicant.desiredDegree === 'phd'
                    ? '박사과정'
                    : '석박사통합과정'
              }
              topikLevel={applicant.topikLevel}
              interests={applicant.interests}
              education={applicant.education}
            />
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {!hasMore && displayedItems.length > 0 && (
          <div className="flex justify-center py-8">
            <p className="text-gray-500">모든 결과를 불러왔습니다.</p>
          </div>
        )}
      </div>
    </section>
  )
}
