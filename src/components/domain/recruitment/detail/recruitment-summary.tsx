import {
  Building,
  Calendar,
  ExternalLink,
  GraduationCap,
  Heart,
  MapPin,
  Share2,
  Users,
} from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LabInfo } from '@/types/lab-info'
import { formatKoreanDate } from '@/utils/formatDate'

export default function RecruitmentSummary({ recruitment }: { recruitment: LabInfo }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h2>
              <CardTitle>{recruitment.lab}</CardTitle>
            </h2>
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
            <span>
              마감일: <time>{formatKoreanDate(recruitment.deadline)}</time>
            </span>
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

        {/* <div className="pt-4">
                    <Button size="lg" className="w-full">
                      지금 지원하기
                    </Button>
                  </div> */}
      </CardContent>
    </Card>
  )
}
