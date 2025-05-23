import Link from "next/link"
import { GraduationCap, MapPin, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
  const id = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/applicant/${id}`} className="block">
      <Card className="overflow-hidden transition-all hover:shadow-md cursor-pointer h-full">
        <CardHeader className="p-0">
          <div className="h-24 bg-gradient-to-r from-primary/20 to-primary/10 relative">
            <div className="absolute bottom-0 right-6 transform translate-y-1/2">
              <div className="h-16 w-16 rounded-full bg-background border-4 border-background flex items-center justify-center">
                <User className="h-8 w-8 text-primary/60" />
              </div>
            </div>
            <div className="absolute top-4 right-4"></div>
          </div>
        </CardHeader>
        <CardContent className="pt-10 p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
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
              <div className="flex flex-wrap gap-1 mt-1">
                {interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground">{education}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
