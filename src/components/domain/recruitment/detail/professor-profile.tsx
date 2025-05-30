import { Users } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LabInfo } from '@/types/lab-info'

export default function ProfessorProfile({ recruitment }: { recruitment: LabInfo }) {
  return (
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
          <p className="text-sm text-muted-foreground">{recruitment.professorInfo.title}</p>
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

        {/* <div className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`mailto:${recruitment.professorInfo.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        교수님께 연락하기
                      </Link>
                    </Button>
                  </div> */}
      </CardContent>
    </Card>
  )
}
