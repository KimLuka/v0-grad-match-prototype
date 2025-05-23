"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Building,
  Calendar,
  Clock,
  Download,
  ExternalLink,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Share2,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecruitmentDetailPage({ params }: { params: { id: string } }) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // In a real app, you would fetch the recruitment data based on the ID
  // For this example, we'll use mock data
  const recruitment = {
    id: params.id,
    university: "Seoul National University",
    department: "Computer Science",
    professor: "Dr. Kim Minho",
    deadline: "2023-12-31",
    scholarshipAvailable: true,
    fieldOfStudy: "Engineering",
    description:
      "The Computer Science Department at Seoul National University is seeking motivated graduate students for the upcoming academic year. Our department offers cutting-edge research opportunities in artificial intelligence, machine learning, computer vision, and more.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "Strong programming skills (Python, Java, C++)",
      "GPA of 3.5 or higher",
      "TOPIK level 3 or higher (preferred)",
      "Research experience (preferred)",
    ],
    benefits: [
      "Full tuition scholarship for qualified applicants",
      "Monthly stipend of 1,200,000 KRW",
      "On-campus housing available",
      "Research assistant opportunities",
      "Conference travel support",
    ],
    professorInfo: {
      name: "Dr. Kim Minho",
      title: "Professor of Computer Science",
      education: [
        "Ph.D. in Computer Science, Stanford University",
        "M.S. in Computer Science, KAIST",
        "B.S. in Computer Science, Seoul National University",
      ],
      researchInterests: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
      ],
      publications: [
        'Kim, M., et al. (2022). "Advanced Deep Learning Techniques for Computer Vision." IEEE Transactions on Pattern Analysis and Machine Intelligence.',
        'Kim, M., et al. (2021). "A Novel Approach to Natural Language Understanding." Proceedings of ACL 2021.',
        'Kim, M., et al. (2020). "Efficient Neural Network Architectures for Edge Devices." Proceedings of CVPR 2020.',
      ],
      email: "minho.kim@snu.ac.kr",
    },
    universityInfo: {
      name: "Seoul National University",
      location: "Seoul, South Korea",
      ranking: "Top 50 globally",
      established: "1946",
      studentsCount: "28,000+",
      internationalStudents: "2,000+",
      facilities: [
        "State-of-the-art research laboratories",
        "Modern library with extensive digital resources",
        "On-campus housing for international students",
        "Sports facilities including gym, swimming pool, and tennis courts",
        "Student cafeterias and dining options",
      ],
      surroundings: [
        "Located in Gwanak-gu, Seoul",
        "Easy access to public transportation",
        "Vibrant neighborhood with restaurants, cafes, and shops",
        "Close to cultural attractions and entertainment",
      ],
    },
    curriculum: [
      {
        name: "Core Courses",
        courses: ["Advanced Algorithms", "Machine Learning", "Computer Systems Architecture", "Database Systems"],
      },
      {
        name: "Elective Courses",
        courses: [
          "Artificial Intelligence",
          "Computer Vision",
          "Natural Language Processing",
          "Distributed Systems",
          "Cloud Computing",
        ],
      },
      {
        name: "Research Seminars",
        courses: ["Current Topics in AI", "Research Methodology", "Ethics in Computing"],
      },
    ],
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search/recruitments">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{recruitment.university}</h1>
              <p className="text-muted-foreground">{recruitment.department}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{recruitment.department} Graduate Program</CardTitle>
                      <CardDescription>{recruitment.university}</CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Save</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {recruitment.scholarshipAvailable && (
                      <Badge className="bg-green-500 hover:bg-green-600">Scholarship Available</Badge>
                    )}
                    <Badge variant="outline">{recruitment.fieldOfStudy}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Deadline: {formatDate(recruitment.deadline)}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Description</h3>
                    <p className="text-muted-foreground">{recruitment.description}</p>
                  </div>

                  <Tabs defaultValue="requirements">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="requirements">Requirements</TabsTrigger>
                      <TabsTrigger value="benefits">Benefits</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="costs">Costs</TabsTrigger>
                    </TabsList>
                    <TabsContent value="requirements" className="space-y-4">
                      <h3 className="font-medium mt-4">Eligibility & Requirements</h3>
                      <ul className="space-y-2">
                        {recruitment.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="benefits" className="space-y-4">
                      <h3 className="font-medium mt-4">Scholarship & Benefits</h3>
                      <ul className="space-y-2">
                        {recruitment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="curriculum" className="space-y-4">
                      <h3 className="font-medium mt-4">Program Curriculum</h3>
                      <div className="space-y-4">
                        {recruitment.curriculum.map((category, index) => (
                          <div key={index}>
                            <h4 className="font-medium text-sm">{category.name}</h4>
                            <ul className="space-y-2 mt-2">
                              {category.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="flex items-start">
                                  <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                                  <span className="text-muted-foreground">{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="costs" className="space-y-4">
                      <h3 className="font-medium mt-4">Estimated Costs</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium">Tuition (per semester)</h4>
                            <p className="text-muted-foreground">5,000,000 KRW</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Application Fee</h4>
                            <p className="text-muted-foreground">100,000 KRW</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Housing (monthly)</h4>
                            <p className="text-muted-foreground">300,000 - 600,000 KRW</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Living Expenses (monthly)</h4>
                            <p className="text-muted-foreground">600,000 - 1,000,000 KRW</p>
                          </div>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="text-sm font-medium mb-2">Cost Calculator</h4>
                          <p className="text-xs text-muted-foreground mb-4">
                            Estimate your total costs based on your program duration and living preferences.
                          </p>
                          <Button size="sm">Open Calculator</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div>
                    <h3 className="font-medium mb-2">University Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{recruitment.universityInfo.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Established: {recruitment.universityInfo.established}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Students: {recruitment.universityInfo.studentsCount}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>Ranking: {recruitment.universityInfo.ranking}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>International Students: {recruitment.universityInfo.internationalStudents}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
                          <Link href="#" className="text-primary hover:underline">
                            Visit University Website
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-2">Facilities</h3>
                      <ul className="space-y-2">
                        {recruitment.universityInfo.facilities.map((facility, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Surroundings</h3>
                      <ul className="space-y-2">
                        {recruitment.universityInfo.surroundings.map((surrounding, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{surrounding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button size="lg" className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Professor Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-2">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="font-medium">{recruitment.professorInfo.name}</h3>
                    <p className="text-sm text-muted-foreground">{recruitment.professorInfo.title}</p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-sm font-medium mb-2">Education</h4>
                    <ul className="space-y-1">
                      {recruitment.professorInfo.education.map((edu, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Research Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {recruitment.professorInfo.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="outline">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Selected Publications</h4>
                    <ul className="space-y-2">
                      {recruitment.professorInfo.publications.map((pub, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`mailto:${recruitment.professorInfo.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Professor
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Application Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Application Form</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Research Proposal Template</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Recommendation Letter Form</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Application Deadline</p>
                        <p className="text-sm text-muted-foreground">{formatDate(recruitment.deadline)}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Document Review</p>
                        <p className="text-sm text-muted-foreground">January 15, 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Interview Period</p>
                        <p className="text-sm text-muted-foreground">January 20-30, 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Final Results</p>
                        <p className="text-sm text-muted-foreground">February 15, 2024</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Program Start</p>
                        <p className="text-sm text-muted-foreground">March 2, 2024</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
