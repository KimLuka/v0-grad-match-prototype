export interface LabInfo {
  id: string | number
  lab: string
  university: string
  professor: string
  deadline: string // ISO date string
  scholarshipAvailable: boolean
  fieldOfStudy: [string, string?, string?, string?, string?]
  description: string
  requirements: string[]
  conditions: {
    salary?: string
    otherBenefits?: string[]
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
