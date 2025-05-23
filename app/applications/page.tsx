import Link from "next/link"
import { ArrowUpDown, Calendar, Check, Clock, Eye, Filter, GraduationCap, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplicationsPage() {
  // Mock application data - in a real app, this would come from your database
  const applications = [
    {
      id: "app-1",
      university: "Seoul National University",
      department: "Computer Science",
      professor: "Dr. Kim Minho",
      position: "Ph.D. Student",
      status: "pending",
      appliedDate: "2023-10-15",
      deadline: "2023-12-31",
    },
    {
      id: "app-2",
      university: "KAIST",
      department: "Artificial Intelligence",
      professor: "Dr. Lee Sunghoon",
      position: "Ph.D. Student",
      status: "reviewing",
      appliedDate: "2023-10-10",
      deadline: "2023-12-15",
    },
    {
      id: "app-3",
      university: "Korea University",
      department: "Business Administration",
      professor: "Dr. Park Jiwon",
      position: "Master's Student",
      status: "accepted",
      appliedDate: "2023-09-20",
      deadline: "2023-11-30",
    },
    {
      id: "app-4",
      university: "Yonsei University",
      department: "International Studies",
      professor: "Dr. Choi Jiyoung",
      position: "Master's Student",
      status: "rejected",
      appliedDate: "2023-09-15",
      deadline: "2023-11-15",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "reviewing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Reviewing
          </Badge>
        )
      case "accepted":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Accepted
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "reviewing":
        return <Eye className="h-5 w-5 text-blue-500" />
      case "accepted":
        return <Check className="h-5 w-5 text-green-500" />
      case "rejected":
        return <X className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Calculate statistics
  const stats = {
    total: applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    reviewing: applications.filter((app) => app.status === "reviewing").length,
    accepted: applications.filter((app) => app.status === "accepted").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
            <p className="text-muted-foreground">Track and manage your graduate program applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.pending}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Under Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.reviewing}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Accepted</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.accepted}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Application History</CardTitle>
              <CardDescription>View and manage all your graduate program applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div className="relative w-full sm:w-auto">
                    <Input placeholder="Search applications..." className="pl-10 w-full sm:w-[300px]" />
                    <div className="absolute left-3 top-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="reviewing">Reviewing</SelectItem>
                        <SelectItem value="accepted">Accepted</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead>
                        <tr className="border-b transition-colors hover:bg-muted/50">
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>University</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>Department</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>Position</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>Applied Date</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">
                            <div className="flex items-center space-x-2">
                              <span>Status</span>
                              <ArrowUpDown className="h-4 w-4" />
                            </div>
                          </th>
                          <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((application) => (
                          <tr key={application.id} className="border-b transition-colors hover:bg-muted/50">
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                  <div className="font-medium">{application.university}</div>
                                  <div className="text-xs text-muted-foreground">Prof. {application.professor}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 align-middle">{application.department}</td>
                            <td className="p-4 align-middle">{application.position}</td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>{formatDate(application.appliedDate)}</span>
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <div className="flex items-center gap-2">
                                {getStatusIcon(application.status)}
                                {getStatusBadge(application.status)}
                              </div>
                            </td>
                            <td className="p-4 align-middle">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/applications/${application.id}`}>View Details</Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
