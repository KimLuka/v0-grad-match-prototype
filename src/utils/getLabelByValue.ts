interface ValueLabelPair {
  value: string
  label: string
}

/**
 * value-label 쌍의 배열에서 키-값 매핑을 수행하는 유틸함수
 * @param items value-label 쌍의 배열
 * @param searchValue 찾을 값
 * @param searchKey 검색할 키
 * @param returnKey 반환할 키
 * @param fallback 기본값 (기본: searchValue)
 */
export function mapPairValue<T extends ValueLabelPair>(
  items: readonly T[],
  searchValue: string,
  searchKey: keyof ValueLabelPair,
  returnKey: keyof ValueLabelPair,
  fallback = searchValue
): string {
  return items.find(item => item[searchKey] === searchValue)?.[returnKey] ?? fallback
}

export const getLabelByValue = <T extends ValueLabelPair>(
  items: readonly T[],
  value: string,
  fallback?: string
) => mapPairValue(items, value, 'value', 'label', fallback)

export const getValueByLabel = <T extends ValueLabelPair>(
  items: readonly T[],
  label: string,
  fallback?: string
) => mapPairValue(items, label, 'label', 'value', fallback)
