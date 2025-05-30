import { GraduationCap, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LabInfo } from '@/types/lab-info'

export default function ProfessorProfile({ recruitment }: { recruitment: LabInfo }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>교수 정보</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 h-24 w-24 items-center justify-center rounded-full bg-muted">
            {recruitment.professorInfo.image ? (
              <Image
                src={recruitment.professorInfo.image}
                alt={`${recruitment.professorInfo.name} 교수 사진`}
                width={96}
                height={96}
                className="h-12 w-12"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
          </div>
          <h3 className="font-medium">{recruitment.professorInfo.name}</h3>
          <p className="text-sm text-muted-foreground">{recruitment.professorInfo.title}</p>
        </div>
        <Separator />
        <div>
          <h3 className="mb-2 font-medium">학력</h3>
          <ul className="space-y-2">
            {recruitment.professorInfo.education.map((edu, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <GraduationCap className="mr-2 h-4 w-4" />
                {edu}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 font-medium">연구 분야</h3>
          <div className="flex flex-wrap gap-2">
            {recruitment.professorInfo.researchAreas.map((area, index) => (
              <Badge key={index} variant="outline">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-medium">주요 논문</h3>
          <ul className="space-y-4">
            {recruitment.professorInfo.publications.map((pub, index) => (
              <li key={index} className="space-y-1">
                <Link
                  href={pub.url}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                </Link>
                <div className="text-sm text-muted-foreground">
                  <p>{pub.authors.join(', ')}</p>
                  <p>
                    {pub.publisher} ({pub.year})
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
