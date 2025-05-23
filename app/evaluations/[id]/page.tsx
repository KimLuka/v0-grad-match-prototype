"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, Clock, Download, Eye, FileText, Save, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function EvaluationPage({ params }: { params: { id: string } }) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // State for evaluation form
  const [evaluation, setEvaluation] = useState({
    academicFit: "3",
    researchPotential: "3",
    technicalSkills: "3",
    communication: "3",
    overallRating: "3",
    notes: "",
    status: "under_review",
  })

  // In a real app, you would fetch the application data based on the ID
  // For this example, we'll use mock data
  const application = {
    id: params.id,
    university: "서울대학교",
    department: "컴퓨터공학과",
    professor: "김민호 교수",
    position: "박사과정",
    status: "under_review",
    appliedDate: "2023-10-15",
    deadline: "2023-12-31",
    applicationDocuments: [
      {
        name: "이력서_김사라.pdf",
        type: "이력서/CV",
        uploadDate: "2023-10-15",
        size: "2.4 MB",
      },
      {
        name: "연구계획서_AI.pdf",
        type: "연구계획서",
        uploadDate: "2023-10-15",
        size: "1.8 MB",
      },
      {
        name: "TOPIK_증명서.pdf",
        type: "증명서",
        uploadDate: "2023-10-15",
        size: "1.2 MB",
      },
      {
        name: "추천서_1.pdf",
        type: "추천서",
        uploadDate: "2023-10-15",
        size: "0.9 MB",
      },
      {
        name: "성적증명서.pdf",
        type: "성적증명서",
        uploadDate: "2023-10-15",
        size: "1.5 MB",
      },
    ],
    applicant: {
      id: "applicant-1",
      name: "김사라",
      nationality: "미국",
      email: "sarah.kim@example.com",
      topikLevel: "3급",
      desiredDegree: "박사과정",
      research: "인공지능",
      education: [
        {
          degree: "컴퓨터공학 석사",
          institution: "워싱턴 대학교",
          year: "2020-2022",
          gpa: "3.8/4.0",
        },
        {
          degree: "컴퓨터공학 학사",
          institution: "오레곤 대학교",
          year: "2016-2020",
          gpa: "3.7/4.0",
        },
      ],
    },
    existingEvaluation: {
      id: "eval-1",
      date: "2023-10-28",
      evaluator: "김민호 교수",
      academicFit: "4",
      researchPotential: "5",
      technicalSkills: "4",
      communication: "3",
      overallRating: "4",
      notes:
        "강한 학문적 배경과 연구 잠재력을 보유하고 있습니다. 특히 머신러닝 분야의 기술적 능력이 뛰어납니다. 의사소통 능력은 개선이 필요하지만, 전반적으로 매우 유망한 후보자입니다.",
      status: "under_review",
    },
  }

  // Set existing evaluation if available
  useEffect(() => {
    if (application.existingEvaluation) {
      setEvaluation({
        academicFit: application.existingEvaluation.academicFit,
        researchPotential: application.existingEvaluation.researchPotential,
        technicalSkills: application.existingEvaluation.technicalSkills,
        communication: application.existingEvaluation.communication,
        overallRating: application.existingEvaluation.overallRating,
        notes: application.existingEvaluation.notes,
        status: application.existingEvaluation.status,
      })
    }
  }, [application.existingEvaluation])

  const handleEvaluationChange = (field: string, value: string) => {
    setEvaluation((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleStatusChange = (status: string) => {
    setEvaluation((prev) => ({
      ...prev,
      status,
    }))
  }

  const handleSaveEvaluation = () => {
    // In a real app, you would save the evaluation to the database
    console.log("평가 저장:", evaluation)
    alert("평가가 성공적으로 저장되었습니다!")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            대기중
          </Badge>
        )
      case "under_review":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            심사중
          </Badge>
        )
      case "under_interview":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            면접중
          </Badge>
        )
      case "accepted":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            합격
          </Badge>
        )
      default:
        return <Badge variant="outline">알 수 없음</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "under_review":
        return <Eye className="h-5 w-5 text-blue-500" />
      case "under_interview":
        return <User className="h-5 w-5 text-purple-500" />
      case "accepted":
        return <Check className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
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
              <Link href="/applications">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">뒤로</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">지원자 평가</h1>
              <p className="text-muted-foreground">
                {application.applicant.name} - {application.university}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Evaluation Form */}
              <Card>
                <CardHeader>
                  <CardTitle>평가 양식</CardTitle>
                  <CardDescription>지원자의 자격과 잠재력을 평가하세요</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>학문적 적합성</Label>
                        <div className="flex space-x-2 mt-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <input
                                type="radio"
                                id={`academic-${value}`}
                                name="academicFit"
                                value={value.toString()}
                                checked={evaluation.academicFit === value.toString()}
                                onChange={() => handleEvaluationChange("academicFit", value.toString())}
                                className="h-4 w-4"
                              />
                              <Label htmlFor={`academic-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>연구 잠재력</Label>
                        <div className="flex space-x-2 mt-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <input
                                type="radio"
                                id={`research-${value}`}
                                name="researchPotential"
                                value={value.toString()}
                                checked={evaluation.researchPotential === value.toString()}
                                onChange={() => handleEvaluationChange("researchPotential", value.toString())}
                                className="h-4 w-4"
                              />
                              <Label htmlFor={`research-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label>기술적 능력</Label>
                        <div className="flex space-x-2 mt-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <input
                                type="radio"
                                id={`technical-${value}`}
                                name="technicalSkills"
                                value={value.toString()}
                                checked={evaluation.technicalSkills === value.toString()}
                                onChange={() => handleEvaluationChange("technicalSkills", value.toString())}
                                className="h-4 w-4"
                              />
                              <Label htmlFor={`technical-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label>의사소통 능력</Label>
                        <div className="flex space-x-2 mt-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <div key={value} className="flex flex-col items-center">
                              <input
                                type="radio"
                                id={`communication-${value}`}
                                name="communication"
                                value={value.toString()}
                                checked={evaluation.communication === value.toString()}
                                onChange={() => handleEvaluationChange("communication", value.toString())}
                                className="h-4 w-4"
                              />
                              <Label htmlFor={`communication-${value}`} className="mt-1">
                                {value}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>종합 평가</Label>
                    <div className="flex space-x-2 mt-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex flex-col items-center">
                          <input
                            type="radio"
                            id={`overall-${value}`}
                            name="overallRating"
                            value={value.toString()}
                            checked={evaluation.overallRating === value.toString()}
                            onChange={() => handleEvaluationChange("overallRating", value.toString())}
                            className="h-4 w-4"
                          />
                          <Label htmlFor={`overall-${value}`} className="mt-1">
                            {value}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>평가 메모</Label>
                    <Textarea
                      value={evaluation.notes}
                      onChange={(e) => handleEvaluationChange("notes", e.target.value)}
                      placeholder="평가 메모를 입력하세요..."
                      className="mt-2"
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label>지원 상태</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                      <Button
                        variant={evaluation.status === "pending" ? "default" : "outline"}
                        onClick={() => handleStatusChange("pending")}
                        className="justify-start"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        대기중
                      </Button>
                      <Button
                        variant={evaluation.status === "under_review" ? "default" : "outline"}
                        onClick={() => handleStatusChange("under_review")}
                        className="justify-start"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        심사중
                      </Button>
                      <Button
                        variant={evaluation.status === "under_interview" ? "default" : "outline"}
                        onClick={() => handleStatusChange("under_interview")}
                        className="justify-start"
                      >
                        <User className="mr-2 h-4 w-4" />
                        면접
                      </Button>
                      <Button
                        variant={evaluation.status === "accepted" ? "default" : "outline"}
                        onClick={() => handleStatusChange("accepted")}
                        className="justify-start"
                      >
                        <Check className="mr-2 h-4 w-4" />
                        합격
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSaveEvaluation}>
                      <Save className="mr-2 h-4 w-4" />
                      평가 저장
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Application Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>지원 서류</CardTitle>
                  <CardDescription>지원서와 함께 제출된 서류</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.applicationDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{doc.type}</span>
                              <span>{new Date(doc.uploadDate).toLocaleDateString("ko-KR")}에 업로드됨</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">다운로드</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Applicant Information */}
              <Card>
                <CardHeader>
                  <CardTitle>지원자 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {application.applicant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{application.applicant.name}</h3>
                      <p className="text-sm text-muted-foreground">{application.applicant.email}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">국적:</p>
                      <p className="text-sm font-medium">{application.applicant.nationality}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">TOPIK 급수:</p>
                      <p className="text-sm font-medium">{application.applicant.topikLevel}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">희망 과정:</p>
                      <p className="text-sm font-medium">{application.applicant.desiredDegree}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">연구 분야:</p>
                      <p className="text-sm font-medium">{application.applicant.research}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <p className="text-sm font-medium">학력</p>
                    {application.applicant.education.map((edu, index) => (
                      <div key={index} className="space-y-1">
                        <p className="text-sm">{edu.degree}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">{edu.institution}</p>
                          <p className="text-xs text-muted-foreground">GPA: {edu.gpa}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/applicant/${application.applicant.id}`}>전체 프로필 보기</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Application Details */}
              <Card>
                <CardHeader>
                  <CardTitle>지원 상세정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(application.status)}
                    {getStatusBadge(application.status)}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">과정:</p>
                      <p className="text-sm font-medium">{application.position}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">학과:</p>
                      <p className="text-sm font-medium">{application.department}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">지원일:</p>
                      <p className="text-sm font-medium">{formatDate(application.appliedDate)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">마감일:</p>
                      <p className="text-sm font-medium">{formatDate(application.deadline)}</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/applications/${application.id}`}>지원서 보기</Link>
                    </Button>
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
