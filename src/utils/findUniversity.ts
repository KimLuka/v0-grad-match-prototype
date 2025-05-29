import { UNIVERSITIES, type University } from '@/constants/universities'

export function findUniversityByValue(value: string): University | undefined {
  return UNIVERSITIES.find(uni => uni.value === value)
}

export function findUniversityByLabel(label: string): University | undefined {
  return UNIVERSITIES.find(
    uni => uni.label.includes(label) || label.includes(uni.label.replace('대학교', ''))
  )
}

export function findUniversityByEnglishName(englishName: string): University | undefined {
  return UNIVERSITIES.find(
    uni =>
      uni.englishName.toLowerCase().includes(englishName.toLowerCase()) ||
      englishName.toLowerCase().includes(uni.englishName.toLowerCase().split(' ')[0])
  )
}

// 통합 검색 함수
export function findUniversity(searchTerm: string): University | undefined {
  // 먼저 value로 검색
  let result = findUniversityByValue(searchTerm)
  if (result) return result

  // 한글명으로 검색
  result = findUniversityByLabel(searchTerm)
  if (result) return result

  // 영문명으로 검색
  result = findUniversityByEnglishName(searchTerm)
  if (result) return result

  return undefined
}
