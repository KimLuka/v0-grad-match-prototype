import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banner } from "@/components/banner"
import { RecruitmentCard } from "@/components/recruitment-card"
import { TrustBadges } from "@/components/trust-badges"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <Banner />

            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Match</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse through recruitment posts, connect with professors, and apply to Korean graduate programs with
                ease.
              </p>
            </div>

            <Tabs defaultValue="recommended" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="recommended">Recommended</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                </TabsList>
                <Link href="/search/recruitments" className="flex items-center text-sm font-medium text-primary">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <TabsContent value="recommended" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RecruitmentCard
                    university="Seoul National University"
                    department="Computer Science"
                    professor="Dr. Kim Minho"
                    deadline="2023-12-31"
                    scholarshipAvailable={true}
                    fieldOfStudy="Engineering"
                  />
                  <RecruitmentCard
                    university="Korea University"
                    department="Business Administration"
                    professor="Dr. Park Jiwon"
                    deadline="2023-11-30"
                    scholarshipAvailable={true}
                    fieldOfStudy="Business"
                  />
                  <RecruitmentCard
                    university="KAIST"
                    department="Artificial Intelligence"
                    professor="Dr. Lee Sunghoon"
                    deadline="2023-12-15"
                    scholarshipAvailable={true}
                    fieldOfStudy="Engineering"
                  />
                </div>
              </TabsContent>
              <TabsContent value="popular" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RecruitmentCard
                    university="Yonsei University"
                    department="International Studies"
                    professor="Dr. Choi Jiyoung"
                    deadline="2023-11-15"
                    scholarshipAvailable={true}
                    fieldOfStudy="Social Sciences"
                  />
                  <RecruitmentCard
                    university="Seoul National University"
                    department="Computer Science"
                    professor="Dr. Kim Minho"
                    deadline="2023-12-31"
                    scholarshipAvailable={true}
                    fieldOfStudy="Engineering"
                  />
                  <RecruitmentCard
                    university="POSTECH"
                    department="Mechanical Engineering"
                    professor="Dr. Kang Hyunjin"
                    deadline="2023-12-01"
                    scholarshipAvailable={false}
                    fieldOfStudy="Engineering"
                  />
                </div>
              </TabsContent>
              <TabsContent value="latest" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RecruitmentCard
                    university="KAIST"
                    department="Artificial Intelligence"
                    professor="Dr. Lee Sunghoon"
                    deadline="2023-12-15"
                    scholarshipAvailable={true}
                    fieldOfStudy="Engineering"
                  />
                  <RecruitmentCard
                    university="Hanyang University"
                    department="Biomedical Engineering"
                    professor="Dr. Jung Minseo"
                    deadline="2023-12-10"
                    scholarshipAvailable={true}
                    fieldOfStudy="Life Sciences"
                  />
                  <RecruitmentCard
                    university="Korea University"
                    department="Business Administration"
                    professor="Dr. Park Jiwon"
                    deadline="2023-11-30"
                    scholarshipAvailable={true}
                    fieldOfStudy="Business"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Grad Match simplifies the graduate school application process for international students
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="bg-white">
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-2 bg-primary/10 rounded-full mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <CardTitle>Search</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-500">
                      Find graduate programs and professors that match your interests and qualifications
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-2 bg-primary/10 rounded-full mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Prepare</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-500">
                      Access detailed information about requirements, scholarships, and application processes
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="flex flex-col items-center">
                    <div className="p-2 bg-primary/10 rounded-full mb-4">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Apply</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-500">
                      Submit your applications directly through our platform and track your application status
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-6 sm:px-8">
            <TrustBadges />

            <div className="flex flex-col items-center justify-center space-y-4 text-center mt-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of international students who found their perfect graduate program in Korea
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/search/recruitments">Browse Programs</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/auth/register">Create Account</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
