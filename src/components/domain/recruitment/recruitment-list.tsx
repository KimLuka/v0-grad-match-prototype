import { RecruitmentCard } from './recruitment-card'

export default function RecruitmentList() {
  return (
    <section className="container mx-auto max-w-7xl px-6 pb-8">
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RecruitmentCard
            id="seoultech-ai"
            lab="인공지능 연구실"
            university="서울과학기술대학교"
            department="컴퓨터공학과"
            professor="김민호 교수"
            applicationPeriod={{
              start: '2024-1-1',
              end: '2025-6-20',
            }}
            scholarship={true}
            fieldOfStudy="engineering"
            location="서울"
            degree="integrated"
          />
          <RecruitmentCard
            id="konkuk-business"
            lab="경영전략 연구실"
            university="건국대학교"
            department="경영학과"
            professor="박지원 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-11-30',
            }}
            scholarship={true}
            fieldOfStudy="humanities"
            location="서울"
            degree="master"
          />
          <RecruitmentCard
            id="hanyang-ml"
            lab="머신러닝 연구실"
            university="한양대학교"
            department="전자공학과"
            professor="이성훈 교수"
            applicationPeriod={{
              start: '2024-1-1',
              end: '2025-6-15',
            }}
            scholarship={true}
            fieldOfStudy="engineering"
            location="서울"
            degree="phd"
          />
          <RecruitmentCard
            id="hufs-ir"
            lab="국제관계 연구실"
            university="한국외국어대학교"
            department="정치외교학과"
            professor="최지영 교수"
            applicationPeriod={{
              start: '2024-1-1',
              end: '2025-6-26',
            }}
            scholarship={true}
            fieldOfStudy="humanities"
            location="서울"
            degree="master"
          />
          <RecruitmentCard
            id="ajou-robotics"
            lab="로봇공학 연구실"
            university="아주대학교"
            department="기계공학과"
            professor="강현진 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-12-01',
            }}
            scholarship={false}
            fieldOfStudy="engineering"
            location="수원"
            degree="integrated"
          />
          <RecruitmentCard
            id="gachon-biomedical"
            lab="바이오메디컬 연구실"
            university="가천대학교"
            department="의학과"
            professor="정민서 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-12-10',
            }}
            scholarship={true}
            fieldOfStudy="medicine"
            location="성남"
            degree="phd"
          />
          <RecruitmentCard
            id="sejong-music"
            lab="음악치료 연구실"
            university="세종대학교"
            department="음악학과"
            professor="이지훈 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-12-20',
            }}
            scholarship={true}
            fieldOfStudy="arts"
            location="서울"
            degree="master"
          />
          <RecruitmentCard
            id="khu-chemistry"
            lab="유기화학 연구실"
            university="경희대학교"
            department="화학과"
            professor="김수민 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-11-25',
            }}
            scholarship={false}
            fieldOfStudy="natural-sciences"
            location="서울"
            degree="phd"
          />
          <RecruitmentCard
            id="cau-nano"
            lab="나노소재 연구실"
            university="중앙대학교"
            department="신소재공학과"
            professor="박혜성 교수"
            applicationPeriod={{
              start: '2023-10-1',
              end: '2023-12-05',
            }}
            scholarship={true}
            fieldOfStudy="natural-sciences"
            location="서울"
            degree="integrated"
          />
        </div>
      </div>
    </section>
  )
}
