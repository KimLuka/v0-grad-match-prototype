import { Building, ExternalLink, GraduationCap, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { LabInfo } from '@/types/lab-info'

export default function UniversityOverview({ recruitment }: { recruitment: LabInfo }) {
  return (
    <>
      <div className="space-y-4">
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
    </>
  )
}
