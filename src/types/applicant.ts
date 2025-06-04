export interface Applicant {
  id: string
  name: string
  nationality: string
  desiredDegree: 'master' | 'phd' | 'integrated'
  topikLevel: '1급' | '2급' | '3급' | '4급' | '5급' | '6급' | '없음'
  interests: string[]
  education: string
  major: string // 졸업 학과
  fieldOfStudy: string // 관심 분야 (연구 분야와 동일한 값 사용)
  profileImage?: string
  gpa?: number
  englishProficiency?: string
  researchExperience?: string[]
  publications?: number
}
