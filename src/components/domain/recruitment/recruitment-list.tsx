import { RecruitmentCard } from './recruitment-card'

export default function RecruitmentList() {
  return (
    <section className="container mx-auto max-w-7xl px-6 pb-8">
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RecruitmentCard
            lab="인공지능 연구실"
            university="서울대학교"
            professor="김민호 교수"
            deadline="2023-12-31"
            scholarshipAvailable={true}
            fieldOfStudy="인공지능/머신러닝"
            location="서울"
          />
          <RecruitmentCard
            lab="경영전략 연구실"
            university="고려대학교"
            professor="박지원 교수"
            deadline="2023-11-30"
            scholarshipAvailable={true}
            fieldOfStudy="경영학/마케팅"
            location="서울"
          />
          <RecruitmentCard
            lab="머신러닝 연구실"
            university="KAIST"
            professor="이성훈 교수"
            deadline="2023-12-15"
            scholarshipAvailable={true}
            fieldOfStudy="컴퓨터 비전/딥러닝"
            location="대전"
          />
          <RecruitmentCard
            lab="국제관계 연구실"
            university="연세대학교"
            professor="최지영 교수"
            deadline="2023-11-15"
            scholarshipAvailable={true}
            fieldOfStudy="국제학/정치학"
            location="서울"
          />
          <RecruitmentCard
            lab="로봇공학 연구실"
            university="POSTECH"
            professor="강현진 교수"
            deadline="2023-12-01"
            scholarshipAvailable={false}
            fieldOfStudy="로봇공학/제어시스템"
            location="포항"
          />
          <RecruitmentCard
            lab="바이오메디컬 연구실"
            university="한양대학교"
            professor="정민서 교수"
            deadline="2023-12-10"
            scholarshipAvailable={true}
            fieldOfStudy="생명공학/의공학"
            location="서울"
          />
          <RecruitmentCard
            lab="계량경제학 연구실"
            university="서울대학교"
            professor="이지훈 교수"
            deadline="2023-12-20"
            scholarshipAvailable={true}
            fieldOfStudy="경제학/통계학"
            location="서울"
          />
          <RecruitmentCard
            lab="유기화학 연구실"
            university="고려대학교"
            professor="김수민 교수"
            deadline="2023-11-25"
            scholarshipAvailable={false}
            fieldOfStudy="화학/유기합성"
            location="서울"
          />
          <RecruitmentCard
            lab="나노소재 연구실"
            university="성균관대학교"
            professor="박혜성 교수"
            deadline="2023-12-05"
            scholarshipAvailable={true}
            fieldOfStudy="재료공학/나노기술"
            location="수원"
          />
        </div>
      </div>
    </section>
  )
}
