import { GraduationCap, MapPin, User } from 'lucide-react'
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
          <div className="relative h-24 bg-gradient-to-r from-primary/20 to-primary/10">
            <div className="absolute bottom-0 right-6 translate-y-1/2 transform">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-background">
                <User className="h-8 w-8 text-primary/60" />
              </div>
            </div>
            <div className="absolute right-4 top-4"></div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-10">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{nationality}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{desiredDegree}</Badge>
              <Badge variant="outline">TOPIK {topikLevel}</Badge>
            </div>
            <div>
              <p className="text-sm font-medium">Research Interests</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="mt-0.5 h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{education}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
