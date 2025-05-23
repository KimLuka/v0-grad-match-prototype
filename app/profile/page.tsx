"use client"

import { useState } from "react"
import {
  BookOpen,
  Calendar,
  Edit,
  FileText,
  GraduationCap,
  Heart,
  LayoutDashboard,
  LogOut,
  MapPin,
  Settings,
  User,
  Download,
  Trash2,
  Shield,
  Globe,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "applicant", // or "professor"
    avatar: "/placeholder.svg?height=100&width=100",
    nationality: "United States",
    birthYear: "1998",
    topikLevel: "Level 3",
    stAlliance: true,
    desiredDegree: "Ph.D.",
    interests: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    education: [
      {
        degree: "Master of Science in Computer Science",
        institution: "University of Washington",
        year: "2020-2022",
      },
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Oregon",
        year: "2016-2020",
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
    introduction:
      "I am a computer science graduate with a strong interest in artificial intelligence and machine learning. I am seeking to pursue a Ph.D. in Computer Science at a Korean university to further my research in these areas.",
    studyPlan:
      "My research plan focuses on developing novel deep learning architectures for computer vision applications, particularly in the areas of object detection and image segmentation. I am interested in exploring how these techniques can be applied to real-world problems such as medical imaging and autonomous driving.",
  }

  // Mock saved items
  const savedItems = [
    {
      id: "1",
      type: "recruitment",
      title: "Seoul National University - Computer Science",
      professor: "Dr. Kim Minho",
      savedDate: "2023-10-15",
    },
    {
      id: "2",
      type: "recruitment",
      title: "KAIST - Artificial Intelligence",
      professor: "Dr. Lee Sunghoon",
      savedDate: "2023-10-12",
    },
    {
      id: "3",
      type: "applicant",
      title: "Ahmed Hassan",
      description: "Ph.D. candidate in Robotics",
      savedDate: "2023-10-10",
    },
  ]

  const renderSidebar = () => (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 text-center">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <div className="flex justify-center pt-2">
              <Badge variant="outline">{user.role === "applicant" ? "Applicant" : "Professor"}</Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
        <Separator className="my-6" />
        <nav className="flex flex-col space-y-1">
          <Button
            variant={activeTab === "profile" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("profile")}
          >
            <User className="mr-2 h-4 w-4" />
            My Profile
          </Button>
          <Button
            variant={activeTab === "applications" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("applications")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Applications
          </Button>
          <Button
            variant={activeTab === "saved" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("saved")}
          >
            <Heart className="mr-2 h-4 w-4" />
            Saved
          </Button>
          <Button
            variant={activeTab === "settings" ? "secondary" : "ghost"}
            className="justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Separator />
          <Button variant="ghost" className="justify-start text-red-500 hover:text-red-500 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </nav>
      </CardContent>
    </Card>
  )

  const renderProfileContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Your personal and academic information visible to universities and professors</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="education">Education & Experience</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <Separator className="my-2" />
                  <dl className="space-y-2">
                    <div className="flex">
                      <dt className="w-1/3 text-sm font-medium text-muted-foreground">Nationality:</dt>
                      <dd className="w-2/3 text-sm">{user.nationality}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-1/3 text-sm font-medium text-muted-foreground">Birth Year:</dt>
                      <dd className="w-2/3 text-sm">{user.birthYear}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-1/3 text-sm font-medium text-muted-foreground">TOPIK Level:</dt>
                      <dd className="w-2/3 text-sm">{user.topikLevel}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-1/3 text-sm font-medium text-muted-foreground">ST Alliance:</dt>
                      <dd className="w-2/3 text-sm">{user.stAlliance ? "Yes" : "No"}</dd>
                    </div>
                    <div className="flex">
                      <dt className="w-1/3 text-sm font-medium text-muted-foreground">Desired Degree:</dt>
                      <dd className="w-2/3 text-sm">{user.desiredDegree}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Research Interests</h3>
                  <Separator className="my-2" />
                  <div className="flex flex-wrap gap-2 pt-2">
                    {user.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Introduction</h3>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">{user.introduction}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Study Plan</h3>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">{user.studyPlan}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Information
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6 pt-6">
            <div>
              <h3 className="text-lg font-medium">Education</h3>
              <Separator className="my-2" />
              <div className="space-y-4 pt-2">
                {user.education.map((edu, index) => (
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium">Work Experience</h3>
              <Separator className="my-2" />
              <div className="space-y-4 pt-2">
                {user.experience.map((exp, index) => (
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
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6 pt-6">
            <div>
              <h3 className="text-lg font-medium">Publications</h3>
              <Separator className="my-2" />
              <div className="space-y-4 pt-2">
                {user.publications.map((pub, index) => (
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
            </div>

            <div>
              <h3 className="text-lg font-medium">Projects</h3>
              <Separator className="my-2" />
              <div className="space-y-4 pt-2">
                {user.projects.map((project, index) => (
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
            </div>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6 pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Resume/CV</h3>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
              <Separator />
              <div className="p-4 border rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-muted-foreground mr-4" />
                  <div>
                    <p className="font-medium">Sarah_Johnson_CV.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded on Oct 15, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Research Proposal</h3>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
              <Separator />
              <div className="p-4 border rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-muted-foreground mr-4" />
                  <div>
                    <p className="font-medium">Research_Proposal_AI.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded on Oct 20, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Certificates</h3>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload
                </Button>
              </div>
              <Separator />
              <div className="p-4 border rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-muted-foreground mr-4" />
                  <div>
                    <p className="font-medium">TOPIK_Certificate.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded on Sep 5, 2023</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )

  const renderSavedContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Saved Items</CardTitle>
        <CardDescription>Your bookmarked recruitment posts and applicant profiles</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-muted rounded-full">
                  {item.type === "recruitment" ? <GraduationCap className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.type === "recruitment" ? item.professor : item.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Saved on {new Date(item.savedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  const renderSettingsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences and security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Sarah" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Johnson" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself..." />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription>Control who can see your information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Profile Visibility</Label>
              <p className="text-sm text-muted-foreground">Make your profile visible to professors</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Contact Information</Label>
              <p className="text-sm text-muted-foreground">Allow professors to see your email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Show Documents</Label>
              <p className="text-sm text-muted-foreground">Allow professors to download your documents</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Choose what notifications you want to receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Application Updates</Label>
              <p className="text-sm text-muted-foreground">Get notified about application status changes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>New Opportunities</Label>
              <p className="text-sm text-muted-foreground">Get notified about new recruitment posts</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            <Shield className="mr-2 h-4 w-4" />
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Globe className="mr-2 h-4 w-4" />
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Download className="mr-2 h-4 w-4" />
            Download My Data
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  )

  const renderApplicationsContent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Application Status</CardTitle>
        <CardDescription>Track your graduate program applications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <LayoutDashboard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
          <p className="text-muted-foreground mb-4">You haven't submitted any applications yet.</p>
          <Button>Browse Programs</Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="bg-gray-50 py-10">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">{renderSidebar()}</div>

            <div className="md:w-3/4">
              {activeTab === "profile" && renderProfileContent()}
              {activeTab === "applications" && renderApplicationsContent()}
              {activeTab === "saved" && renderSavedContent()}
              {activeTab === "settings" && renderSettingsContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
