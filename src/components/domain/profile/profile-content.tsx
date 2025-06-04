'use client'

import { useState } from 'react'
import { Plus, Trash2, Upload, X, Edit, Save } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/useToast'

interface BasicInfo {
  name: string
  email: string
  nationality: string
  birthYear: string
  koreanProficiency: {
    type: 'topik' | 'sejong' | 'language_institute' | 'none'
    level?: string
    university?: string
  }
  englishProficiency: {
    type: 'ielts' | 'toefl' | 'new_teps' | 'teps' | 'other' | 'none'
    score?: string
  }
}

interface ResearchInterest {
  tags: string[]
  fieldOfStudy:
    | 'humanities'
    | 'education'
    | 'natural-sciences'
    | 'engineering'
    | 'medicine'
    | 'arts'
  major: string
  desiredDegree: 'bachelor' | 'master' | 'phd' | 'integrated'
}

interface Education {
  id: string
  university: string
  major: string
  degree: 'bachelor' | 'master' | 'phd' | 'none'
  startYear: string
  endYear: string
}

interface Experience {
  id: string
  company: string
  position: string
  startYear: string
  endYear: string
  description: string
}

interface Publication {
  id: string
  title: string
  subtitle: string
  authors: string
  year: string
  link: string
  description: string
}

interface Project {
  id: string
  title: string
  year: string
  link: string
  description: string
}

interface FileItem {
  id: string
  title: string
  uploadDate: string
  file: File | null
}

interface User {
  name: string
  email: string
  avatar: string
  role: 'applicant' | 'professor'
  nationality?: string
  birthYear?: string
  topikLevel?: string
  stAlliance?: boolean
  desiredDegree?: string
  interests?: string[]
  introduction?: string
  studyPlan?: string
  education?: Array<{
    degree: string
    institution: string
    year: string
  }>
  experience?: Array<{
    title: string
    company: string
    year: string
    description: string
  }>
  publications?: Array<{
    title: string
    journal: string
    year: string
  }>
  projects?: Array<{
    title: string
    description: string
    year: string
  }>
  professorInfo?: {
    title: string
    department: string
    university: string
    researchAreas: string[]
    officeHours: string
    labName: string
  }
}

interface ProfileContentProps {
  userRole: string
  user: User
}

export default function ProfileContent({ userRole, user }: ProfileContentProps) {
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [newTag, setNewTag] = useState('')

  // 기본 정보
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    name: user.name || '김사라',
    email: user.email || 'sarah.kim@example.com',
    nationality: user.nationality || '미국',
    birthYear: user.birthYear || '1998',
    koreanProficiency: {
      type: 'topik',
      level: user.topikLevel || '3급',
    },
    englishProficiency: {
      type: 'toefl',
      score: '95',
    },
  })

  // 연구 관심 분야
  const [researchInterest, setResearchInterest] = useState<ResearchInterest>({
    tags: user.interests || ['인공지능', '머신러닝', '컴퓨터 비전'],
    fieldOfStudy: 'engineering',
    major: '컴퓨터공학',
    desiredDegree:
      user.desiredDegree === '박사과정'
        ? 'phd'
        : user.desiredDegree === '석사과정'
          ? 'master'
          : user.desiredDegree === '학사과정'
            ? 'bachelor'
            : 'phd',
  })

  // 소개 및 학업 계획
  const [introduction, setIntroduction] = useState(
    user.introduction || '저는 인공지능과 머신러닝에 강한 관심을 가진 컴퓨터공학 졸업생입니다.'
  )
  const [studyPlan, setStudyPlan] = useState(
    user.studyPlan ||
      '제 연구 계획은 컴퓨터 비전 응용을 위한 새로운 딥러닝 아키텍처 개발에 중점을 두고 있습니다.'
  )

  // 학력
  const [educations, setEducations] = useState<Education[]>(
    user.education?.map((edu, index) => ({
      id: index.toString(),
      university: edu.institution,
      major: '컴퓨터공학',
      degree:
        edu.degree === '컴퓨터공학 석사'
          ? 'master'
          : edu.degree === '컴퓨터공학 학사'
            ? 'bachelor'
            : 'bachelor',
      startYear: edu.year.split('-')[0] || '',
      endYear: edu.year.split('-')[1] || '',
    })) || [
      {
        id: '1',
        university: '워싱턴 대학교',
        major: '컴퓨터공학',
        degree: 'master',
        startYear: '2020',
        endYear: '2022',
      },
    ]
  )

  // 경력
  const [experiences, setExperiences] = useState<Experience[]>(
    user.experience?.map((exp, index) => ({
      id: index.toString(),
      company: exp.company,
      position: exp.title,
      startYear: exp.year.split('-')[0] || '',
      endYear: exp.year.split('-')[1] || '',
      description: exp.description,
    })) || [
      {
        id: '1',
        company: '워싱턴 대학교 AI 연구실',
        position: '연구조교',
        startYear: '2021',
        endYear: '2022',
        description: '컴퓨터 비전 응용을 위한 딥러닝 모델 연구를 수행했습니다.',
      },
    ]
  )

  // 논문
  const [publications, setPublications] = useState<Publication[]>(
    user.publications?.map((pub, index) => ({
      id: index.toString(),
      title: pub.title,
      subtitle: '',
      authors: '김사라, 이민수',
      year: pub.year,
      link: '',
      description: '',
    })) || [
      {
        id: '1',
        title: '딥러닝을 이용한 이미지 인식의 새로운 접근법',
        subtitle: '',
        authors: '김사라, 이민수',
        year: '2022',
        link: '',
        description: '',
      },
    ]
  )

  // 프로젝트
  const [projects, setProjects] = useState<Project[]>(
    user.projects?.map((proj, index) => ({
      id: index.toString(),
      title: proj.title,
      year: proj.year,
      link: '',
      description: proj.description,
    })) || [
      {
        id: '1',
        title: '자동 이미지 분류 시스템',
        year: '2021',
        link: '',
        description: '딥러닝 기법을 사용하여 이미지를 자동으로 분류하는 시스템을 개발했습니다.',
      },
    ]
  )

  // 파일들
  const [resumes, setResumes] = useState<FileItem[]>([])
  const [researchPlans, setResearchPlans] = useState<FileItem[]>([])
  const [certificates, setCertificates] = useState<FileItem[]>([])

  // 태그 추가
  const addTag = () => {
    if (newTag && !researchInterest.tags.includes(newTag)) {
      setResearchInterest(prev => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }))
      setNewTag('')
    }
  }

  // 태그 제거
  const removeTag = (tagToRemove: string) => {
    setResearchInterest(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
    }))
  }

  // 항목 추가/삭제 함수들
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      university: '',
      major: '',
      degree: 'bachelor',
      startYear: '',
      endYear: '',
    }
    setEducations(prev => [...prev, newEducation])
  }

  const removeEducation = (id: string) => {
    setEducations(prev => prev.filter(edu => edu.id !== id))
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducations(prev => prev.map(edu => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startYear: '',
      endYear: '',
      description: '',
    }
    setExperiences(prev => [...prev, newExperience])
  }

  const removeExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperiences(prev => prev.map(exp => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addPublication = () => {
    const newPublication: Publication = {
      id: Date.now().toString(),
      title: '',
      subtitle: '',
      authors: '',
      year: '',
      link: '',
      description: '',
    }
    setPublications(prev => [...prev, newPublication])
  }

  const removePublication = (id: string) => {
    setPublications(prev => prev.filter(pub => pub.id !== id))
  }

  const updatePublication = (id: string, field: keyof Publication, value: string) => {
    setPublications(prev => prev.map(pub => (pub.id === id ? { ...pub, [field]: value } : pub)))
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      year: '',
      link: '',
      description: '',
    }
    setProjects(prev => [...prev, newProject])
  }

  const removeProject = (id: string) => {
    setProjects(prev => prev.filter(proj => proj.id !== id))
  }

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(prev => prev.map(proj => (proj.id === id ? { ...proj, [field]: value } : proj)))
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset all state to original values
    setBasicInfo({
      name: user.name || '김사라',
      email: user.email || 'sarah.kim@example.com',
      nationality: user.nationality || '미국',
      birthYear: user.birthYear || '1998',
      koreanProficiency: {
        type: 'topik',
        level: user.topikLevel || '3급',
      },
      englishProficiency: {
        type: 'toefl',
        score: '95',
      },
    })
    // Reset other states as needed...
  }

  const handleSave = () => {
    setIsEditing(false)
    toast({
      title: '프로필 저장 완료',
      description: '모든 정보가 성공적으로 저장되었습니다.',
    })
  }

  return (
    <div className="space-y-8">
      {userRole === 'applicant' ? (
        <>
          {/* 내 정보 */}
          <Card>
            <CardHeader>
              <CardTitle>내 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label>국적</Label>
                  {isEditing ? (
                    <Input
                      value={basicInfo.nationality}
                      onChange={e =>
                        setBasicInfo(prev => ({ ...prev, nationality: e.target.value }))
                      }
                    />
                  ) : (
                    <p className="mt-1 text-sm">{basicInfo.nationality}</p>
                  )}
                </div>
                <div>
                  <Label>출생년도</Label>
                  {isEditing ? (
                    <Input
                      value={basicInfo.birthYear}
                      onChange={e => setBasicInfo(prev => ({ ...prev, birthYear: e.target.value }))}
                    />
                  ) : (
                    <p className="mt-1 text-sm">{basicInfo.birthYear}</p>
                  )}
                </div>
              </div>

              {/* 한국어 성적 */}
              <div>
                <Label>한국어 성적</Label>
                {isEditing ? (
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Select
                      value={basicInfo.koreanProficiency.type}
                      onValueChange={(value: any) =>
                        setBasicInfo(prev => ({
                          ...prev,
                          koreanProficiency: { ...prev.koreanProficiency, type: value },
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="topik">TOPIK</SelectItem>
                        <SelectItem value="sejong">세종학당 중급 2 이상 수료자</SelectItem>
                        <SelectItem value="language_institute">한국대학 어학원 재학 중</SelectItem>
                        <SelectItem value="none">없음</SelectItem>
                      </SelectContent>
                    </Select>

                    {basicInfo.koreanProficiency.type === 'topik' && (
                      <Select
                        value={basicInfo.koreanProficiency.level}
                        onValueChange={value =>
                          setBasicInfo(prev => ({
                            ...prev,
                            koreanProficiency: { ...prev.koreanProficiency, level: value },
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="등급 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1급">1급</SelectItem>
                          <SelectItem value="2급">2급</SelectItem>
                          <SelectItem value="3급">3급</SelectItem>
                          <SelectItem value="4급">4급</SelectItem>
                          <SelectItem value="5급">5급</SelectItem>
                          <SelectItem value="6급">6급</SelectItem>
                        </SelectContent>
                      </Select>
                    )}

                    {basicInfo.koreanProficiency.type === 'language_institute' && (
                      <Input
                        placeholder="대학명 입력"
                        value={basicInfo.koreanProficiency.university || ''}
                        onChange={e =>
                          setBasicInfo(prev => ({
                            ...prev,
                            koreanProficiency: {
                              ...prev.koreanProficiency,
                              university: e.target.value,
                            },
                          }))
                        }
                      />
                    )}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-sm">
                      {basicInfo.koreanProficiency.type === 'topik' &&
                        `TOPIK ${basicInfo.koreanProficiency.level}`}
                      {basicInfo.koreanProficiency.type === 'sejong' &&
                        '세종학당 중급 2 이상 수료자'}
                      {basicInfo.koreanProficiency.type === 'language_institute' &&
                        `한국대학 어학원 재학 중 (${basicInfo.koreanProficiency.university})`}
                      {basicInfo.koreanProficiency.type === 'none' && '없음'}
                    </p>
                  </div>
                )}
              </div>

              {/* 영어 성적 */}
              <div>
                <Label>영어 성적</Label>
                {isEditing ? (
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Select
                      value={basicInfo.englishProficiency.type}
                      onValueChange={(value: any) =>
                        setBasicInfo(prev => ({
                          ...prev,
                          englishProficiency: { ...prev.englishProficiency, type: value },
                        }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ielts">IELTS</SelectItem>
                        <SelectItem value="toefl">TOEFL</SelectItem>
                        <SelectItem value="new_teps">NEW TEPS</SelectItem>
                        <SelectItem value="teps">TEPS</SelectItem>
                        <SelectItem value="other">기타 (직접 입력)</SelectItem>
                        <SelectItem value="none">없음</SelectItem>
                      </SelectContent>
                    </Select>

                    {basicInfo.englishProficiency.type !== 'none' && (
                      <Input
                        placeholder="점수 입력"
                        value={basicInfo.englishProficiency.score || ''}
                        onChange={e =>
                          setBasicInfo(prev => ({
                            ...prev,
                            englishProficiency: {
                              ...prev.englishProficiency,
                              score: e.target.value,
                            },
                          }))
                        }
                      />
                    )}
                  </div>
                ) : (
                  <div className="mt-2">
                    <p className="text-sm">
                      {basicInfo.englishProficiency.type !== 'none'
                        ? `${basicInfo.englishProficiency.type.toUpperCase()} ${basicInfo.englishProficiency.score}`
                        : '없음'}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 연구 관심 분야 */}
          <Card>
            <CardHeader>
              <CardTitle>연구 관심 분야</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 태그 */}
              <div>
                <Label>관심 분야 태그</Label>
                <div className="mb-2 mt-2 flex flex-wrap gap-2">
                  {researchInterest.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      {isEditing && (
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="새 태그 입력"
                      value={newTag}
                      onChange={e => setNewTag(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' && addTag()}
                    />
                    <Button type="button" onClick={addTag}>
                      추가
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div>
                  <Label>관심 계열</Label>
                  {isEditing ? (
                    <Select
                      value={researchInterest.fieldOfStudy}
                      onValueChange={(value: any) =>
                        setResearchInterest(prev => ({ ...prev, fieldOfStudy: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="humanities">인문사회</SelectItem>
                        <SelectItem value="education">교육</SelectItem>
                        <SelectItem value="natural-sciences">자연과학</SelectItem>
                        <SelectItem value="engineering">공학</SelectItem>
                        <SelectItem value="medicine">의학</SelectItem>
                        <SelectItem value="arts">예술</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="mt-1 text-sm">
                      {researchInterest.fieldOfStudy === 'humanities' && '인문사회'}
                      {researchInterest.fieldOfStudy === 'education' && '교육'}
                      {researchInterest.fieldOfStudy === 'natural-sciences' && '자연과학'}
                      {researchInterest.fieldOfStudy === 'engineering' && '공학'}
                      {researchInterest.fieldOfStudy === 'medicine' && '의학'}
                      {researchInterest.fieldOfStudy === 'arts' && '예술'}
                    </p>
                  )}
                </div>
                <div>
                  <Label>관심 학과</Label>
                  {isEditing ? (
                    <Input
                      value={researchInterest.major}
                      onChange={e =>
                        setResearchInterest(prev => ({ ...prev, major: e.target.value }))
                      }
                    />
                  ) : (
                    <p className="mt-1 text-sm">{researchInterest.major}</p>
                  )}
                </div>
                <div>
                  <Label>희망 학위</Label>
                  {isEditing ? (
                    <Select
                      value={researchInterest.desiredDegree}
                      onValueChange={(value: any) =>
                        setResearchInterest(prev => ({ ...prev, desiredDegree: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">학사</SelectItem>
                        <SelectItem value="master">석사</SelectItem>
                        <SelectItem value="phd">박사</SelectItem>
                        <SelectItem value="integrated">석박사통합</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="mt-1 text-sm">
                      {researchInterest.desiredDegree === 'bachelor' && '학사'}
                      {researchInterest.desiredDegree === 'master' && '석사'}
                      {researchInterest.desiredDegree === 'phd' && '박사'}
                      {researchInterest.desiredDegree === 'integrated' && '석박사통합'}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 소개 */}
          <Card>
            <CardHeader>
              <CardTitle>소개</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  placeholder="자기소개를 입력하세요"
                  value={introduction}
                  onChange={e => setIntroduction(e.target.value)}
                  rows={4}
                />
              ) : (
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">{introduction}</p>
              )}
            </CardContent>
          </Card>

          {/* 학업 계획 */}
          <Card>
            <CardHeader>
              <CardTitle>학업 계획</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  placeholder="학업 계획을 입력하세요"
                  value={studyPlan}
                  onChange={e => setStudyPlan(e.target.value)}
                  rows={6}
                />
              ) : (
                <p className="whitespace-pre-wrap text-sm text-muted-foreground">{studyPlan}</p>
              )}
            </CardContent>
          </Card>

          {/* 학력 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                학력
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={addEducation}>
                    <Plus className="mr-1 h-4 w-4" />
                    추가
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {educations.map(education => (
                <div
                  key={education.id}
                  className={isEditing ? 'space-y-4 rounded-lg border p-4' : 'space-y-2'}
                >
                  {isEditing ? (
                    <div className="flex items-start justify-between">
                      <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <Label>대학교</Label>
                          <Input
                            value={education.university}
                            onChange={e =>
                              updateEducation(education.id, 'university', e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label>학과</Label>
                          <Input
                            value={education.major}
                            onChange={e => updateEducation(education.id, 'major', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>학위</Label>
                          <Select
                            value={education.degree}
                            onValueChange={(value: any) =>
                              updateEducation(education.id, 'degree', value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bachelor">학사</SelectItem>
                              <SelectItem value="master">석사</SelectItem>
                              <SelectItem value="phd">박사</SelectItem>
                              <SelectItem value="none">없음</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label>입학년도</Label>
                            <Input
                              value={education.startYear}
                              onChange={e =>
                                updateEducation(education.id, 'startYear', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>졸업년도</Label>
                            <Input
                              value={education.endYear}
                              onChange={e =>
                                updateEducation(education.id, 'endYear', e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeEducation(education.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium">
                        {education.degree === 'bachelor' && '학사'}
                        {education.degree === 'master' && '석사'}
                        {education.degree === 'phd' && '박사'}
                        {education.degree === 'none' && '기타'}
                        {education.major && ` - ${education.major}`}
                      </h4>
                      <p className="text-sm text-muted-foreground">{education.university}</p>
                      <p className="text-sm text-muted-foreground">
                        {education.startYear}년 - {education.endYear}년
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 경력 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                경력
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={addExperience}>
                    <Plus className="mr-1 h-4 w-4" />
                    추가
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experiences.map(experience => (
                <div
                  key={experience.id}
                  className={isEditing ? 'space-y-4 rounded-lg border p-4' : 'space-y-2'}
                >
                  {isEditing ? (
                    <div className="flex items-start justify-between">
                      <div className="grid flex-1 grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <Label>근무처</Label>
                            <Input
                              value={experience.company}
                              onChange={e =>
                                updateExperience(experience.id, 'company', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>직책</Label>
                            <Input
                              value={experience.position}
                              onChange={e =>
                                updateExperience(experience.id, 'position', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>입사년도</Label>
                            <Input
                              value={experience.startYear}
                              onChange={e =>
                                updateExperience(experience.id, 'startYear', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>퇴사년도</Label>
                            <Input
                              value={experience.endYear}
                              onChange={e =>
                                updateExperience(experience.id, 'endYear', e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Label>설명</Label>
                          <Textarea
                            value={experience.description}
                            onChange={e =>
                              updateExperience(experience.id, 'description', e.target.value)
                            }
                            rows={3}
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeExperience(experience.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium">{experience.position}</h4>
                      <p className="text-sm text-muted-foreground">{experience.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {experience.startYear}년 - {experience.endYear}년
                      </p>
                      <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">
                        {experience.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 연구 - 논문 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                논문
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={addPublication}>
                    <Plus className="mr-1 h-4 w-4" />
                    추가
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {publications.map(publication => (
                <div
                  key={publication.id}
                  className={isEditing ? 'space-y-4 rounded-lg border p-4' : 'space-y-2'}
                >
                  {isEditing ? (
                    <div className="flex items-start justify-between">
                      <div className="grid flex-1 grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <Label>논문 제목</Label>
                            <Input
                              value={publication.title}
                              onChange={e =>
                                updatePublication(publication.id, 'title', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>논문 부제목</Label>
                            <Input
                              value={publication.subtitle}
                              onChange={e =>
                                updatePublication(publication.id, 'subtitle', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>논문 저자</Label>
                            <Input
                              value={publication.authors}
                              onChange={e =>
                                updatePublication(publication.id, 'authors', e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <Label>논문 년도</Label>
                            <Input
                              value={publication.year}
                              onChange={e =>
                                updatePublication(publication.id, 'year', e.target.value)
                              }
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label>논문 링크</Label>
                            <Input
                              value={publication.link}
                              onChange={e =>
                                updatePublication(publication.id, 'link', e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Label>논문 설명</Label>
                          <Textarea
                            value={publication.description}
                            onChange={e =>
                              updatePublication(publication.id, 'description', e.target.value)
                            }
                            rows={3}
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePublication(publication.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium">{publication.title}</h4>
                      {publication.subtitle && (
                        <p className="text-sm text-gray-600">{publication.subtitle}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {publication.authors} ({publication.year})
                      </p>
                      {publication.link && (
                        <a
                          href={publication.link}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          논문 링크
                        </a>
                      )}
                      {publication.description && (
                        <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">
                          {publication.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 연구 - 프로젝트 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                프로젝트
                {isEditing && (
                  <Button variant="outline" size="sm" onClick={addProject}>
                    <Plus className="mr-1 h-4 w-4" />
                    추가
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.map(project => (
                <div
                  key={project.id}
                  className={isEditing ? 'space-y-4 rounded-lg border p-4' : 'space-y-2'}
                >
                  {isEditing ? (
                    <div className="flex items-start justify-between">
                      <div className="grid flex-1 grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div>
                            <Label>프로젝트 제목</Label>
                            <Input
                              value={project.title}
                              onChange={e => updateProject(project.id, 'title', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>프로젝트 년도</Label>
                            <Input
                              value={project.year}
                              onChange={e => updateProject(project.id, 'year', e.target.value)}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label>프로젝트 참고 링크</Label>
                            <Input
                              value={project.link}
                              onChange={e => updateProject(project.id, 'link', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>프로젝트 설명</Label>
                          <Textarea
                            value={project.description}
                            onChange={e => updateProject(project.id, 'description', e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeProject(project.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.year}년</p>
                      {project.link && (
                        <a href={project.link} className="text-sm text-blue-600 hover:underline">
                          프로젝트 링크
                        </a>
                      )}
                      {project.description && (
                        <p className="mt-1 whitespace-pre-wrap text-sm text-gray-600">
                          {project.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 파일 업로드 섹션들 */}
          {['이력서', '연구 계획서', '증명서'].map(fileType => (
            <Card key={fileType}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {fileType}
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      <Upload className="mr-1 h-4 w-4" />
                      파일 업로드
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="py-8 text-center text-muted-foreground">
                  업로드된 {fileType}가 없습니다.
                </div>
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        // Professor profile remains the same for now
        <Card>
          <CardHeader>
            <CardTitle>교수 프로필</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">교수 프로필 편집 기능은 추후 구현될 예정입니다.</p>
          </CardContent>
        </Card>
      )}

      {/* 플로팅 편집 버튼 */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isEditing ? (
          <Button
            onClick={handleEdit}
            size="lg"
            className="h-14 w-14 rounded-full p-0 shadow-lg transition-shadow hover:shadow-xl"
          >
            <Edit className="h-6 w-6" />
          </Button>
        ) : (
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleCancel}
              variant="outline"
              size="lg"
              className="h-12 w-12 rounded-full p-0 shadow-lg transition-shadow hover:shadow-xl"
            >
              <X className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleSave}
              size="lg"
              className="h-14 w-14 rounded-full p-0 shadow-lg transition-shadow hover:shadow-xl"
            >
              <Save className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
