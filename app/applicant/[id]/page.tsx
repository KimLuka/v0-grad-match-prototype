'use client'

import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Share2,
} from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ApplicantDetailPage({ params }: { params: { id: string } }) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Check if user is authenticated as professor (mock implementation)
  useEffect(() => {
    // In a real app, you would check the user's authentication status
    // For demo purposes, we'll show the auth modal
    if (!isAuthenticated) {
      setShowAuthModal(true)
    }
  }, [isAuthenticated])

  // Mock applicant data
  const applicant = {
    id: params.id,
    name: '김사라',
    nationality: '미국',
    birthYear: '1998',
    email: 'sarah.kim@example.com',
    topikLevel: '3급',
    stAlliance: true,
    desiredDegree: '박사과정',
    interests: ['인공지능', '머신러닝', '컴퓨터 비전'],
    introduction:
      '저는 인공지능과 머신러닝에 강한 관심을 가진 컴퓨터공학 졸업생입니다. 한국 대학교에서 컴퓨터공학 박사과정을 통해 이 분야의 연구를 더욱 발전시키고자 합니다.',
    studyPlan:
      '제 연구 계획은 컴퓨터 비전 응용을 위한 새로운 딥러닝 아키텍처 개발에 중점을 두고 있으며, 특히 객체 탐지와 이미지 분할 분야에 관심이 있습니다. 이러한 기술들이 의료 영상과 자율주행과 같은 실제 문제에 어떻게 적용될 수 있는지 탐구하고 싶습니다.',
    education: [
      {
        degree: '컴퓨터공학 석사',
        institution: '워싱턴 대학교',
        year: '2020-2022',
        gpa: '3.8/4.0',
      },
      {
        degree: '컴퓨터공학 학사',
        institution: '오레곤 대학교',
        year: '2016-2020',
        gpa: '3.7/4.0',
      },
    ],
    experience: [
      {
        title: '연구조교',
        company: '워싱턴 대학교 AI 연구실',
        year: '2021-2022',
        description: '컴퓨터 비전 응용을 위한 딥러닝 모델 연구를 수행했습니다.',
      },
      {
        title: '소프트웨어 엔지니어 인턴',
        company: '테크솔루션즈',
        year: '2020',
        description: 'React와 Node.js를 사용하여 웹 애플리케이션을 개발하고 유지보수했습니다.',
      },
    ],
    publications: [
      {
        title: '딥러닝을 이용한 이미지 인식의 새로운 접근법',
        journal: '국제 컴퓨터 비전 저널',
        year: '2022',
      },
    ],
    projects: [
      {
        title: '자동 이미지 분류 시스템',
        description: '딥러닝 기법을 사용하여 이미지를 자동으로 분류하는 시스템을 개발했습니다.',
        year: '2021',
      },
      {
        title: '자연어 처리 툴킷',
        description: '자연어 데이터를 처리하고 분석하기 위한 툴킷을 제작했습니다.',
        year: '2020',
      },
    ],
    documents: [
      { name: '이력서_김사라.pdf', type: '이력서', uploadDate: '2023-10-15' },
      { name: '연구계획서_AI.pdf', type: '연구계획서', uploadDate: '2023-10-20' },
      { name: 'TOPIK_증명서.pdf', type: '증명서', uploadDate: '2023-09-05' },
    ],
  }

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, you would verify credentials
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  if (!isAuthenticated) {
    return (
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>교수 인증 필요</DialogTitle>
            <DialogDescription>
              지원자 프로필은 인증된 대학 교수만 접근할 수 있습니다. 인증 정보를 입력해주세요.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="university">대학교</Label>
              <Input id="university" placeholder="소속 대학교를 입력하세요" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">학과</Label>
              <Input id="department" placeholder="소속 학과를 입력하세요" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employee-id">교직원 ID</Label>
              <Input id="employee-id" placeholder="교직원 ID를 입력하세요" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="verification-code">인증 코드</Label>
              <Input id="verification-code" placeholder="인증 코드를 입력하세요" required />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                인증 및 접근
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowAuthModal(false)}>
                취소
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search/applicants">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">뒤로</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{applicant.name}</h1>
              <p className="text-muted-foreground">{applicant.nationality}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Profile Header */}
            <div className="lg:col-span-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt={applicant.name} />
                      <AvatarFallback>
                        {applicant.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold">{applicant.name}</h2>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{applicant.nationality}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{applicant.birthYear}년생</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="mr-1 h-4 w-4" />
                            <span>{applicant.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{applicant.desiredDegree}</Badge>
                        <Badge variant="outline">TOPIK {applicant.topikLevel}</Badge>
                        {applicant.stAlliance && (
                          <Badge className="bg-blue-500">ST 얼라이언스</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">저장</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">공유</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="space-y-8 lg:col-span-3">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle>소개</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{applicant.introduction}</p>
                </CardContent>
              </Card>

              {/* Study Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>학업 계획</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{applicant.studyPlan}</p>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card>
                <CardHeader>
                  <CardTitle>연구 관심 분야</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {applicant.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle>학력</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.education.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{edu.degree}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              <span>{edu.year}</span>
                            </div>
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle>경력</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.experience.map((exp, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{exp.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{exp.year}</span>
                          </div>
                          <p className="pt-1 text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Publications */}
              <Card>
                <CardHeader>
                  <CardTitle>논문</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.publications.map((pub, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{pub.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{pub.journal}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{pub.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>프로젝트</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.projects.map((project, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{project.year}</span>
                          </div>
                          <p className="pt-1 text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">연락처</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={`mailto:${applicant.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      메시지 보내기
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">서류</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {applicant.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{doc.type}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(doc.uploadDate).toLocaleDateString('ko-KR')}에 업로드됨
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">요약 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">희망 학위</span>
                    <span className="text-sm font-medium">{applicant.desiredDegree}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">토픽 레벨</span>
                    <span className="text-sm font-medium">{applicant.topikLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ST 얼라이언스</span>
                    <span className="text-sm font-medium">
                      {applicant.stAlliance ? '예' : '아니오'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">논문</span>
                    <span className="text-sm font-medium">{applicant.publications.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">프로젝트</span>
                    <span className="text-sm font-medium">{applicant.projects.length}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
