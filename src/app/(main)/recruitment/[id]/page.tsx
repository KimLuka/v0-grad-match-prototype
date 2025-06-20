'use client'

import { useParams } from 'next/navigation'

import ProcessTimeline from '@/components/domain/recruitment/detail/process-timeline'
import ProfessorProfile from '@/components/domain/recruitment/detail/professor-profile'
import RecruitmentSummary from '@/components/domain/recruitment/detail/recruitment-summary'
import { LabInfo } from '@/types/lab-info'

export default function RecruitmentDetailPage() {
  const params = useParams()
  const id = params.id as string

  const recruitment: LabInfo = {
    id,
    lab: '인공지능 연구실',
    university: '서울대학교',
    professor: '김민호',
    deadline: '2023-12-31',
    scholarshipAvailable: true,
    fieldOfStudy: ['인공지능', '머신러닝', '딥러닝'],
    description:
      '서울대학교 인공지능 연구실에서는 인공지능과 머신러닝 분야의 혁신적인 연구를 진행하고 있습니다. 우리 연구실은 최신 기술 트렌드를 반영한 다양한 연구 프로젝트를 통해 학생들의 전문성을 키우고 있습니다.',
    requirements: [
      '컴퓨터 공학 또는 관련 분야 학사/석사 학위',
      '프로그래밍 경험 (Python, C++ 등)',
      '영어 의사소통 능력',
      '연구에 대한 열정과 창의성',
    ],
    conditions: {
      salary: '월 120만원 연구비 지원',
      otherBenefits: ['국제 학회 참가 지원', '연구 장비 지원', '기숙사 제공'],
    },
    schedule: {
      documentReview: '2024-01-15',
      interview: '2024-01-20',
      resultAnnouncement: '추후 협의',
      documentSubmission: '추후 협의',
      startDate: '2024-03-02',
    },
    professorInfo: {
      name: '김민호',
      title: '컴퓨터공학과',
      // image: 'https://via.placeholder.com/150',
      education: [
        '스탠포드 대학교 컴퓨터공학 박사',
        'KAIST 컴퓨터공학 석사',
        '서울대학교 컴퓨터공학 학사',
      ],
      researchAreas: ['인공지능', '머신러닝', '컴퓨터 비전', '자연어 처리'] as [
        string,
        string,
        string,
        string,
      ],
      publications: [
        {
          title: '컴퓨터 비전을 위한 고급 딥러닝 기법',
          url: 'https://ieee.org/paper1',
          authors: ['김민호', '이철수', '박지원'],
          year: 2022,
          publisher: 'IEEE 패턴 분석 및 머신 인텔리전스 논문집',
        },
        {
          title: '자연어 이해를 위한 새로운 접근법',
          url: 'https://acl.org/paper2',
          authors: ['김민호', '정수진'],
          year: 2021,
          publisher: 'ACL 2021 논문집',
        },
        {
          title: '엣지 디바이스를 위한 효율적인 신경망 구조',
          url: 'https://cvpr.org/paper3',
          authors: ['김민호', '최영희', '김태우'],
          year: 2020,
          publisher: 'CVPR 2020 논문집',
        },
      ],
      email: 'minho.kim@snu.ac.kr',
    },
    universityInfo: {
      name: '서울대학교',
      location: '서울, 대한민국',
      ranking: '50',
      established: 1946,
      website: 'https://www.snu.ac.kr',
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
