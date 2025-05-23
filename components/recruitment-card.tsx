import Link from "next/link"
import { CalendarIcon, GraduationCap, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface RecruitmentCardProps {
  university: string
  department: string
  professor: string
  deadline: string
  scholarshipAvailable: boolean
  fieldOfStudy: string
}

export function RecruitmentCard({
  university,
  department,
  professor,
  deadline,
  scholarshipAvailable,
  fieldOfStudy,
}: RecruitmentCardProps) {
  // Format the deadline date
  const formattedDeadline = new Date(deadline).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Generate a unique ID for the recruitment post (in a real app, this would come from the database)
  const id = `${university.toLowerCase().replace(/\s+/g, "-")}-${department.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-0 shadow-sm bg-white">
      <CardHeader className="p-0">
        <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-12 w-12 text-primary/40" />
          </div>
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {scholarshipAvailable && <Badge className="bg-green-500 hover:bg-green-600 text-xs">Scholarship</Badge>}
            <Badge variant="outline" className="bg-white text-xs">
              {fieldOfStudy}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{university}</h3>
            <p className="text-muted-foreground text-sm">{department}</p>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="mr-1 h-3 w-3" />
            <span>South Korea</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <span>Deadline: {formattedDeadline}</span>
          </div>
          <div className="pt-1">
            <p className="text-xs font-medium">Professor</p>
            <p className="text-xs text-muted-foreground">{professor}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" size="sm">
          <Link href={`/recruitment/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
