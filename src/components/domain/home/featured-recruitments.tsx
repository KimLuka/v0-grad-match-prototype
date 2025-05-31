import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { MOCK_RECRUITMENTS } from '@/mocks/recruitments'

import { RecruitmentBlock } from './recruitment-block'

export default function FeaturedRecruitments() {
  const featuredRecruitments = MOCK_RECRUITMENTS?.slice(0, 8) || []

  if (featuredRecruitments.length === 0) return null

  return (
    <section className="mt-4 flex flex-col gap-10 px-4 sm:mt-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold sm:text-2xl">주목할 만한 모집공고</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredRecruitments.map(recruitment => (
            <RecruitmentBlock key={recruitment.id} recruitment={recruitment} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/search/recruitments"
          className="flex items-center gap-2 text-muted-foreground transition-colors"
        >
          <p className="text-md text-muted-foreground sm:text-base">더보기</p>
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </Link>
      </div>
    </section>
  )
}
