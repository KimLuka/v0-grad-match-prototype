import Link from 'next/link'

import { UniversitySymbol } from '@/components/common/university-symbol'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import type { Recruitment } from '@/types/recruitment'
import { findUniversity } from '@/utils/findUniversity'
import { calculateDDay } from '@/utils/formatDate'

interface RecruitmentBlockProps {
  recruitment: Recruitment
}

export function RecruitmentBlock({ recruitment }: RecruitmentBlockProps) {
  if (!recruitment) return null

  const { id, university, lab, degree, tags, applicationPeriod, scholarship } = recruitment
  const universityData = findUniversity(university)
  const dDay = calculateDDay(applicationPeriod.end)

  return (
    <Link href={`/recruitment/${id}`}>
      <Card className="group h-full transition-colors hover:border-primary">
        <CardHeader>
          <div className="flex items-center gap-5 truncate">
            <div className="flex flex-col items-center gap-2">
              {universityData && <UniversitySymbol size="xl" university={universityData} />}
              <span className="w-20 truncate text-center text-sm">
                {universityData ? universityData.label : university}
              </span>
            </div>
            <div className="my-auto flex flex-col gap-2 truncate">
              <CardTitle className="line-clamp-2 truncate text-base sm:text-lg">{lab}</CardTitle>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-1">
                  {dDay && <Badge variant="destructive">{dDay}</Badge>}
                  {scholarship && <Badge variant="success">장학금</Badge>}
                  <Badge variant="outline">
                    {degree === 'master' ? '석사' : degree === 'phd' ? '박사' : '석박사통합'}
                  </Badge>
                  {tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  )
}
