import { Clock } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LabInfo } from '@/types/lab-info'
import { formatKoreanDate } from '@/utils/formatDate'

export default function ProcessTimeline({ recruitment }: { recruitment: LabInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">주요 일정</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-start">
            <Clock className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">지원 마감일</p>
              <p className="text-sm text-muted-foreground">
                {formatKoreanDate(recruitment.deadline)}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Clock className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">서류 심사</p>
              <p className="text-sm text-muted-foreground">2024년 1월 15일</p>
            </div>
          </li>
          <li className="flex items-start">
            <Clock className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">면접 기간</p>
              <p className="text-sm text-muted-foreground">2024년 1월 20일-30일</p>
            </div>
          </li>
          <li className="flex items-start">
            <Clock className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">최종 결과</p>
              <p className="text-sm text-muted-foreground">2024년 2월 15일</p>
            </div>
          </li>
          <li className="flex items-start">
            <Clock className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">프로그램 시작</p>
              <p className="text-sm text-muted-foreground">2024년 3월 2일</p>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
