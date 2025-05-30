'use client'

import {
  ArrowLeft,
  BookOpen,
  Building,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Share2,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function RecruitmentDetailPage() {
  const params = useParams()
  const id = params.id as string

  const recruitment = {
    id,
    lab: '인공지능 연구실',
    university: '서울대학교',
    professor: '김민호 교수',
    deadline: '2023-12-31',
    scholarshipAvailable: true,
    fieldOfStudy: '공학',
    description:
      '서울대학교 인공지능 연구실에서는 다가오는 학년도에 의욕적인 대학원생을 모집합니다. 저희 연구실은 인공지능, 머신러닝, 컴퓨터 비전 등 최첨단 연구 기회를 제공합니다.',
    requirements: [
      '컴퓨터공학 또는 관련 분야 학사 학위',
      '강한 프로그래밍 능력 (Python, Java, C++)',
      'GPA 3.5 이상',
      'TOPIK 3급 이상 (우대)',
      '연구 경험 (우대)',
    ],
    benefits: [
      '자격을 갖춘 지원자에게 전액 장학금 제공',
      '월 120만원 연구비 지원',
      '교내 기숙사 이용 가능',
      '연구조교 기회 제공',
      '학회 참석 지원',
    ],
    professorInfo: {
      name: '김민호 교수',
      title: '컴퓨터공학과 교수',
      education: [
        '스탠포드 대학교 컴퓨터공학 박사',
        'KAIST 컴퓨터공학 석사',
        '서울대학교 컴퓨터공학 학사',
      ],
      researchInterests: ['인공지능', '머신러닝', '컴퓨터 비전', '자연어 처리'],
      publications: [
        '김민호 외 (2022). "컴퓨터 비전을 위한 고급 딥러닝 기법." IEEE 패턴 분석 및 머신 인텔리전스 논문집.',
        '김민호 외 (2021). "자연어 이해를 위한 새로운 접근법." ACL 2021 논문집.',
        '김민호 외 (2020). "엣지 디바이스를 위한 효율적인 신경망 구조." CVPR 2020 논문집.',
      ],
      email: 'minho.kim@snu.ac.kr',
    },
    universityInfo: {
      name: '서울대학교',
      location: '서울, 대한민국',
      ranking: '세계 50위권',
      established: '1946',
      studentsCount: '28,000+',
      internationalStudents: '2,000+',
      facilities: [
        '최첨단 연구 실험실',
        '광범위한 디지털 자료를 보유한 현대적 도서관',
        '유학생을 위한 교내 기숙사',
        '체육관, 수영장, 테니스장을 포함한 스포츠 시설',
        '학생 식당 및 다양한 식사 옵션',
      ],
      surroundings: [
        '서울 관악구에 위치',
        '대중교통 접근성 우수',
        '레스토랑, 카페, 상점이 있는 활기찬 동네',
        '문화 명소 및 엔터테인먼트 시설과 인접',
      ],
    },
    curriculum: [
      {
        name: '핵심 과목',
        courses: ['고급 알고리즘', '머신러닝', '컴퓨터 시스템 구조', '데이터베이스 시스템'],
      },
      {
        name: '선택 과목',
        courses: ['인공지능', '컴퓨터 비전', '자연어 처리', '분산 시스템', '클라우드 컴퓨팅'],
      },
      {
        name: '연구 세미나',
        courses: ['AI 최신 동향', '연구 방법론', '컴퓨팅 윤리'],
      },
    ],
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search/recruitments">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">뒤로</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{recruitment.university}</h1>
              <p className="text-muted-foreground">{recruitment.lab}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-8 md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{recruitment.lab}</CardTitle>
                      <CardDescription>{recruitment.university}</CardDescription>
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
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {recruitment.scholarshipAvailable && (
                      <Badge className="bg-green-500 hover:bg-green-600">장학금 지원 가능</Badge>
                    )}
                    <Badge variant="outline">{recruitment.fieldOfStudy}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>마감일: {formatDate(recruitment.deadline)}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 font-medium">설명</h3>
                    <p className="text-muted-foreground">{recruitment.description}</p>
                  </div>

                  <Tabs defaultValue="requirements">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="requirements">지원 요건</TabsTrigger>
                      <TabsTrigger value="benefits">혜택</TabsTrigger>
                      <TabsTrigger value="curriculum">교과 과정</TabsTrigger>
                      <TabsTrigger value="costs">비용</TabsTrigger>
                    </TabsList>
                    <TabsContent value="requirements" className="space-y-4">
                      <h3 className="mt-4 font-medium">자격 요건</h3>
                      <ul className="space-y-2">
                        {recruitment.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="benefits" className="space-y-4">
                      <h3 className="mt-4 font-medium">장학금 및 혜택</h3>
                      <ul className="space-y-2">
                        {recruitment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="curriculum" className="space-y-4">
                      <h3 className="mt-4 font-medium">프로그램 교과 과정</h3>
                      <div className="space-y-4">
                        {recruitment.curriculum.map((category, index) => (
                          <div key={index}>
                            <h4 className="text-sm font-medium">{category.name}</h4>
                            <ul className="mt-2 space-y-2">
                              {category.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                  <span className="text-muted-foreground">{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="costs" className="space-y-4">
                      <h3 className="mt-4 font-medium">예상 비용</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium">등록금 (학기당)</h4>
                            <p className="text-muted-foreground">5,000,000원</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">지원 수수료</h4>
                            <p className="text-muted-foreground">100,000원</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">주거비 (월)</h4>
                            <p className="text-muted-foreground">300,000 - 600,000원</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">생활비 (월)</h4>
                            <p className="text-muted-foreground">600,000 - 1,000,000원</p>
                          </div>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                          <h4 className="mb-2 text-sm font-medium">비용 계산기</h4>
                          <p className="mb-4 text-xs text-muted-foreground">
                            프로그램 기간과 생활 방식에 따른 총 비용을 예상해보세요.
                          </p>
                          <Button size="sm">계산기 열기</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div>
                    <h3 className="mb-2 font-medium">대학교 정보</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{recruitment.universityInfo.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>설립: {recruitment.universityInfo.established}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>학생 수: {recruitment.universityInfo.studentsCount}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>순위: {recruitment.universityInfo.ranking}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>유학생 수: {recruitment.universityInfo.internationalStudents}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
                          <Link href="#" className="text-primary hover:underline">
                            대학교 웹사이트 방문
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-medium">시설</h3>
                      <ul className="space-y-2">
                        {recruitment.universityInfo.facilities.map((facility, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-medium">주변 환경</h3>
                      <ul className="space-y-2">
                        {recruitment.universityInfo.surroundings.map((surrounding, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{surrounding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button size="lg" className="w-full">
                      지금 지원하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">교수 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">{recruitment.professorInfo.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {recruitment.professorInfo.title}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="mb-2 text-sm font-medium">학력</h4>
                    <ul className="space-y-1">
                      {recruitment.professorInfo.education.map((edu, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-medium">연구 관심 분야</h4>
                    <div className="flex flex-wrap gap-2">
                      {recruitment.professorInfo.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-medium">주요 논문</h4>
                    <ul className="space-y-2">
                      {recruitment.professorInfo.publications.map((pub, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`mailto:${recruitment.professorInfo.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        교수님께 연락하기
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">지원 서류</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">지원서</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">연구 계획서 양식</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">추천서 양식</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

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
                          {formatDate(recruitment.deadline)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
