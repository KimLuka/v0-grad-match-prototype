'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'

import { Logo } from '@/components/domain/home/logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'

import AuthButtons from './auth-buttons'
import DesktopNav from './desktop-nav'
import MobileMenu from './mobile-menu'
import UserMenu from './user-menu'

export const NAV_ITEMS = [
  { href: '/search/recruitments', label: '모집공고' },
  { href: '/search/applicants', label: '지원자 풀' },
] as const

export const USER_MENU_ITEMS = [
  { href: '/profile', label: '프로필' },
  { href: '/applications', label: '지원현황' },
  { href: '/saved', label: '스크랩' },
  { href: '/settings', label: '설정' },
] as const

export type NavItem = (typeof NAV_ITEMS)[number]
export type UserMenuItem = (typeof USER_MENU_ITEMS)[number]

export function Header() {
  const isMobile = useIsMobile()
  const [isLoggedIn, _setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background px-4">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          {!isMobile && <DesktopNav navItems={NAV_ITEMS} />}
        </div>
        <div className="flex items-center gap-2">
          {(!isMobile || !isLoggedIn) && <AuthButtons />}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">메뉴 열기</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="sr-only">
                  <SheetTitle>네비게이션 메뉴</SheetTitle>
                </SheetHeader>
                <MobileMenu
                  isLoggedIn={isLoggedIn}
                  navItems={NAV_ITEMS}
                  userMenuItems={USER_MENU_ITEMS}
                />
              </SheetContent>
            </Sheet>
          )}
          {!isMobile && isLoggedIn && <UserMenu userMenuItems={USER_MENU_ITEMS} />}
        </div>
      </div>
    </header>
  )
}
