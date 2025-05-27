'use client'

import {
  BookOpen,
  Calendar,
  Check,
  ClipboardList,
  Clock,
  Download,
  Edit,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  Settings,
  Shield,
  Trash2,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [userRole, setUserRole] = useState('applicant') // "applicant" or "professor"

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    id: '1',
    name: userRole === 'applicant' ? '김사라' : '김민호 교수',
    email: userRole === 'applicant' ? 'sarah.kim@example.com' : 'minho.kim@snu.ac.kr',
    role: userRole, // "applicant" or "professor"
    avatar: '/placeholder.svg?height=100&width=100',
    nationality: '미국',
    birthYear: '1998',
    topikLevel: '3급',
    stAlliance: true,
    desiredDegree: '박사과정',
    interests: ['인공지능', '머신러닝', '컴퓨터 비전'],
    education: [
      {
        degree: '컴퓨터공학 석사',
        institution: '워싱턴 대학교',
        year: '2020-2022',
      },
      {
        degree: '컴퓨터공학 학사',
        institution: '오레곤 대학교',
        year: '2016-2020',
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
    introduction:
      '저는 인공지능과 머신러닝에 강한 관심을 가진 컴퓨터공학 졸업생입니다. 한국 대학교에서 컴퓨터공학 박사과정을 통해 이 분야의 연구를 더욱 발전시키고자 합니다.',
    studyPlan:
      '제 연구 계획은 컴퓨터 비전 응용을 위한 새로운 딥러닝 아키텍처 개발에 중점을 두고 있으며, 특히 객체 탐지와 이미지 분할 분야에 관심이 있습니다. 이러한 기술들이 의료 영상과 자율주행과 같은 실제 문제에 어떻게 적용될 수 있는지 탐구하고 싶습니다.',
    professorInfo: {
      title: '컴퓨터공학과 교수',
      department: '컴퓨터공학과',
      university: '서울대학교',
      researchAreas: ['인공지능', '머신러닝', '컴퓨터 비전'],
      officeHours: '월요일과 수요일, 오후 2시-4시',
      labName: 'AI & 머신러닝 연구실',
    },
  }

  // Mock saved items
  const savedItems = [
    {
      id: '1',
      type: 'recruitment',
      title: '서울대학교 - 컴퓨터공학과',
      professor: '김민호 교수',
      savedDate: '2023-10-15',
    },
    {
      id: '2',
      type: 'recruitment',
      title: 'KAIST - 인공지능학과',
      professor: '이성훈 교수',
      savedDate: '2023-10-12',
    },
    {
      id: '3',
      type: 'applicant',
      title: '아흐메드 하산',
      description: '로봇공학 박사과정 후보',
      savedDate: '2023-10-10',
    },
  ]

  const renderSidebar = () => (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex justify-center pt-2">
              <Badge variant="outline">{user.role === 'applicant' ? '지원자' : '교수'}</Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Edit className="mr-2 h-4 w-4" />
            프로필 편집
          </Button>
          {/* Toggle for demo purposes - would not exist in real app */}
          <div className="flex items-center space-x-2 pt-2">
            <Button
              variant="ghost"
              size="sm"
              className={userRole === 'applicant' ? 'bg-primary/10' : ''}
              onClick={() => setUserRole('applicant')}
            >
              지원자 뷰
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={userRole === 'professor' ? 'bg-primary/10' : ''}
              onClick={() => setUserRole('professor')}
            >
              교수 뷰
            </Button>
          </div>
        </div>
        <Separator className="my-6" />
        <nav className="flex flex-col space-y-1">
          <Button
            variant={activeTab === 'profile' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('profile')}
          >
            <User className="mr-2 h-4 w-4" />내 프로필
          </Button>
          <Button
            variant={activeTab === 'applications' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('applications')}
          >
            {userRole === 'applicant' ? (
              <LayoutDashboard className="mr-2 h-4 w-4" />
            ) : (
              <ClipboardList className="mr-2 h-4 w-4" />
            )}
            {userRole === 'applicant' ? '지원 현황' : '평가'}
          </Button>
          <Button
            variant={activeTab === 'saved' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('saved')}
          >
            <Heart className="mr-2 h-4 w-4" />
            저장됨
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'secondary' : 'ghost'}
            className="justify-start"
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="mr-2 h-4 w-4" />
            설정
          </Button>
          <Separator />
          <Button
            variant="ghost"
            className="justify-start text-red-500 hover:bg-red-50 hover:text-red-500"
          >
            <LogOut className="mr-2 h-4 w-4" />
            로그아웃
          </Button>
        </nav>
      </CardContent>
    </Card>
  )

  const renderProfileContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>프로필 정보</CardTitle>
        <CardDescription>
          {userRole === 'applicant'
            ? '대학교와 교수님들에게 보이는 개인 및 학업 정보'
            : '지원자와 다른 학계 인사들에게 보이는 전문 정보'}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {userRole === 'applicant' ? (
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="education">학력 및 경력</TabsTrigger>
              <TabsTrigger value="research">연구</TabsTrigger>
              <TabsTrigger value="documents">서류</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">개인 정보</h3>
                    <Separator className="my-2" />
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">국적:</dt>
                        <dd className="w-2/3 text-sm">{user.nationality}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          출생년도:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.birthYear}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          토픽 레벨:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.topikLevel}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          ST 얼라이언스:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.stAlliance ? '예' : '아니오'}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          희망 학위:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.desiredDegree}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">연구 관심 분야</h3>
                    <Separator className="my-2" />
                    <div className="flex flex-wrap gap-2 pt-2">
                      {user.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">소개</h3>
                    <Separator className="my-2" />
                    <p className="text-sm text-muted-foreground">{user.introduction}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">학업 계획</h3>
                    <Separator className="my-2" />
                    <p className="text-sm text-muted-foreground">{user.studyPlan}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  정보 수정
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-medium">학력</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  {user.education.map((edu, index) => (
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
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">경력</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  {user.experience.map((exp, index) => (
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
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-medium">논문</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  {user.publications.map((pub, index) => (
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
              </div>

              <div>
                <h3 className="text-lg font-medium">프로젝트</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  {user.projects.map((project, index) => (
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
                        <p className="pt-1 text-sm text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">이력서/CV</h3>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    업로드
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center">
                    <FileText className="mr-4 h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">김사라_이력서.pdf</p>
                      <p className="text-sm text-muted-foreground">2023년 10월 15일에 업로드됨</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">다운로드</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">연구 계획서</h3>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    업로드
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center">
                    <FileText className="mr-4 h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">연구계획서_AI.pdf</p>
                      <p className="text-sm text-muted-foreground">2023년 10월 20일에 업로드됨</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">다운로드</span>
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">증명서</h3>
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    업로드
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between rounded-md border p-4">
                  <div className="flex items-center">
                    <FileText className="mr-4 h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">TOPIK_증명서.pdf</p>
                      <p className="text-sm text-muted-foreground">2023년 9월 5일에 업로드됨</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">다운로드</span>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          // Professor profile view
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">개요</TabsTrigger>
              <TabsTrigger value="research">연구</TabsTrigger>
              <TabsTrigger value="publications">논문</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 pt-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">전문 정보</h3>
                    <Separator className="my-2" />
                    <dl className="space-y-2">
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">직위:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo.title}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">학과:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo.department}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">대학교:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo.university}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">연구실:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo.labName}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          상담 시간:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo.officeHours}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">연구 분야</h3>
                    <Separator className="my-2" />
                    <div className="flex flex-wrap gap-2 pt-2">
                      {user.professorInfo.researchAreas.map((area, index) => (
                        <Badge key={index} variant="secondary">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">약력</h3>
                    <Separator className="my-2" />
                    <p className="text-sm text-muted-foreground">
                      김민호 교수는 서울대학교 컴퓨터공학과 교수로, 인공지능과 머신러닝을 전문으로
                      합니다. AI & 머신러닝 연구실을 이끌며 컴퓨터 비전과 딥러닝 아키텍처 분야의
                      최첨단 연구에 집중하고 있습니다. 스탠포드 대학교에서 박사학위를 받았으며 최고
                      수준의 저널과 학회에서 광범위하게 논문을 발표했습니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">현재 프로젝트</h3>
                    <Separator className="my-2" />
                    <p className="text-sm text-muted-foreground">
                      현재 컴퓨터 비전을 위한 고급 딥러닝 기법, 엣지 디바이스를 위한 효율적인 신경망
                      아키텍처, 자연어 이해를 위한 새로운 접근법에 대한 연구 프로젝트를 이끌고
                      있습니다. 연구실에서는 이러한 분야에 관심이 있는 의욕적인 대학원생을
                      적극적으로 모집하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  정보 수정
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-medium">연구 중점 분야</h3>
                <Separator className="my-2" />
                <p className="text-sm text-muted-foreground">
                  제 연구는 컴퓨터 비전 응용을 위한 새로운 딥러닝 아키텍처 개발에 중점을 두고
                  있으며, 특히 객체 탐지와 이미지 분할 분야에 관심이 있습니다. 이러한 기술들이 의료
                  영상, 자율주행, 로봇공학과 같은 실제 문제에 어떻게 적용될 수 있는지 탐구하고
                  있습니다. 또한 엣지 디바이스를 위한 효율적인 신경망 아키텍처와 자연어 이해를 위한
                  새로운 접근법에 대한 연구도 진행하고 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">현재 프로젝트</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">의료 영상을 위한 고급 딥러닝</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      MRI, CT 스캔, X-ray를 포함한 다양한 영상 모달리티에서 질병의 조기 발견에
                      중점을 둔 의료 영상 분석을 위한 딥러닝 모델을 개발하고 있습니다.
                    </p>
                    <div className="mt-2 flex items-center">
                      <Badge variant="outline">한국과학재단 지원</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">엣지 디바이스를 위한 효율적인 신경망</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      모델 압축, 양자화, 하드웨어 인식 신경망 아키텍처 탐색에 중점을 두고 자원이
                      제한된 엣지 디바이스에 배포하기 위한 신경망 최적화 기법을 연구하고 있습니다.
                    </p>
                    <div className="mt-2 flex items-center">
                      <Badge variant="outline">산업체 협력</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">한국어 자연어 이해</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      한국어 문법, 구문, 의미론의 고유한 도전과제를 다루는 한국어 이해를 위한 전문
                      언어 모델을 개발하고 있습니다.
                    </p>
                    <div className="mt-2 flex items-center">
                      <Badge variant="outline">정부 지원</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="publications" className="space-y-6 pt-6">
              <div>
                <h3 className="text-lg font-medium">주요 논문</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">"컴퓨터 비전을 위한 고급 딥러닝 기법"</h4>
                    <p className="text-sm text-muted-foreground">
                      IEEE 패턴 분석 및 머신 인텔리전스 논문집, 2022
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">임팩트 팩터: 16.4</Badge>
                      <Badge variant="outline">인용: 45회</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">"자연어 이해를 위한 새로운 접근법"</h4>
                    <p className="text-sm text-muted-foreground">ACL 2021 논문집</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">학회: ACL</Badge>
                      <Badge variant="outline">인용: 32회</Badge>
                    </div>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">"엣지 디바이스를 위한 효율적인 신경망 아키텍처"</h4>
                    <p className="text-sm text-muted-foreground">CVPR 2020 논문집</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">학회: CVPR</Badge>
                      <Badge variant="outline">인용: 78회</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">저서 및 책 챕터</h3>
                <Separator className="my-2" />
                <div className="space-y-4 pt-2">
                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">"딥러닝: 원리와 응용"</h4>
                    <p className="text-sm text-muted-foreground">스프링거 출판사, 2021</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      다양한 도메인에서의 딥러닝 원리, 아키텍처, 응용에 대한 종합적인 교과서입니다.
                    </p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h4 className="font-medium">"헬스케어에서의 컴퓨터 비전" (책 챕터)</h4>
                    <p className="text-sm text-muted-foreground">
                      "의학에서의 AI", 옥스포드 대학교 출판부, 2020
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      헬스케어와 의료 영상에서 컴퓨터 비전 기법의 응용에 대해 논의하는 챕터입니다.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  )

  const renderSavedContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>저장된 항목</CardTitle>
        <CardDescription>북마크한 모집공고와 지원자 프로필</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedItems.map(item => (
            <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-muted p-2">
                  {item.type === 'recruitment' ? (
                    <GraduationCap className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.type === 'recruitment' ? item.professor : item.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(item.savedDate).toLocaleDateString('ko-KR')}에 저장됨
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  보기
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderSettingsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>계정 설정</CardTitle>
          <CardDescription>계정 환경설정 및 보안 관리</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">이름</Label>
                <Input id="firstName" defaultValue={userRole === 'applicant' ? '사라' : '민호'} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">성</Label>
                <Input id="lastName" defaultValue="김" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" type="email" defaultValue={user.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">자기소개</Label>
              <Textarea id="bio" placeholder="자신에 대해 알려주세요..." />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>개인정보 설정</CardTitle>
          <CardDescription>내 정보를 볼 수 있는 사람 관리</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>프로필 공개 여부</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'applicant'
                  ? '교수님들에게 프로필 공개하기'
                  : '지원자들에게 프로필 공개하기'}
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>연락처 표시</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'applicant'
                  ? '교수님들에게 이메일 공개하기'
                  : '지원자들에게 이메일 공개하기'}
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>서류 표시</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'applicant'
                  ? '교수님들이 내 서류를 다운로드할 수 있도록 허용'
                  : '지원자들이 내 논문을 다운로드할 수 있도록 허용'}
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>받고 싶은 알림 선택</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>이메일 알림</Label>
              <p className="text-sm text-muted-foreground">이메일로 업데이트 받기</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>{userRole === 'applicant' ? '지원 현황 업데이트' : '새 지원자'}</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'applicant'
                  ? '지원 상태 변경 알림 받기'
                  : '내 공고에 새 지원자가 있을 때 알림 받기'}
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>{userRole === 'applicant' ? '새 기회' : '플랫폼 업데이트'}</Label>
              <p className="text-sm text-muted-foreground">
                {userRole === 'applicant'
                  ? '새 모집공고 알림 받기'
                  : '플랫폼 업데이트 및 새 기능 알림 받기'}
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>보안</CardTitle>
          <CardDescription>계정 보안 관리</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Shield className="mr-2 h-4 w-4" />
            비밀번호 변경
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Globe className="mr-2 h-4 w-4" />
            이중 인증
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Download className="mr-2 h-4 w-4" />내 데이터 다운로드
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>변경사항 저장</Button>
      </div>
    </div>
  )

  const renderApplicantApplicationsContent = () => {
    // Mock application data
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
      switch (status) {
        case 'pending':
          return (
            <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
              대기중
            </Badge>
          )
        case 'under_review':
          return (
            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
              심사중
            </Badge>
          )
        case 'under_interview':
          return (
            <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
              면접중
            </Badge>
          )
        case 'accepted':
          return (
            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
              합격
            </Badge>
          )
        default:
          return <Badge variant="outline">알 수 없음</Badge>
      }
    }

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'pending':
          return <Clock className="h-4 w-4 text-yellow-500" />
        case 'under_review':
          return <Eye className="h-4 w-4 text-blue-500" />
        case 'under_interview':
          return <User className="h-4 w-4 text-purple-500" />
        case 'accepted':
          return <Check className="h-4 w-4 text-green-500" />
        default:
          return null
      }
    }

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    // Calculate statistics
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">전체</CardTitle>
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
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">심사중</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.under_review}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">면접중</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.under_interview}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">합격</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.accepted}</div>
            </CardContent>
          </Card>
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

  const renderProfessorEvaluationsContent = () => {
    // Mock applicant data for professor evaluations
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
      switch (status) {
        case 'pending':
          return (
            <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
              대기중
            </Badge>
          )
        case 'under_review':
          return (
            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
              심사중
            </Badge>
          )
        case 'under_interview':
          return (
            <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
              면접중
            </Badge>
          )
        case 'accepted':
          return (
            <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
              합격
            </Badge>
          )
        default:
          return <Badge variant="outline">알 수 없음</Badge>
      }
    }

    const getStatusIcon = (status: string) => {
      switch (status) {
        case 'pending':
          return <Clock className="h-4 w-4 text-yellow-500" />
        case 'under_review':
          return <Eye className="h-4 w-4 text-blue-500" />
        case 'under_interview':
          return <User className="h-4 w-4 text-purple-500" />
        case 'accepted':
          return <Check className="h-4 w-4 text-green-500" />
        default:
          return null
      }
    }

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    // Calculate statistics
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">전체</CardTitle>
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
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">심사중</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.under_review}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">면접중</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.under_interview}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">합격</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.accepted}</div>
            </CardContent>
          </Card>
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

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/4">{renderSidebar()}</div>

            <div className="md:w-3/4">
              {activeTab === 'profile' && renderProfileContent()}
              {activeTab === 'applications' &&
                userRole === 'applicant' &&
                renderApplicantApplicationsContent()}
              {activeTab === 'applications' &&
                userRole === 'professor' &&
                renderProfessorEvaluationsContent()}
              {activeTab === 'saved' && renderSavedContent()}
              {activeTab === 'settings' && renderSettingsContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
