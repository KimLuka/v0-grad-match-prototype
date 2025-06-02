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
import { Separator } from '@/components/ui/separator'
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
            <CardDescription className="mt-2">{recruitment.university}</CardDescription>
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
          <h3 className="mb-2 font-medium">소개</h3>
          <p className="text-muted-foreground">{recruitment.description}</p>
        </div>

        <h3 className="mt-4 font-medium">대학교 정보</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{recruitment.universityInfo.location}</span>
            </div>
            <div className="flex items-center text-sm">
              <Building className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>설립: {recruitment.universityInfo.established}년</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>학생 수: {recruitment.universityInfo.studentsCount}명</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>순위: {recruitment.universityInfo.ranking}위</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>유학생 수: {recruitment.universityInfo.internationalStudents}명</span>
            </div>
            <div className="flex items-center text-sm">
              <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
              <Link
                href={recruitment.universityInfo.website}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                대학교 웹사이트 방문
              </Link>
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-2 font-medium">시설</h3>
            <ul className="space-y-2">
              {recruitment.universityInfo.facilities.map((facility, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{facility}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium">주변 환경</h3>
            <ul className="space-y-2">
              {recruitment.universityInfo.surroundings.map((surrounding, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{surrounding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator />
        <h3 className="mt-4 font-medium">연구 분야</h3>
        <div className="space-y-4">
          <ul className="space-y-2">
            {recruitment.fieldOfStudy.map((field, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground">{field}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-4 font-medium">자격 요건</h3>
        <ul className="space-y-2">
          {recruitment.requirements.map((requirement, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{requirement}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-4 font-medium">장학금 및 혜택</h3>
        <ul className="space-y-2">
          {recruitment.conditions.salary && (
            <li className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{recruitment.conditions.salary}</span>
            </li>
          )}
          {recruitment.conditions.otherBenefits?.map((benefit, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
