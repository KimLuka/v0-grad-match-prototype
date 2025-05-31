export interface LabInfo {
  id: string | number
  lab: string
  university: string
  professor: string
  deadline: string | '상시 채용' // ISO date string or '상시 채용'
  scholarshipAvailable: boolean
  fieldOfStudy: [string, string?, string?, string?, string?]
  description: string
  requirements: string[]
  conditions: {
    salary?: string
    otherBenefits?: string[]
  }
  schedule: {
    documentReview: string | '추후 협의'
    interview?: string | '추후 협의'
    resultAnnouncement: string | '추후 협의'
    documentSubmission: string | '추후 협의'
    startDate: string | '추후 협의'
  }
  professorInfo: {
    name: string
    title: string
    image?: string | null
    education: string[]
    researchAreas: [string, string?, string?, string?, string?]
    publications: {
      title: string
      url: string
      authors: string[]
      year: number
      publisher: string
    }[]
    email: string
  }
  universityInfo: {
    name: string
    location: string
    ranking?: string
    established: number
    website: string
    studentsCount: string
    internationalStudents: string
    facilities: string[]
    surroundings: string[]
  }
}
