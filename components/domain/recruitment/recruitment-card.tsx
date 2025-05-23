import { CardHeader } from "@/components/ui/card"
import Link from "next/link"
import { CalendarIcon, GraduationCap, MapPin, User, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

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
  location = "서울",
}: RecruitmentCardProps) {
  // Format the deadline date
  const formattedDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Generate a unique ID for the recruitment post (in a real app, this would come from the database)
  const id = `${university.toLowerCase().replace(/\s+/g, "-")}-${lab.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Link href={`/recruitment/${id}`} className="w-full">
      <Card className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-sm bg-white h-full">
        <CardHeader className="p-0">
          <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap className="h-12 w-12 text-primary/40" />
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2">
              <div className="h-16 w-16 rounded-full bg-background border-4 border-background flex items-center justify-center">
                <User className="h-8 w-8 text-primary/60" />
              </div>
            </div>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              {scholarshipAvailable && <Badge className="bg-green-500 hover:bg-green-600 text-xs">장학금 지원</Badge>}
              <Badge variant="outline" className="bg-white text-xs">
                {fieldOfStudy}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-10">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{lab}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-2">
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
