export interface Recruitment {
  id: string
  title: string
  university: string
  department: string
  lab: string
  status: 'open' | 'closed' | 'draft'
  professor: string
  degree: 'master' | 'phd' | 'integrated'
  tags: string[]
  applicationPeriod: {
    start: string
    end: string
  }
  scholarship: boolean
  fieldOfStudy: string
  location?: string
}
