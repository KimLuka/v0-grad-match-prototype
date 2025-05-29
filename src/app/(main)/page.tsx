import { Banner } from '@/components/domain/home/banner'
import FeaturedRecruitments from '@/components/domain/home/featured-recruitments'
import HeroIntro from '@/components/domain/home/hero-intro'
import { TrustBadges } from '@/components/domain/home/trust-badges'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex max-w-7xl flex-col gap-16 py-16 sm:gap-20">
        <Banner />
        <HeroIntro />
        <TrustBadges />
        <FeaturedRecruitments />
      </div>
    </div>
  )
}
