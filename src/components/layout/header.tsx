'use client'

import { Bell, Menu, User } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/domain/home/logo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'

const NAV_ITEMS = [
  { href: '/search/recruitments', label: '모집공고' },
  { href: '/search/applicants', label: '지원자 풀' },
] as const

const USER_MENU_ITEMS = [
  { href: '/profile', label: '프로필' },
  { href: '/applications', label: '지원현황' },
  { href: '/saved', label: '스크랩' },
  { href: '/settings', label: '설정' },
] as const

function DesktopNav() {
  return (
    <nav className="hidden md:flex gap-6">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium transition-colors hover:opacity-60"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

function UserMenu() {
  return (
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
          {USER_MENU_ITEMS.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

function AuthButtons() {
  const isMobile = useIsMobile()
  
  return (
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
  )
}

function MobileMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="grid gap-4 py-4">
          <Logo />
          <div className="grid gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex w-full items-center py-2 text-lg font-semibold hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
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
              {USER_MENU_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex w-full items-center py-2 text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="outline">로그아웃</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function Header() {
  const isMobile = useIsMobile()
  const [isLoggedIn, _setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-4">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <DesktopNav />
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? <UserMenu /> : <AuthButtons />}
          {isMobile && <MobileMenu isLoggedIn={isLoggedIn} />}
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
