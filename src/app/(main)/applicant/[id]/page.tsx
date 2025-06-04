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
import { use, useEffect, useState } from 'react'

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
import { useToast } from '@/hooks/useToast'
import { MOCK_APPLICANTS } from '@/mocks/applicants'

export default function ApplicantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const { toast } = useToast()

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

  // Get applicant data from mock data
  const mockApplicant = MOCK_APPLICANTS.find(applicant => applicant.id === id)

  // Mock applicant data with enhanced study plan
  const applicant = {
    id: id,
    name: mockApplicant?.name || '김사라',
    nationality: mockApplicant?.nationality || '미국',
    birthYear: '1998',
    email: 'sarah.kim@example.com',
    topikLevel: mockApplicant?.topikLevel || '3급',
    major: mockApplicant?.major || '컴퓨터공학과',
    desiredDegree:
      mockApplicant?.desiredDegree === 'master'
        ? '석사과정'
        : mockApplicant?.desiredDegree === 'phd'
          ? '박사과정'
          : mockApplicant?.desiredDegree === 'integrated'
            ? '석박사통합과정'
            : '박사과정',
    interests: mockApplicant?.interests || ['인공지능', '머신러닝', '컴퓨터 비전'],
    introduction:
      '저는 인공지능과 머신러닝에 강한 관심을 가진 컴퓨터공학 졸업생입니다. 한국 대학교에서 컴퓨터공학 박사과정을 통해 이 분야의 연구를 더욱 발전시키고자 합니다.',
    studyPlan: `저의 학업 계획은 크게 3단계로 구성되어 있습니다. 

첫 번째 단계(1-2학기)에서는 한국어 능력 향상을 통해 TOPIK 6급 취득을 목표로 하며, 동시에 고급 인공지능 이론과 딥러닝 알고리즘에 대한 깊이 있는 이해를 위해 관련 핵심 강의를 수강할 예정입니다. 또한 지도교수님과의 정기적인 미팅을 통해 연구 방향성을 구체화하고 선행 연구들을 체계적으로 분석하겠습니다.

두 번째 단계(3-4학기)에서는 컴퓨터 비전과 자연어 처리 분야의 융합 연구에 집중하여, 멀티모달 AI 시스템 개발을 위한 창의적인 접근법을 모색할 계획입니다. 특히 의료 영상 분석과 임상 데이터 해석을 결합한 실용적인 AI 솔루션 개발에 중점을 두겠습니다.

마지막 단계(5-6학기)에서는 연구 성과를 국제 학술지에 게재하고 산업체와의 협력 프로젝트를 통해 연구의 실용성을 검증하며, 동시에 후배 연구자들을 지도하는 경험을 쌓아 향후 학계에 기여할 수 있는 역량을 기르겠습니다.`,
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

  const handleSave = () => {
    setIsSaved(prev => !prev)
    // Mock save functionality
    toast({
      title: isSaved ? '지원자 저장 취소' : '지원자 저장 완료',
      description: isSaved
        ? `${applicant.name} 지원자가 관심 목록에서 제거되었습니다.`
        : `${applicant.name} 지원자가 관심 목록에 저장되었습니다.`,
    })
  }

  const handleShare = async () => {
    const currentUrl = window.location.href

    try {
      // 먼저 navigator.clipboard가 사용 가능한지 확인
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(currentUrl)
        toast({
          title: '링크 복사 완료',
          description: '지원자 프로필 링크가 클립보드에 복사되었습니다.',
        })
      } else {
        // fallback: 임시 textarea 요소를 사용
        const textArea = document.createElement('textarea')
        textArea.value = currentUrl
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        try {
          document.execCommand('copy')
          toast({
            title: '링크 복사 완료',
            description: '지원자 프로필 링크가 클립보드에 복사되었습니다.',
          })
        } catch (fallbackError) {
          toast({
            title: '링크 복사 실패',
            description:
              '브라우저에서 자동 복사를 지원하지 않습니다. 주소창에서 직접 복사해주세요.',
            variant: 'destructive',
          })
        } finally {
          document.body.removeChild(textArea)
        }
      }
    } catch (error) {
      console.error('Clipboard error:', error)
      toast({
        title: '링크 복사 실패',
        description: '링크 복사 중 오류가 발생했습니다. 주소창에서 직접 복사해주세요.',
        variant: 'destructive',
      })
    }
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
                        <Badge className="bg-green-500">{applicant.major}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={handleSave}
                        className={isSaved ? 'text-red-500 hover:text-red-600' : ''}
                      >
                        <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
                        <span className="sr-only">저장</span>
                      </Button>
                      <Button variant="outline" size="icon" onClick={handleShare}>
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
                  <div className="whitespace-pre-line text-muted-foreground">
                    {applicant.studyPlan}
                  </div>
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
                    <span className="text-sm text-muted-foreground">학과</span>
                    <span className="text-sm font-medium">{applicant.major}</span>
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
