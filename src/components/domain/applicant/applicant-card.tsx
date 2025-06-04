import { BookOpen, GraduationCap, MapPin, User } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface ApplicantCardProps {
  name: string
  nationality: string
  desiredDegree: string
  topikLevel: string
  interests: string[]
  education: string
}

export function ApplicantCard({
  name,
  nationality,
  desiredDegree,
  topikLevel,
  interests,
  education,
}: ApplicantCardProps) {
  // Generate a unique ID for the applicant (in a real app, this would come from the database)
  const id = name.toLowerCase().replace(/\s+/g, '-')

  return (
    <Link href={`/applicant/${id}`} className="block">
      <Card className="h-full cursor-pointer overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between p-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-primary">{name}</h3>
              <div className="flex items-center gap-1 text-sm text-primary">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{nationality}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <p className="text-sm text-primary">{education}</p>
              </div>
            </div>
            <div className="w-fit rounded-full border">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary/5">
                <User className="h-8 w-8 text-primary/60" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 p-6 pt-0">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{desiredDegree}</Badge>
            <Badge variant="outline">TOPIK {topikLevel}</Badge>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <p className="my-2 text-sm font-medium text-muted-foreground">관심 분야</p>
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              {interests.map((interest, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
