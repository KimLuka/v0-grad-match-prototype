interface ValueLabelPair {
  value: string
  label: string
}

/**
 * value-label 쌍의 배열에서 value에 해당하는 label을 찾아 반환
 * @param items value-label 쌍의 배열
 * @param value 찾고자 하는 value
 * @param fallback value를 찾지 못했을 때 반환할 기본값 (기본값: value 자체)
 * @returns 해당하는 label 또는 fallback 값
 */
export function getLabelByValue<T extends ValueLabelPair>(
  items: readonly T[],
  value: string,
  fallback?: string
): string {
  const item = items.find(item => item.value === value)
  return item?.label ?? fallback ?? value
}

/**
 * value-label 쌍의 배열에서 label에 해당하는 value를 찾아 반환하는 유틸함수
 * @param items value-label 쌍의 배열
 * @param label 찾고자 하는 label
 * @param fallback label을 찾지 못했을 때 반환할 기본값 (기본값: label 자체)
 * @returns 해당하는 value 또는 fallback 값
 */
export function getValueByLabel<T extends ValueLabelPair>(
  items: readonly T[],
  label: string,
  fallback?: string
): string {
  const item = items.find(item => item.label === label)
  return item?.value ?? fallback ?? label
}
