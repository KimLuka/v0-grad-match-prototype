'use client'

import {
  ArrowLeft,
  Calendar,
  Check,
  ClipboardList,
  Clock,
  Download,
  Eye,
  FileText,
  GraduationCap,
  MapPin,
  User,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // In a real app, you would fetch the application data based on the ID
  // For this example, we'll use mock data
  const application = {
    id: params.id,
    university: 'Seoul National University',
    department: 'Computer Science',
    professor: 'Dr. Kim Minho',
    position: 'Ph.D. Student',
    status: 'under_review',
    appliedDate: '2023-10-15',
    deadline: '2023-12-31',
    applicationDocuments: [
      {
        name: 'CV_Sarah_Johnson.pdf',
        type: 'Resume/CV',
        uploadDate: '2023-10-15',
        size: '2.4 MB',
      },
      {
        name: 'Research_Proposal_AI.pdf',
        type: 'Research Proposal',
        uploadDate: '2023-10-15',
        size: '1.8 MB',
      },
      {
        name: 'TOPIK_Certificate.pdf',
        type: 'Certificate',
        uploadDate: '2023-10-15',
        size: '1.2 MB',
      },
      {
        name: 'Recommendation_Letter_1.pdf',
        type: 'Recommendation Letter',
        uploadDate: '2023-10-15',
        size: '0.9 MB',
      },
      {
        name: 'Transcript.pdf',
        type: 'Academic Transcript',
        uploadDate: '2023-10-15',
        size: '1.5 MB',
      },
    ],
    statusHistory: [
      {
        status: 'pending',
        date: '2023-10-15',
        description: 'Application submitted',
      },
      {
        status: 'under_review',
        date: '2023-10-25',
        description: 'Application under review by the department',
      },
    ],
    recruitment: {
      id: 'rec-1',
      university: 'Seoul National University',
      department: 'Computer Science',
      professor: 'Dr. Kim Minho',
      deadline: '2023-12-31',
      scholarshipAvailable: true,
      fieldOfStudy: 'Engineering',
      description:
        'The Computer Science Department at Seoul National University is seeking motivated graduate students for the upcoming academic year. Our department offers cutting-edge research opportunities in artificial intelligence, machine learning, computer vision, and more.',
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        'Strong programming skills (Python, Java, C++)',
        'GPA of 3.5 or higher',
        'TOPIK level 3 or higher (preferred)',
        'Research experience (preferred)',
      ],
      benefits: [
        'Full tuition scholarship for qualified applicants',
        'Monthly stipend of 1,200,000 KRW',
        'On-campus housing available',
        'Research assistant opportunities',
        'Conference travel support',
      ],
    },
    applicant: {
      id: 'applicant-1',
      name: 'Sarah Johnson',
      nationality: 'United States',
      email: 'sarah.johnson@example.com',
    },
    evaluations: [
      {
        id: 'eval-1',
        date: '2023-10-28',
        evaluator: 'Dr. Kim Minho',
        academicFit: 4,
        researchPotential: 5,
        technicalSkills: 4,
        communication: 3,
        overallRating: 4,
        notes:
          'Strong academic background and research potential. Technical skills are excellent, particularly in machine learning. Communication skills could be improved, but overall a very promising candidate.',
        status: 'under_review',
      },
    ],
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
            Pending
          </Badge>
        )
      case 'under_review':
        return (
          <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
            Under Review
          </Badge>
        )
      case 'under_interview':
        return (
          <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
            Under Interview
          </Badge>
        )
      case 'accepted':
        return (
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
            Accepted
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />
      case 'under_review':
        return <Eye className="h-5 w-5 text-blue-500" />
      case 'under_interview':
        return <User className="h-5 w-5 text-purple-500" />
      case 'accepted':
        return <Check className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/applications">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Application Details</h1>
              <p className="text-muted-foreground">
                {application.university} - {application.department}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Application Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg" alt={application.university} />
                        <AvatarFallback>
                          <GraduationCap className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{application.university}</h3>
                        <p className="text-sm text-muted-foreground">{application.department}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(application.status)}
                      {getStatusBadge(application.status)}
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Position</p>
                      <p className="text-sm text-muted-foreground">{application.position}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Professor</p>
                      <p className="text-sm text-muted-foreground">{application.professor}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Applied Date</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(application.appliedDate)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Application Deadline</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(application.deadline)}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={`/recruitment/${application.recruitment.university.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        View Recruitment
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/applicant/${application.applicant.id}`}>View Applicant</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/evaluations/${application.id}`}>Evaluation Notes</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Application Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Documents</CardTitle>
                  <CardDescription>Documents you submitted with your application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.applicationDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md border p-3"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{doc.type}</span>
                              <span>
                                Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}
                              </span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recruitment Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Recruitment Details</CardTitle>
                  <CardDescription>
                    Information about the recruitment you applied to
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="overview">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="requirements">Requirements</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4 pt-4">
                      <div className="flex items-center space-x-2">
                        {application.recruitment.scholarshipAvailable && (
                          <Badge className="bg-green-500 hover:bg-green-600">
                            Scholarship Available
                          </Badge>
                        )}
                        <Badge variant="outline">{application.recruitment.fieldOfStudy}</Badge>
                      </div>
                      <p className="text-muted-foreground">{application.recruitment.description}</p>
                      <div className="flex justify-end">
                        <Button variant="outline" asChild>
                          <Link
                            href={`/recruitment/${application.recruitment.university.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            View Full Recruitment
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="requirements" className="space-y-4 pt-4">
                      <h3 className="font-medium">Eligibility & Requirements</h3>
                      <ul className="space-y-2">
                        {application.recruitment.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="benefits" className="space-y-4 pt-4">
                      <h3 className="font-medium">Scholarship & Benefits</h3>
                      <ul className="space-y-2">
                        {application.recruitment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(application.status)}
                      <div>
                        <p className="font-medium">Current Status</p>
                        <p className="text-sm text-muted-foreground">
                          Your application is {application.status.replace('_', ' ')}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <p className="font-medium">Status Timeline</p>
                      <div className="relative space-y-4">
                        {application.statusHistory.map((status, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="relative">
                              <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                  index === 0 ? 'bg-green-100' : 'bg-blue-100'
                                }`}
                              >
                                {index === 0 ? (
                                  <Check className="h-3 w-3 text-green-600" />
                                ) : (
                                  <Eye className="h-3 w-3 text-blue-600" />
                                )}
                              </div>
                              {index < application.statusHistory.length - 1 && (
                                <div className="absolute left-1/2 top-6 h-10 w-px -translate-x-1/2 bg-gray-200" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{status.status.replace('_', ' ')}</p>
                              <p className="text-xs text-muted-foreground">
                                {formatDate(status.date)}
                              </p>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {status.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evaluation Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Evaluation Notes</CardTitle>
                  <CardDescription>Professor's evaluation of your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {application.evaluations && application.evaluations.length > 0 ? (
                    <div className="space-y-4">
                      {application.evaluations.map((evaluation, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <ClipboardList className="h-4 w-4 text-muted-foreground" />
                              <p className="text-sm font-medium">{evaluation.evaluator}</p>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {formatDate(evaluation.date)}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-muted-foreground">Academic Fit:</p>
                              <p className="font-medium">{evaluation.academicFit}/5</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Research Potential:</p>
                              <p className="font-medium">{evaluation.researchPotential}/5</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Technical Skills:</p>
                              <p className="font-medium">{evaluation.technicalSkills}/5</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Communication:</p>
                              <p className="font-medium">{evaluation.communication}/5</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Overall Rating:</p>
                            <p className="font-medium">{evaluation.overallRating}/5</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Notes:</p>
                            <p className="text-sm">{evaluation.notes}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="text-muted-foreground">No evaluation notes available yet.</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* University Information */}
              <Card>
                <CardHeader>
                  <CardTitle>University Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">Seoul, South Korea</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">Top 50 globally</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm">Established 1946</p>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      href="https://www.snu.ac.kr/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit University Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
