import { BriefcaseBusiness, FileCheck, FileUp, Mail, Mic, Send } from 'lucide-react'

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
        <ul className="space-y-6">
          <li className="flex items-center">
            <div className="flex items-center gap-3">
              <Send className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">지원 마감일</p>
                <p className="text-sm text-muted-foreground">
                  {recruitment.deadline === '상시 채용'
                    ? '상시 채용'
                    : formatKoreanDate(recruitment.deadline)}
                </p>
              </div>
            </div>
          </li>

          <li className="flex items-center">
            <div className="flex items-center gap-3">
              <FileCheck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">서류 심사</p>
                <p className="text-sm text-muted-foreground">
                  {recruitment.schedule.documentReview === '추후 협의'
                    ? '추후 협의'
                    : formatKoreanDate(recruitment.schedule.documentReview)}
                </p>
              </div>
            </div>
          </li>

          {recruitment.schedule.interview && (
            <li className="flex items-center">
              <div className="flex items-center gap-3">
                <Mic className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">면접</p>
                  <p className="text-sm text-muted-foreground">
                    {recruitment.schedule.interview === '추후 협의'
                      ? '추후 협의'
                      : formatKoreanDate(recruitment.schedule.interview)}
                  </p>
                </div>
              </div>
            </li>
          )}

          <li className="flex items-center">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">합격자 발표</p>
                <p className="text-sm text-muted-foreground">
                  {recruitment.schedule.resultAnnouncement === '추후 협의'
                    ? '추후 협의'
                    : formatKoreanDate(recruitment.schedule.resultAnnouncement)}
                </p>
              </div>
            </div>
          </li>

          <li className="flex items-center">
            <div className="flex items-center gap-3">
              <FileUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">서류 제출 마감일</p>
                <p className="text-sm text-muted-foreground">
                  {recruitment.schedule.documentSubmission === '추후 협의'
                    ? '추후 협의'
                    : formatKoreanDate(recruitment.schedule.documentSubmission)}
                </p>
              </div>
            </div>
          </li>

          <li className="flex items-center">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">입학/입사</p>
                <p className="text-sm text-muted-foreground">
                  {recruitment.schedule.startDate === '추후 협의'
                    ? '추후 협의'
                    : formatKoreanDate(recruitment.schedule.startDate)}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
