export interface LabInfo {
  id: string | number
  lab: string
  university: string
  professor: string
  deadline: string // ISO date string
  scholarshipAvailable: boolean
  fieldOfStudy: string
  description: string
  requirements: string[]
  benefits: string[]
  professorInfo: {
    name: string
    title: string
    education: string[]
    researchInterests: string[]
    publications: string[]
    email: string
  }
  universityInfo: {
    name: string
    location: string
    ranking: string
    established: string
    studentsCount: string
    internationalStudents: string
    facilities: string[]
    surroundings: string[]
  }
  curriculum: {
    name: string
    courses: string[]
  }[]
}
