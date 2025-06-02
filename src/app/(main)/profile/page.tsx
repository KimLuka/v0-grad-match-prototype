'use client'

import { useState } from 'react'

import MyScrapList from '@/components/domain/profile/my-scrap-list'
import AccountSettings from '@/components/domain/profile/account-settings'
import ProfileMenu from '@/components/domain/profile/profile-menu'
import ProfileContent from '@/components/domain/profile/profile-content'
import ApplicantApplications from '@/components/domain/profile/applicant-applications'
import ProfessorEvaluations from '@/components/domain/profile/professor-evaluations'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [userRole, setUserRole] = useState<string>('applicant')

  // Mock user data - in a real app, this would come from your auth system
  const user = {
    id: '1',
    name: userRole === 'applicant' ? '김사라' : '김민호',
    email: userRole === 'applicant' ? 'sarah.kim@example.com' : 'minho.kim@snu.ac.kr',
    role: userRole as 'applicant' | 'professor',
    avatar: '/placeholder.svg?height=100&width=100',
    nationality: '미국',
    birthYear: '1998',
    topikLevel: '3급',
    stAlliance: true,
    desiredDegree: '박사과정',
    interests: ['인공지능', '머신러닝', '컴퓨터 비전'],
    education: [
      {
        degree: '컴퓨터공학 석사',
        institution: '워싱턴 대학교',
        year: '2020-2022',
      },
      {
        degree: '컴퓨터공학 학사',
        institution: '오레곤 대학교',
        year: '2016-2020',
      },
    ],
    experience: [
      {
        title: '연구조교',
        company: '워싱턴 대학교 AI 연구실',
        year: '2021-2022',
        description: '컴퓨터 비전 응용을 위한 딥러닝 모델 연구를 수행했습니다.',
      },
      {
        title: '소프트웨어 엔지니어 인턴',
        company: '테크솔루션즈',
        year: '2020',
        description: 'React와 Node.js를 사용하여 웹 애플리케이션을 개발하고 유지보수했습니다.',
      },
    ],
    publications: [
      {
        title: '딥러닝을 이용한 이미지 인식의 새로운 접근법',
        journal: '국제 컴퓨터 비전 저널',
        year: '2022',
      },
    ],
    projects: [
      {
        title: '자동 이미지 분류 시스템',
        description: '딥러닝 기법을 사용하여 이미지를 자동으로 분류하는 시스템을 개발했습니다.',
        year: '2021',
      },
      {
        title: '자연어 처리 툴킷',
        description: '자연어 데이터를 처리하고 분석하기 위한 툴킷을 제작했습니다.',
        year: '2020',
      },
    ],
    introduction:
      '저는 인공지능과 머신러닝에 강한 관심을 가진 컴퓨터공학 졸업생입니다. 한국 대학교에서 컴퓨터공학 박사과정을 통해 이 분야의 연구를 더욱 발전시키고자 합니다.',
    studyPlan:
      '제 연구 계획은 컴퓨터 비전 응용을 위한 새로운 딥러닝 아키텍처 개발에 중점을 두고 있으며, 특히 객체 탐지와 이미지 분할 분야에 관심이 있습니다. 이러한 기술들이 의료 영상과 자율주행과 같은 실제 문제에 어떻게 적용될 수 있는지 탐구하고 싶습니다.',
    professorInfo: {
      title: '컴퓨터공학과 교수',
      department: '컴퓨터공학과',
      university: '서울대학교',
      researchAreas: ['인공지능', '머신러닝', '컴퓨터 비전'],
      officeHours: '월요일과 수요일, 오후 2시-4시',
      labName: 'AI & 머신러닝 연구실',
    },
  }

  const menuProps = { activeTab, setActiveTab, userRole, setUserRole, user }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <ProfileMenu {...menuProps} />
          <section className="md:w-3/4">
            {activeTab === 'profile' && <ProfileContent userRole={userRole} user={user} />}
            {activeTab === 'applications' && userRole === 'applicant' && <ApplicantApplications />}
            {activeTab === 'applications' && userRole === 'professor' && <ProfessorEvaluations />}
            {activeTab === 'saved' && <MyScrapList />}
            {activeTab === 'settings' && <AccountSettings userEmail={user.email} />}
          </section>
        </div>
      </div>
    </div>
  )
}
