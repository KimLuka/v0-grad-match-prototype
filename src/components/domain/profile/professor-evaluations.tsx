import { Check, Clock, Eye, MapPin, User } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const applicants = [
  {
    id: 'app-1',
    name: '김사라',
    nationality: '미국',
    desiredDegree: '박사과정',
    topikLevel: '3급',
    research: '인공지능',
    status: 'pending',
    appliedDate: '2023-10-15',
    hasEvaluation: false,
  },
  {
    id: 'app-2',
    name: '아흐메드 하산',
    nationality: '이집트',
    desiredDegree: '박사과정',
    topikLevel: '2급',
    research: '로봇공학',
    status: 'under_review',
    appliedDate: '2023-10-10',
    hasEvaluation: true,
  },
  {
    id: 'app-3',
    name: '리웨이',
    nationality: '중국',
    desiredDegree: '박사과정',
    topikLevel: '5급',
    research: '컴퓨터 비전',
    status: 'under_interview',
    appliedDate: '2023-09-20',
    hasEvaluation: true,
  },
  {
    id: 'app-4',
    name: '마리아 로드리게스',
    nationality: '스페인',
    desiredDegree: '석사과정',
    topikLevel: '4급',
    research: '자연어 처리',
    status: 'accepted',
    appliedDate: '2023-09-15',
    hasEvaluation: true,
  },
]

const getStatusBadge = (status: string) => {
  const statusMap = {
    pending: { color: 'border-yellow-200 bg-yellow-50 text-yellow-700', label: '대기중' },
    under_review: { color: 'border-blue-200 bg-blue-50 text-blue-700', label: '심사중' },
    under_interview: { color: 'border-purple-200 bg-purple-50 text-purple-700', label: '면접중' },
    accepted: { color: 'border-green-200 bg-green-50 text-green-700', label: '합격' },
  }
  const config = statusMap[status as keyof typeof statusMap] || { color: '', label: '알 수 없음' }
  return (
    <Badge variant="outline" className={config.color}>
      {config.label}
    </Badge>
  )
}

const getStatusIcon = (status: string) => {
  const iconMap = {
    pending: <Clock className="h-4 w-4 text-yellow-500" />,
    under_review: <Eye className="h-4 w-4 text-blue-500" />,
    under_interview: <User className="h-4 w-4 text-purple-500" />,
    accepted: <Check className="h-4 w-4 text-green-500" />,
  }
  return iconMap[status as keyof typeof iconMap] || null
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

export default function ProfessorEvaluations() {
  const stats = {
    total: applicants.length,
    pending: applicants.filter(app => app.status === 'pending').length,
    under_review: applicants.filter(app => app.status === 'under_review').length,
    under_interview: applicants.filter(app => app.status === 'under_interview').length,
    accepted: applicants.filter(app => app.status === 'accepted').length,
  }

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {[
          { label: '전체', value: stats.total, color: 'text-gray-600' },
          { label: '대기중', value: stats.pending, color: 'text-yellow-600' },
          { label: '심사중', value: stats.under_review, color: 'text-blue-600' },
          { label: '면접중', value: stats.under_interview, color: 'text-purple-600' },
          { label: '합격', value: stats.accepted, color: 'text-green-600' },
        ].map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Applicants List */}
      <Card>
        <CardHeader>
          <CardTitle>지원자 평가</CardTitle>
          <CardDescription>프로그램에 지원한 지원자를 검토하고 평가하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applicants.map(applicant => (
              <div key={applicant.id} className="space-y-3 rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {applicant.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="font-medium">{applicant.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{applicant.nationality}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <Badge variant="secondary">{applicant.desiredDegree}</Badge>
                        <Badge variant="outline">TOPIK {applicant.topikLevel}</Badge>
                        <Badge variant="outline">{applicant.research}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(applicant.status)}
                    {getStatusBadge(applicant.status)}
                  </div>
                </div>

                <div className="text-sm">
                  <span className="text-muted-foreground">지원일:</span>
                  <span className="ml-2">{formatDate(applicant.appliedDate)}</span>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/applicant/${applicant.id}`}>프로필 보기</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/applications/${applicant.id}`}>지원서 보기</Link>
                  </Button>
                  <Button
                    variant={applicant.hasEvaluation ? 'outline' : 'default'}
                    size="sm"
                    asChild
                  >
                    <Link href={`/evaluations/${applicant.id}`}>
                      {applicant.hasEvaluation ? '평가 보기' : '평가하기'}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/evaluations">모든 평가 보기</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
