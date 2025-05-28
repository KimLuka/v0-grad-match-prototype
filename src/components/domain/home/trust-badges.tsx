'use client'

import { UniversityLogoWithLabel } from '@/components/common/university-logo'
import { UNIVERSITIES } from '@/constants/universities'
import styles from '@/styles/scroll-x-animation.module.css'

export function TrustBadges() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h3 className="text-center text-lg font-medium sm:text-xl">
        국내 주요 대학교가 선택한 매칭 플랫폼
      </h3>
      <div className={styles.overflowContainer}>
        <div className={styles.animateScroll + ' flex gap-2 md:gap-4'}>
          {UNIVERSITIES.map((university, index) => (
            <div
              key={`set1-${index}`}
              className="flex h-16 flex-shrink-0 items-center justify-center gap-3 rounded-lg px-4 transition-transform"
            >
              <UniversityLogoWithLabel university={university} />
            </div>
          ))}
          {/* 무한 스크롤용 */}
          {UNIVERSITIES.map((university, index) => (
            <div
              key={`set2-${index}`}
              className="flex h-16 flex-shrink-0 items-center justify-center gap-3 rounded-lg px-4 transition-transform"
            >
              <UniversityLogoWithLabel university={university} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
