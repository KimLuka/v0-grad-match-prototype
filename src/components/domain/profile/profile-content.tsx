import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Edit, GraduationCap, MapPin, Calendar, BookOpen, FileText, Download } from 'lucide-react'

interface User {
  name: string
  email: string
  avatar: string
  role: 'applicant' | 'professor'
  nationality?: string
  birthYear?: string
  topikLevel?: string
  stAlliance?: boolean
  desiredDegree?: string
  interests?: string[]
  introduction?: string
  studyPlan?: string
  education?: Array<{
    degree: string
    institution: string
    year: string
  }>
  experience?: Array<{
    title: string
    company: string
    year: string
    description: string
  }>
  publications?: Array<{
    title: string
    journal: string
    year: string
  }>
  projects?: Array<{
    title: string
    description: string
    year: string
  }>
  professorInfo?: {
    title: string
    department: string
    university: string
    researchAreas: string[]
    officeHours: string
    labName: string
  }
}

interface ProfileContentProps {
  userRole: string
  user: User
}

export default function ProfileContent({ userRole, user }: ProfileContentProps) {
  return (
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
                      {user.interests?.map((interest, index) => (
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
                  {user.education?.map((edu, index) => (
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
                  {user.experience?.map((exp, index) => (
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
                  {user.publications?.map((pub, index) => (
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
                  {user.projects?.map((project, index) => (
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
                        <dd className="w-2/3 text-sm">{user.professorInfo?.title}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">학과:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo?.department}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">대학교:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo?.university}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">연구실:</dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo?.labName}</dd>
                      </div>
                      <div className="flex">
                        <dt className="w-1/3 text-sm font-medium text-muted-foreground">
                          상담 시간:
                        </dt>
                        <dd className="w-2/3 text-sm">{user.professorInfo?.officeHours}</dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">연구 분야</h3>
                    <Separator className="my-2" />
                    <div className="flex flex-wrap gap-2 pt-2">
                      {user.professorInfo?.researchAreas.map((area, index) => (
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
}
