import { UNIVERSITIES, type University } from '@/constants/universities'
import { getLabelByValue } from '@/utils/getLabelByValue'

export function findUniversityByValue(value: string): University | undefined {
  return UNIVERSITIES.find(uni => uni.value === value)
}

export function findUniversityByLabel(label: string): University | undefined {
  // 대학교 이름이 부분적으로 일치하는 경우도 처리
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
  // value로 정확히 일치하는 경우 검색
  const valueMatch = getLabelByValue(UNIVERSITIES, searchTerm, undefined)
  if (valueMatch !== searchTerm) {
    return findUniversityByValue(searchTerm)
  }

  // 한글명으로 검색
  let result = findUniversityByLabel(searchTerm)
  if (result) return result

  // 영문명으로 검색
  result = findUniversityByEnglishName(searchTerm)
  if (result) return result

  return undefined
}
