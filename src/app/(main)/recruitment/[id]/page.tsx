'use client'

import { useParams } from 'next/navigation'

import ProcessTimeline from '@/components/domain/recruitment/detail/process-timeline'
import ProfessorProfile from '@/components/domain/recruitment/detail/professor-profile'
import RecruitmentSummary from '@/components/domain/recruitment/detail/recruitment-summary'

export default function RecruitmentDetailPage() {
  const params = useParams()
  const id = params.id as string

  const recruitment = {
    id,
    lab: '인공지능 연구실',
    university: '서울대학교',
    professor: '김민호 교수',
    deadline: '2023-12-31',
    scholarshipAvailable: true,
    fieldOfStudy: '공학',
    description:
      '서울대학교 인공지능 연구실에서는 다가오는 학년도에 의욕적인 대학원생을 모집합니다. 저희 연구실은 인공지능, 머신러닝, 컴퓨터 비전 등 최첨단 연구 기회를 제공합니다.',
    requirements: [
      '컴퓨터공학 또는 관련 분야 학사 학위',
      '강한 프로그래밍 능력 (Python, Java, C++)',
      'GPA 3.5 이상',
      'TOPIK 3급 이상 (우대)',
      '연구 경험 (우대)',
    ],
    benefits: [
      '자격을 갖춘 지원자에게 전액 장학금 제공',
      '월 120만원 연구비 지원',
      '교내 기숙사 이용 가능',
      '연구조교 기회 제공',
      '학회 참석 지원',
    ],
    professorInfo: {
      name: '김민호 교수',
      title: '컴퓨터공학과 교수',
      education: [
        '스탠포드 대학교 컴퓨터공학 박사',
        'KAIST 컴퓨터공학 석사',
        '서울대학교 컴퓨터공학 학사',
      ],
      researchInterests: ['인공지능', '머신러닝', '컴퓨터 비전', '자연어 처리'],
      publications: [
        '김민호 외 (2022). "컴퓨터 비전을 위한 고급 딥러닝 기법." IEEE 패턴 분석 및 머신 인텔리전스 논문집.',
        '김민호 외 (2021). "자연어 이해를 위한 새로운 접근법." ACL 2021 논문집.',
        '김민호 외 (2020). "엣지 디바이스를 위한 효율적인 신경망 구조." CVPR 2020 논문집.',
      ],
      email: 'minho.kim@snu.ac.kr',
    },
    universityInfo: {
      name: '서울대학교',
      location: '서울, 대한민국',
      ranking: '세계 50위권',
      established: '1946',
      studentsCount: '28,000+',
      internationalStudents: '2,000+',
      facilities: [
        '최첨단 연구 실험실',
        '광범위한 디지털 자료를 보유한 현대적 도서관',
        '유학생을 위한 교내 기숙사',
        '체육관, 수영장, 테니스장을 포함한 스포츠 시설',
        '학생 식당 및 다양한 식사 옵션',
      ],
      surroundings: [
        '서울 관악구에 위치',
        '대중교통 접근성 우수',
        '레스토랑, 카페, 상점이 있는 활기찬 동네',
        '문화 명소 및 엔터테인먼트 시설과 인접',
      ],
    },
    curriculum: [
      {
        name: '핵심 과목',
        courses: ['고급 알고리즘', '머신러닝', '컴퓨터 시스템 구조', '데이터베이스 시스템'],
      },
      {
        name: '선택 과목',
        courses: ['인공지능', '컴퓨터 비전', '자연어 처리', '분산 시스템', '클라우드 컴퓨팅'],
      },
      {
        name: '연구 세미나',
        courses: ['AI 최신 동향', '연구 방법론', '컴퓨팅 윤리'],
      },
    ],
  }

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-8 md:col-span-2">
              <RecruitmentSummary recruitment={recruitment} />
            </div>

            <div className="space-y-6">
              <ProfessorProfile recruitment={recruitment} />

              <ProcessTimeline recruitment={recruitment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
