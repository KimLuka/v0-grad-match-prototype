import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { BookmarkButton } from '@/components/common/bookmark-button'
import { UniversitySymbol } from '@/components/common/university-symbol'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DEGREES } from '@/constants/degree'
import { UNIVERSITIES } from '@/constants/universities'
import { Recruitment } from '@/types/recruitment'
import { calculateDDay } from '@/utils/formatDate'
import { getFieldOfStudyImage } from '@/utils/getFieldOfStudyImage'
import { getLabelByValue } from '@/utils/getLabelByValue'

type RecruitmentCardProps = Recruitment

export function RecruitmentCard({
  id,
  lab,
  university,
  department,
  professor,
  applicationPeriod,
  scholarship,
  fieldOfStudy,
  degree,
  isBookmarked = false,
}: Omit<RecruitmentCardProps, 'title' | 'status' | 'tags'> & { isBookmarked?: boolean }) {
  const [imageError, setImageError] = useState(false)

  const fieldImage = getFieldOfStudyImage(fieldOfStudy, lab)
  const universityData = UNIVERSITIES.find(uni => uni.label === university)
  const dDay = calculateDDay(applicationPeriod.end)

  return (
    <Link href={`/recruitment/${id}`} className="w-full">
      <Card className="group h-full overflow-hidden border-0 bg-white shadow-sm transition-all">
        <CardHeader className="p-0">
          <div className="relative h-32 overflow-hidden sm:h-40">
            {!imageError ? (
              <>
                <Image
                  src={fieldImage.imageUrl}
                  alt={`${fieldImage.label} 관련 이미지`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImageError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/60" />
              </>
            ) : (
              <div
                className={`h-full w-full ${fieldImage.fallbackColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
              >
                <span className="text-lg font-semibold text-gray-600">{fieldImage.label}</span>
              </div>
            )}
            <div className="absolute left-3 top-3 flex gap-1">
              {scholarship && (
                <Badge variant="transparent" size="lg" className="text-primary-foreground">
                  장학금 지원
                </Badge>
              )}
              {dDay && (
                <Badge size="lg" variant="ghost" className="text-primary-foreground">
                  {dDay}
                </Badge>
              )}
            </div>
            <div className="absolute right-3 top-3">
              <BookmarkButton
                variant="link"
                size="icon"
                initialBookmarked={isBookmarked}
                onBookmarkChange={isBookmarked => {
                  // TODO: 북마크 상태 변경 로직 (API 호출)
                  console.info('Bookmark changed:', isBookmarked)
                }}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 p-4 sm:gap-4">
          <div className="flex items-start gap-4 sm:gap-5">
            {universityData && <UniversitySymbol university={universityData} size="lg" />}
            <div className="flex flex-col gap-0.5">
              <h3 className="line-clamp-1 text-lg font-semibold">{lab}</h3>
              <span className="text-base">
                {university} {department}
              </span>
              <span className="text-sm text-muted-foreground">{professor}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline">{getLabelByValue(DEGREES, degree)}</Badge>
            <Badge variant="secondary">{fieldOfStudy}</Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
