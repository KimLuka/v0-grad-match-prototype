export interface University {
  value: string
  label: string // 한글 표시명
  englishName: string // 영문 표시명
  symbol: string // 로고 경로
  scholarship?: boolean
}

export const UNIVERSITIES: University[] = [
  {
    value: 'ajou',
    label: '아주대학교',
    englishName: 'Ajou University',
    symbol: '/symbols/ajou.png',
  },
  {
    value: 'catholic',
    label: '가톨릭대학교',
    englishName: 'Catholic University',
    symbol: '/symbols/catholic.svg',
  },
  {
    value: 'chungang',
    label: '중앙대학교',
    englishName: 'Chung-Ang University',
    symbol: '/symbols/chungang.svg',
  },
  {
    value: 'gachon',
    label: '가천대학교',
    englishName: 'Gachon University',
    symbol: '/symbols/gachon.png',
  },
  {
    value: 'hankuk',
    label: '한국외국어대학교',
    englishName: 'Hankuk University of Foreign Studies',
    symbol: '/symbols/hankuk.png',
  },
  {
    value: 'hanyang',
    label: '한양대학교',
    englishName: 'Hanyang University',
    symbol: '/symbols/hanyang.png',
  },
  {
    value: 'jeonbuk',
    label: '전북대학교',
    englishName: 'Jeonbuk National University',
    symbol: '/symbols/jeonbuk.png',
  },
  {
    value: 'konkuk',
    label: '건국대학교',
    englishName: 'Konkuk University',
    symbol: '/symbols/konkuk.png',
  },
  {
    value: 'kyunghee',
    label: '경희대학교',
    englishName: 'Kyung Hee University',
    symbol: '/symbols/kyunghee.png',
  },
  {
    value: 'seokyeong',
    label: '서경대학교',
    englishName: 'Seokyeong University',
    symbol: '/symbols/seokyeong.png',
  },
  {
    value: 'seoultech',
    label: '서울과학기술대학교',
    englishName: 'Seoul National University of Science and Technology',
    symbol: '/symbols/seoultech.png',
  },
  {
    value: 'sejong',
    label: '세종대학교',
    englishName: 'Sejong University',
    symbol: '/symbols/sejong.png',
  },
  {
    value: 'city-malaysia',
    label: 'City University Malasyia',
    englishName: 'City University Malaysia',
    symbol: '/symbols/city-malaysia.png',
  },
  {
    value: 'ukl',
    label: 'University Kuala Lumpur',
    englishName: 'University Kuala Lumpur',
    symbol: '/symbols/ukl.png',
  },
]
