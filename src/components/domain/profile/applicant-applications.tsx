import { BookOpen, Calendar, Check, Clock, Eye, GraduationCap, User } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const applications = [
  {
    id: 'app-1',
    university: '서울대학교',
    department: '컴퓨터공학과',
    professor: '김민호 교수',
    position: '박사과정',
    status: 'pending',
    appliedDate: '2023-10-15',
    deadline: '2023-12-31',
  },
  {
    id: 'app-2',
    university: 'KAIST',
    department: '인공지능학과',
    professor: '이성훈 교수',
    position: '박사과정',
    status: 'under_review',
    appliedDate: '2023-10-10',
    deadline: '2023-12-15',
  },
  {
    id: 'app-3',
    university: '고려대학교',
    department: '경영학과',
    professor: '박지원 교수',
    position: '석사과정',
    status: 'under_interview',
    appliedDate: '2023-09-20',
    deadline: '2023-11-30',
  },
  {
    id: 'app-4',
    university: '연세대학교',
    department: '국제학과',
    professor: '최지영 교수',
    position: '석사과정',
    status: 'accepted',
    appliedDate: '2023-09-15',
    deadline: '2023-11-15',
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

export default function ApplicantApplications() {
  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    under_review: applications.filter(app => app.status === 'under_review').length,
    under_interview: applications.filter(app => app.status === 'under_interview').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
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

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>최근 지원 현황</CardTitle>
          <CardDescription>대학원 프로그램 지원 상태를 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map(application => (
              <div key={application.id} className="space-y-3 rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <h4 className="font-medium">{application.university}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{application.department}</p>
                    <p className="text-xs text-muted-foreground">{application.professor}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(application.status)}
                    {getStatusBadge(application.status)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">지원일:</span>
                    <span className="ml-2">{formatDate(application.appliedDate)}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">마감일:</span>
                    <span className="ml-2">{formatDate(application.deadline)}</span>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={`/recruitment/${application.university.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      모집공고 보기
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/applications/${application.id}`}>지원서 보기</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/applications">모든 지원 보기</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
