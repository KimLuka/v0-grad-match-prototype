import { ArrowUpDown, Calendar, Check, Clock, Eye, Filter, GraduationCap, X } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ApplicationsPage() {
  // Mock application data - in a real app, this would come from your database
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
      status: 'reviewing',
      appliedDate: '2023-10-10',
      deadline: '2023-12-15',
    },
    {
      id: 'app-3',
      university: '고려대학교',
      department: '경영학과',
      professor: '박지원 교수',
      position: '석사과정',
      status: 'accepted',
      appliedDate: '2023-09-20',
      deadline: '2023-11-30',
    },
    {
      id: 'app-4',
      university: '연세대학교',
      department: '국제학과',
      professor: '최지영 교수',
      position: '석사과정',
      status: 'rejected',
      appliedDate: '2023-09-15',
      deadline: '2023-11-15',
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
            대기중
          </Badge>
        )
      case 'reviewing':
        return (
          <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
            심사중
          </Badge>
        )
      case 'accepted':
        return (
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
            합격
          </Badge>
        )
      case 'rejected':
        return (
          <Badge variant="outline" className="border-red-200 bg-red-50 text-red-700">
            불합격
          </Badge>
        )
      default:
        return <Badge variant="outline">알 수 없음</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'reviewing':
        return <Eye className="h-5 w-5 text-blue-500" />
      case 'accepted':
        return <Check className="h-5 w-5 text-green-500" />
      case 'rejected':
        return <X className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Calculate statistics
  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewing: applications.filter(app => app.status === 'reviewing').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">지원현황</h1>
            <p className="text-muted-foreground">대학원 프로그램 지원 현황을 추적하고 관리하세요</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">전체 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">대기중</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.pending}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">심사중</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.reviewing}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">합격</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.accepted}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>지원 이력</CardTitle>
              <CardDescription>
                모든 대학원 프로그램 지원 현황을 확인하고 관리하세요
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="relative w-full sm:w-auto">
                    <Input placeholder="지원 검색..." className="w-full pl-10 sm:w-[300px]" />
                    <div className="absolute left-3 top-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex w-full items-center gap-2 sm:w-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      필터
                    </Button>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="상태" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">모든 상태</SelectItem>
                        <SelectItem value="pending">대기중</SelectItem>
                        <SelectItem value="reviewing">심사중</SelectItem>
                        <SelectItem value="accepted">합격</SelectItem>
                        <SelectItem value="rejected">불합격</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>대학교</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>학과</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>과정</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>지원일</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>상태</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">작업</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map(application => (
                          <tr
                            key={application.id}
                            className="border-b transition-colors hover:bg-muted/50"
                          >
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-medium">{application.university}</div>
                                  <div className="text-xs text-muted-foreground">
                                    {application.professor}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">{application.department}</td>
                            <td className="p-4 align-middle">{application.position}</td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{formatDate(application.appliedDate)}</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                {getStatusIcon(application.status)}
                                {getStatusBadge(application.status)}
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/applications/${application.id}`}>상세보기</Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
