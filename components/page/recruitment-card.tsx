import Link from "next/link"
import { CalendarIcon, GraduationCap, MapPin, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface RecruitmentCardProps {
  lab: string
  university: string
  professor: string
  deadline: string
  scholarshipAvailable: boolean
  fieldOfStudy: string
}

export function RecruitmentCard({
  lab,
  university,
  professor,
  deadline,
  scholarshipAvailable,
  fieldOfStudy,
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
    <Card className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-sm bg-white">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-primary/40" />
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {scholarshipAvailable && <Badge className="bg-green-500 hover:bg-green-600 text-xs">장학금 지원</Badge>}
            <Badge variant="outline" className="bg-white text-xs">
              {fieldOfStudy}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
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
            <span>대한민국</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <span>마감일: {formattedDeadline}</span>
          </div>
          <div className="pt-1">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mr-2">
                <User className="h-3 w-3" />
              </div>
              <div>
                <p className="text-xs font-medium">교수</p>
                <p className="text-xs text-muted-foreground">{professor}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" size="sm">
          <Link href={`/recruitment/${id}`}>상세보기</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
