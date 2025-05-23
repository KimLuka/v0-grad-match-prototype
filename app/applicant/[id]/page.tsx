"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Share2,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ApplicantDetailPage({ params }: { params: { id: string } }) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Check if user is authenticated as professor (mock implementation)
  useEffect(() => {
    // In a real app, you would check the user's authentication status
    // For demo purposes, we'll show the auth modal
    if (!isAuthenticated) {
      setShowAuthModal(true)
    }
  }, [isAuthenticated])

  // Mock applicant data
  const applicant = {
    id: params.id,
    name: "Sarah Johnson",
    nationality: "United States",
    birthYear: "1998",
    email: "sarah.johnson@example.com",
    topikLevel: "Level 3",
    stAlliance: true,
    desiredDegree: "Ph.D.",
    interests: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    introduction:
      "I am a computer science graduate with a strong interest in artificial intelligence and machine learning. I am seeking to pursue a Ph.D. in Computer Science at a Korean university to further my research in these areas.",
    studyPlan:
      "My research plan focuses on developing novel deep learning architectures for computer vision applications, particularly in the areas of object detection and image segmentation. I am interested in exploring how these techniques can be applied to real-world problems such as medical imaging and autonomous driving.",
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "University of Washington",
        year: "2020-2022",
        gpa: "3.8/4.0",
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Oregon",
        year: "2016-2020",
        gpa: "3.7/4.0",
      },
    ],
    experience: [
      {
        title: "Research Assistant",
        company: "University of Washington AI Lab",
        year: "2021-2022",
        description: "Conducted research on deep learning models for computer vision applications.",
      },
      {
        title: "Software Engineering Intern",
        company: "Tech Solutions Inc.",
        year: "2020",
        description: "Developed and maintained web applications using React and Node.js.",
      },
    ],
    publications: [
      {
        title: "A Novel Approach to Image Recognition Using Deep Learning",
        journal: "International Journal of Computer Vision",
        year: "2022",
      },
    ],
    projects: [
      {
        title: "Automated Image Classification System",
        description: "Developed a system that automatically classifies images using deep learning techniques.",
        year: "2021",
      },
      {
        title: "Natural Language Processing Toolkit",
        description: "Created a toolkit for processing and analyzing natural language data.",
        year: "2020",
      },
    ],
    documents: [
      { name: "Resume_Sarah_Johnson.pdf", type: "Resume", uploadDate: "2023-10-15" },
      { name: "Research_Proposal_AI.pdf", type: "Research Proposal", uploadDate: "2023-10-20" },
      { name: "TOPIK_Certificate.pdf", type: "Certificate", uploadDate: "2023-09-05" },
    ],
  }

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app, you would verify credentials
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  if (!isAuthenticated) {
    return (
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Professor Verification Required</DialogTitle>
            <DialogDescription>
              Access to applicant profiles is restricted to verified university professors. Please provide your
              verification details.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <Input id="university" placeholder="Enter your university" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input id="department" placeholder="Enter your department" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="employee-id">Employee ID</Label>
              <Input id="employee-id" placeholder="Enter your employee ID" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="verification-code">Verification Code</Label>
              <Input id="verification-code" placeholder="Enter verification code" required />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Verify & Access
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowAuthModal(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search/applicants">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{applicant.name}</h1>
              <p className="text-muted-foreground">{applicant.nationality}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Header */}
            <div className="lg:col-span-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt={applicant.name} />
                      <AvatarFallback>
                        {applicant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold">{applicant.name}</h2>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            <span>{applicant.nationality}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>Born {applicant.birthYear}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="mr-1 h-4 w-4" />
                            <span>{applicant.email}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{applicant.desiredDegree}</Badge>
                        <Badge variant="outline">TOPIK {applicant.topikLevel}</Badge>
                        {applicant.stAlliance && <Badge className="bg-blue-500">ST Alliance</Badge>}
                      </div>
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
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle>Introduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{applicant.introduction}</p>
                </CardContent>
              </Card>

              {/* Study Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Study Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{applicant.studyPlan}</p>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card>
                <CardHeader>
                  <CardTitle>Research Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {applicant.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.education.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{edu.degree}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              <span>{edu.year}</span>
                            </div>
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.experience.map((exp, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{exp.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-1 h-3 w-3" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{exp.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground pt-1">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Publications */}
              <Card>
                <CardHeader>
                  <CardTitle>Publications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.publications.map((pub, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{pub.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{pub.journal}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{pub.year}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicant.projects.map((project, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="mt-0.5">
                          <BookOpen className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-medium">{project.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            <span>{project.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground pt-1">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href={`mailto:${applicant.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {applicant.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{doc.type}</p>
                          <p className="text-xs text-muted-foreground">
                            Uploaded {new Date(doc.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Desired Degree</span>
                    <span className="text-sm font-medium">{applicant.desiredDegree}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">TOPIK Level</span>
                    <span className="text-sm font-medium">{applicant.topikLevel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">ST Alliance</span>
                    <span className="text-sm font-medium">{applicant.stAlliance ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Publications</span>
                    <span className="text-sm font-medium">{applicant.publications.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="text-sm font-medium">{applicant.projects.length}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
