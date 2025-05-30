export interface FieldOfStudy {
  value: string
  label: string
  imageUrls?: string[]
  fallbackColor?: string
}

export const FIELD_OF_STUDY: FieldOfStudy[] = [
  {
    value: 'humanities',
    label: '인문사회',
    imageUrls: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop',
    ],
    fallbackColor: 'bg-blue-100',
  },
  {
    value: 'natural-sciences',
    label: '자연과학',
    imageUrls: [
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&h=300&fit=crop',
    ],
    fallbackColor: 'bg-green-100',
  },
  {
    value: 'engineering',
    label: '공학',
    imageUrls: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    ],
    fallbackColor: 'bg-orange-100',
  },
  {
    value: 'arts',
    label: '예체능',
    imageUrls: [
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1557264337-e8a93017fe92?w=400&h=300&fit=crop',
    ],
    fallbackColor: 'bg-purple-100',
  },
  {
    value: 'medicine',
    label: '의학',
    imageUrls: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
    ],
    fallbackColor: 'bg-red-100',
  },
] as const

function getHashFromString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
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
