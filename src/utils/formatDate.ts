/**
 * D-day 계산 함수
 * @param isoString ISO 날짜 문자열
 * @returns D-day 문자열 또는 null (기한 지난 경우)
 */
export function calculateDDay(isoString: string): string | null {
  const today = new Date()
  const target = new Date(isoString)

  // 시간을 한국 시간 기준 자정으로 설정
  today.setHours(0, 0, 0, 0)
  const koreanTarget = new Date(target.getTime() + 9 * 60 * 60 * 1000) // UTC+9
  koreanTarget.setHours(0, 0, 0, 0)

  const diffTime = koreanTarget.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) return null
  if (diffDays === 0) return 'D-day'
  if (diffDays <= 31) return `D-${diffDays}`
  return null
}

/**
 * ISO 날짜 문자열을 한국 로컬 시간으로 변환
 * @param isoString ISO 날짜 문자열
 * @returns 한국 날짜 문자열 (ex. 2024년 5월 30일)
 */
export function formatKoreanDate(isoString: string): string {
  const date = new Date(isoString)
  return date.toLocaleDateString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
