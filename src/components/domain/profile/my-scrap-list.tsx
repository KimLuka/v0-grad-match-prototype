import { RecruitmentCard } from '@/components/domain/recruitment/recruitment-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const savedRecruitments = [
  {
    id: 'rec-1',
    lab: 'AI & 머신러닝 연구실',
    university: '서울대학교',
    department: '컴퓨터공학과',
    professor: '김민호 교수',
    applicationPeriod: {
      start: '2024-02-01',
      end: '2024-03-31',
    },
    scholarship: true,
    fieldOfStudy: '인공지능',
    degree: 'phd' as const,
  },
  {
    id: 'rec-2',
    lab: '로보틱스 연구실',
    university: 'KAIST',
    department: '기계공학과',
    professor: '이성훈 교수',
    applicationPeriod: {
      start: '2024-02-15',
      end: '2024-03-15',
    },
    scholarship: true,
    fieldOfStudy: '로봇공학',
    degree: 'master' as const,
  },
]

export default function MyScrapList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>스크랩</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {savedRecruitments.map(recruitment => (
            <RecruitmentCard key={recruitment.id} {...recruitment} isBookmarked={true} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
