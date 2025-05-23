import { Banner } from "@/components/page/banner"
import { SearchBar } from "@/components/page/search-bar"
import { TrustBadges } from "@/components/page/trust-badges"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <Banner />

        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            한국 대학원 프로그램을 <br />
            <span className="text-primary">쉽게 찾아보세요</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            한국의 최고 대학교들과 연결되어 완벽한 대학원 프로그램을 찾아보세요. 장학금 기회부터 연구 기회까지 모든 것을
            한 곳에서.
          </p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                모집공고 탐색
              </CardTitle>
              <CardDescription>한국 최고 대학교들의 대학원 프로그램을 둘러보세요</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/search/recruitments">모집공고 보기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                지원자 풀
              </CardTitle>
              <CardDescription>재능 있는 국제 학생들과 연결되세요</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/search/applicants">지원자 찾기</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                리소스
              </CardTitle>
              <CardDescription>지원 과정을 도와주는 가이드와 팁</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link href="/resources">리소스 보기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <TrustBadges />
      </div>
    </div>
  )
}
