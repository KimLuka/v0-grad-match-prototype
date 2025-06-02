import { Calendar, Share2 } from 'lucide-react'

import { BookmarkButton } from '@/components/common/bookmark-button'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/useToast'
import { LabInfo } from '@/types/lab-info'
import { formatKoreanDate } from '@/utils/formatDate'

import BenefitsSection from './benefits-section'
import RequirementsSection from './requirements-section'
import UniversityOverview from './university-overview-section'

export default function RecruitmentSummary({ recruitment }: { recruitment: LabInfo }) {
  const { toast } = useToast()

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      toast({
        title: '공유 링크가 복사되었습니다.',
        description: '클립보드에 링크가 복사되었습니다.',
      })
    } catch {
      toast({
        title: '복사 실패',
        description: '링크 복사에 실패했습니다.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h2>
              <CardTitle>{recruitment.lab}</CardTitle>
            </h2>
            <CardDescription className="mt-2">{recruitment.university}</CardDescription>
          </div>
          <div className="flex space-x-2">
            <BookmarkButton
              variant="outline"
              size="icon"
              iconClassName="h-4 w-4"
              iconSize={16}
              fillColor="black"
            />

            <Button variant="outline" size="icon" onClick={handleClick}>
              <Share2 className="h-4 w-4" />
              <span className="sr-only">공유</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {recruitment.scholarshipAvailable && (
            <Badge className="bg-green-500 hover:bg-green-600">장학금 지원 가능</Badge>
          )}
          <Badge variant="outline">{recruitment.fieldOfStudy}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>
              마감일: <time>{formatKoreanDate(recruitment.deadline)}</time>
            </span>
          </div>
        </div>

        <UniversityOverview recruitment={recruitment} />

        <Separator />

        <RequirementsSection recruitment={recruitment} />

        <BenefitsSection recruitment={recruitment} />
      </CardContent>
    </Card>
  )
}
