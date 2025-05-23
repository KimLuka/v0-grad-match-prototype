import { BookOpen, CalendarIcon, GraduationCap, MapPin, User } from 'lucide-react'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface RecruitmentCardProps {
  lab: string
  university: string
  professor: string
  deadline: string
  scholarshipAvailable: boolean
  fieldOfStudy: string
  location?: string
}

export function RecruitmentCard({
  lab,
  university,
  professor,
  deadline,
  scholarshipAvailable,
  fieldOfStudy,
  location = '서울',
}: RecruitmentCardProps) {
  // Format the deadline date
  const formattedDeadline = new Date(deadline).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  // Generate a unique ID for the recruitment post (in a real app, this would come from the database)
  const id = `${university.toLowerCase().replace(/\s+/g, '-')}-${lab.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <Link href={`/recruitment/${id}`} className="w-full">
      <Card className="h-full overflow-hidden border-0 bg-white shadow-sm transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-32 bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="h-12 w-12 text-primary/40" />
            </div>
            <div className="absolute bottom-0 right-6 translate-y-1/2 transform">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-background">
                <User className="h-8 w-8 text-primary/60" />
              </div>
            </div>
            <div className="absolute right-3 top-3 flex flex-col gap-2">
              {scholarshipAvailable && (
                <Badge className="bg-green-500 text-xs hover:bg-green-600">장학금 지원</Badge>
              )}
              <Badge variant="outline" className="bg-white text-xs">
                {fieldOfStudy}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-10">
          <div className="space-y-3">
            <div>
              <h3 className="line-clamp-1 text-lg font-semibold">{lab}</h3>
              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-muted">
                  <GraduationCap className="h-3 w-3" />
                </div>
                <span>{university}</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="mr-1 h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <User className="mr-1 h-3 w-3" />
              <span>{professor}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <BookOpen className="mr-1 h-3 w-3" />
              <span>연구 분야: {fieldOfStudy}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <span>마감일: {formattedDeadline}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
