import { FIELD_OF_STUDY, type FieldOfStudy } from '@/constants/field-of-study'

function getHashFromString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

export function getFieldOfStudyImage(
  fieldValue: string,
  labName: string
): FieldOfStudy & { imageUrl: string } {
  const fieldImage = FIELD_OF_STUDY.find(field => field.value === fieldValue) || FIELD_OF_STUDY[0]
  const hash = getHashFromString(labName)
  const index = hash % fieldImage.imageUrls!.length

  return {
    ...fieldImage,
    imageUrl: fieldImage.imageUrls![index],
  }
}
