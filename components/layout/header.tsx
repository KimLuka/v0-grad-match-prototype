"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Bell, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/useMobile"

export function Header() {
  const isMobile = useMobile()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be replaced with actual auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCapIcon className="h-6 w-6" />
            <span className="font-bold inline-block">대학원 매칭</span>
          </Link>
          {!isMobile && (
            <nav className="flex gap-6">
              <Link href="/search/recruitments" className="text-sm font-medium transition-colors hover:text-primary">
                모집공고
              </Link>
              <Link href="/search/applicants" className="text-sm font-medium transition-colors hover:text-primary">
                지원자 풀
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">알림</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                    <span className="sr-only">사용자 메뉴</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">프로필</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/applications">지원현황</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/saved">저장됨</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">설정</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>로그아웃</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {!isMobile && (
                <Button variant="outline" asChild>
                  <Link href="/auth/login">로그인</Link>
                </Button>
              )}
              <Button asChild>
                <Link href="/auth/register">회원가입</Link>
              </Button>
            </>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">메뉴 토글</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => document.body.classList.remove("overflow-hidden")}
                  >
                    <GraduationCapIcon className="h-6 w-6" />
                    <span className="font-bold">대학원 매칭</span>
                  </Link>
                  <div className="grid gap-2">
                    <Link href="/search/recruitments" className="flex w-full items-center py-2 text-lg font-semibold">
                      모집공고
                    </Link>
                    <Link href="/search/applicants" className="flex w-full items-center py-2 text-lg font-semibold">
                      지원자 풀
                    </Link>
                  </div>
                  {!isLoggedIn ? (
                    <div className="grid gap-2">
                      <Button asChild variant="outline">
                        <Link href="/auth/login">로그인</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/auth/register">회원가입</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-2">
                      <Link href="/profile" className="flex w-full items-center py-2 text-lg font-semibold">
                        프로필
                      </Link>
                      <Link href="/applications" className="flex w-full items-center py-2 text-lg font-semibold">
                        지원현황
                      </Link>
                      <Link href="/saved" className="flex w-full items-center py-2 text-lg font-semibold">
                        저장됨
                      </Link>
                      <Link href="/settings" className="flex w-full items-center py-2 text-lg font-semibold">
                        설정
                      </Link>
                      <Button variant="outline">로그아웃</Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  )
}
