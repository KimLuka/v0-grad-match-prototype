'use client'

import { ArrowLeft, Check, Clock, Download, Eye, FileText, Save, User } from 'lucide-react'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/useToast'

export default function EvaluationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { toast: showToast } = useToast()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // State for evaluation form
  const [evaluation, setEvaluation] = useState({
    academicFit: '3',
    researchPotential: '3',
    technicalSkills: '3',
    communication: '3',
    overallRating: '3',
    scholarshipEligible: 'no',
    researchFundingEligible: 'no',
    notes: '',
    background: '',
    status: 'under_review',
    pendingStatus: null as string | null,
  })

  // Move application data outside to prevent dependency issues
  const application = {
    id: id,
    university: '서울대학교',
    department: '컴퓨터공학과',
    professor: '김민호 교수',
    position: '박사과정',
    status: 'under_review',
    appliedDate: '2023-10-15',
    deadline: '2023-12-31',
    applicationDocuments: [
      {
        name: '이력서_김사라.pdf',
        type: '이력서/CV',
        uploadDate: '2023-10-15',
        size: '2.4 MB',
      },
      {
        name: '연구계획서_AI.pdf',
        type: '연구계획서',
        uploadDate: '2023-10-15',
        size: '1.8 MB',
      },
      {
        name: 'TOPIK_증명서.pdf',
        type: '증명서',
        uploadDate: '2023-10-15',
        size: '1.2 MB',
      },
      {
        name: '추천서_1.pdf',
        type: '추천서',
        uploadDate: '2023-10-15',
        size: '0.9 MB',
      },
      {
        name: '성적증명서.pdf',
        type: '성적증명서',
        uploadDate: '2023-10-15',
        size: '1.5 MB',
      },
    ],
    applicant: {
      id: 'applicant-1',
      name: '김사라',
      nationality: '미국',
      email: 'sarah.kim@example.com',
      topikLevel: '3급',
      desiredDegree: '박사과정',
      research: '인공지능',
      education: [
        {
          degree: '컴퓨터공학 석사',
          institution: '워싱턴 대학교',
          year: '2020-2022',
          gpa: '3.8/4.0',
        },
        {
          degree: '컴퓨터공학 학사',
          institution: '오레곤 대학교',
          year: '2016-2020',
          gpa: '3.7/4.0',
        },
      ],
    },
    existingEvaluation: {
      id: 'eval-1',
      date: '2023-10-28',
      evaluator: '김민호 교수',
      academicFit: '4',
      researchPotential: '5',
      technicalSkills: '4',
      communication: '3',
      overallRating: '4',
      scholarshipEligible: 'yes',
      researchFundingEligible: 'yes',
      background:
        '지원자는 워싱턴 대학교와 오레곤 대학교에서 우수한 성적으로 학업을 마쳤으며, 특히 인공지능 분야에서 뛰어난 연구 성과를 보여주었습니다.',
      notes:
        '강한 학문적 배경과 연구 잠재력을 보유하고 있습니다. 특히 머신러닝 분야의 기술적 능력이 뛰어납니다. 의사소통 능력은 개선이 필요하지만, 전반적으로 매우 유망한 후보자입니다.',
      status: 'under_review',
    },
  }

  // Set existing evaluation if available - run only once
  useEffect(() => {
    if (application.existingEvaluation) {
      setEvaluation({
        academicFit: application.existingEvaluation.academicFit,
        researchPotential: application.existingEvaluation.researchPotential,
        technicalSkills: application.existingEvaluation.technicalSkills,
        communication: application.existingEvaluation.communication,
        overallRating: application.existingEvaluation.overallRating,
        scholarshipEligible: application.existingEvaluation.scholarshipEligible,
        researchFundingEligible: application.existingEvaluation.researchFundingEligible,
        notes: application.existingEvaluation.notes,
        background: application.existingEvaluation.background || '',
        status: application.existingEvaluation.status,
        pendingStatus: null,
      })
    }
  }, []) // Empty dependency array to run only once

  const handleEvaluationChange = (field: string, value: string) => {
    setEvaluation(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleStatusChange = (status: string) => {
    setEvaluation(prev => ({
      ...prev,
      pendingStatus: status,
    }))

    showToast({
      title: '상태 변경 대기',
      description: '평가 저장 버튼을 클릭하면 상태가 변경됩니다.',
    })
  }

  const handleSaveEvaluation = () => {
    // In a real app, you would save the evaluation to the database
    console.info('평가 저장:', evaluation)

    const newStatus = evaluation.pendingStatus || evaluation.status

    setEvaluation(prev => ({
      ...prev,
      status: newStatus,
      pendingStatus: null,
    }))

    if (newStatus === 'under_interview') {
      showToast({
        title: '심사 완료',
        description: '지원자를 면접 대상자로 선정했습니다.',
      })
    } else if (newStatus === 'under_review') {
      showToast({
        title: '평가 저장 완료',
        description: '평가가 저장되었습니다. 아직 심사중인 상태로 표시됩니다.',
      })
    } else {
      showToast({
        title: '평가 저장 완료',
        description: '모든 정보가 성공적으로 저장되었습니다.',
      })
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <Badge variant="outline" className="border-yellow-200 bg-yellow-50 text-yellow-700">
            대기중
          </Badge>
        )
      case 'under_review':
        return (
          <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
            심사중
          </Badge>
        )
      case 'under_interview':
        return (
          <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">
            면접중
          </Badge>
        )
      case 'accepted':
        return (
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
            합격
          </Badge>
        )
      default:
        return <Badge variant="outline">알 수 없음</Badge>
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
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const RatingScale = ({
    name,
    label,
    value,
    onChange,
  }: {
    name: string
    label: string
    value: string
    onChange: (value: string) => void
  }) => (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
        <span className="text-xs font-medium text-gray-500">부족</span>
        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5].map(ratingValue => (
            <div key={ratingValue} className="flex flex-col items-center space-y-2">
              <input
                type="radio"
                id={`${name}-${ratingValue}`}
                name={name}
                value={ratingValue.toString()}
                checked={value === ratingValue.toString()}
                onChange={() => onChange(ratingValue.toString())}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <Label
                htmlFor={`${name}-${ratingValue}`}
                className="cursor-pointer select-none text-sm font-medium"
              >
                {ratingValue}
              </Label>
            </div>
          ))}
        </div>
        <span className="text-xs font-medium text-gray-500">우수</span>
      </div>
    </div>
  )

  const YesNoToggle = ({
    name,
    label,
    value,
    onChange,
  }: {
    name: string
    label: string
    value: string
    onChange: (value: string) => void
  }) => (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
        <button
          type="button"
          onClick={() => onChange('yes')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            value === 'yes'
              ? 'bg-green-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          예
        </button>
        <button
          type="button"
          onClick={() => onChange('no')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all ${
            value === 'no' ? 'bg-red-500 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          아니오
        </button>
      </div>
    </div>
  )

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
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

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-8 lg:col-span-2">
              {/* Evaluation Form */}
              <Card>
                <CardHeader>
                  <CardTitle>평가 양식</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Rating Scales */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <RatingScale
                      name="academicFit"
                      label="학문적 적합성"
                      value={evaluation.academicFit}
                      onChange={value => handleEvaluationChange('academicFit', value)}
                    />

                    <RatingScale
                      name="researchPotential"
                      label="연구 잠재력"
                      value={evaluation.researchPotential}
                      onChange={value => handleEvaluationChange('researchPotential', value)}
                    />

                    <RatingScale
                      name="technicalSkills"
                      label="기술적 능력"
                      value={evaluation.technicalSkills}
                      onChange={value => handleEvaluationChange('technicalSkills', value)}
                    />

                    <RatingScale
                      name="communication"
                      label="의사소통 능력"
                      value={evaluation.communication}
                      onChange={value => handleEvaluationChange('communication', value)}
                    />
                  </div>

                  <Separator />

                  {/* Financial Support Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">지원 혜택</h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <YesNoToggle
                        name="scholarshipEligible"
                        label="장학금 제공 가능"
                        value={evaluation.scholarshipEligible}
                        onChange={value => handleEvaluationChange('scholarshipEligible', value)}
                      />

                      <YesNoToggle
                        name="researchFundingEligible"
                        label="연구지원비 제공 가능"
                        value={evaluation.researchFundingEligible}
                        onChange={value => handleEvaluationChange('researchFundingEligible', value)}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Overall Rating */}
                  <div>
                    <RatingScale
                      name="overallRating"
                      label="종합 평가"
                      value={evaluation.overallRating}
                      onChange={value => handleEvaluationChange('overallRating', value)}
                    />
                  </div>

                  {/* Background Section - Added */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">배경</Label>
                    <Textarea
                      value={evaluation.background}
                      onChange={e => handleEvaluationChange('background', e.target.value)}
                      placeholder="지원자의 학업/연구/경력 배경에 대한 평가를 작성해주세요..."
                      className="min-h-[80px] bg-white"
                      rows={3}
                    />
                  </div>

                  {/* Notes */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">평가 메모</Label>
                    <Textarea
                      value={evaluation.notes}
                      onChange={e => handleEvaluationChange('notes', e.target.value)}
                      placeholder="지원자에 대한 상세한 평가 의견을 작성해주세요..."
                      className="min-h-[120px] bg-white"
                      rows={6}
                    />
                  </div>

                  {/* Status Selection */}
                  <div className="space-y-4">
                    <Label className="text-sm font-medium">지원 상태</Label>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                      <Button
                        variant={
                          evaluation.pendingStatus === 'pending' ||
                          (evaluation.status === 'pending' && !evaluation.pendingStatus)
                            ? 'default'
                            : 'outline'
                        }
                        onClick={() => handleStatusChange('pending')}
                        className="h-12 justify-start"
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        대기중
                      </Button>
                      <Button
                        variant={
                          evaluation.pendingStatus === 'under_review' ||
                          (evaluation.status === 'under_review' && !evaluation.pendingStatus)
                            ? 'default'
                            : 'outline'
                        }
                        onClick={() => handleStatusChange('under_review')}
                        className="h-12 justify-start"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        심사중
                      </Button>
                      <Button
                        variant={
                          evaluation.pendingStatus === 'under_interview' ||
                          (evaluation.status === 'under_interview' && !evaluation.pendingStatus)
                            ? 'default'
                            : 'outline'
                        }
                        onClick={() => handleStatusChange('under_interview')}
                        className="h-12 justify-start"
                      >
                        <User className="mr-2 h-4 w-4" />
                        면접
                      </Button>
                      <Button
                        variant={
                          evaluation.pendingStatus === 'accepted' ||
                          (evaluation.status === 'accepted' && !evaluation.pendingStatus)
                            ? 'default'
                            : 'outline'
                        }
                        onClick={() => handleStatusChange('accepted')}
                        className="h-12 justify-start"
                      >
                        <Check className="mr-2 h-4 w-4" />
                        합격
                      </Button>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-4">
                    <Button onClick={handleSaveEvaluation} size="lg" className="px-8">
                      <Save className="mr-2 h-5 w-5" />
                      평가 저장
                    </Button>
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
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
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

              {/* Application Documents - Moved here */}
              <Card>
                <CardHeader>
                  <CardTitle>지원 서류</CardTitle>
                  <CardDescription>지원서와 함께 제출된 서류</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {application.applicationDocuments.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border bg-white p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                            <FileText className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <span className="font-medium">{doc.type}</span>
                              <span>•</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Download className="h-4 w-4" />
                          <span className="sr-only">다운로드</span>
                        </Button>
                      </div>
                    ))}
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
