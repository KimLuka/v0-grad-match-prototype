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
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const isMobile = useMobile()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be replaced with actual auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCapIcon className="h-6 w-6" />
            <span className="font-bold inline-block">Grad Match</span>
          </Link>
          {!isMobile && (
            <nav className="flex gap-6">
              <Link href="/search/recruitments" className="text-sm font-medium transition-colors hover:text-primary">
                Recruitments
              </Link>
              <Link href="/search/applicants" className="text-sm font-medium transition-colors hover:text-primary">
                Applicant Pool
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-4 w-4" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/applications">Applications</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/saved">Saved</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              {!isMobile && (
                <Button variant="outline" asChild>
                  <Link href="/auth/login">Log in</Link>
                </Button>
              )}
              <Button asChild>
                <Link href="/auth/register">Sign up</Link>
              </Button>
            </>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
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
                    <span className="font-bold">Grad Match</span>
                  </Link>
                  <div className="grid gap-2">
                    <Link href="/search/recruitments" className="flex w-full items-center py-2 text-lg font-semibold">
                      Recruitments
                    </Link>
                    <Link href="/search/applicants" className="flex w-full items-center py-2 text-lg font-semibold">
                      Applicant Pool
                    </Link>
                  </div>
                  {!isLoggedIn ? (
                    <div className="grid gap-2">
                      <Button asChild variant="outline">
                        <Link href="/auth/login">Log in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/auth/register">Sign up</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-2">
                      <Link href="/profile" className="flex w-full items-center py-2 text-lg font-semibold">
                        Profile
                      </Link>
                      <Link href="/applications" className="flex w-full items-center py-2 text-lg font-semibold">
                        Applications
                      </Link>
                      <Link href="/saved" className="flex w-full items-center py-2 text-lg font-semibold">
                        Saved
                      </Link>
                      <Link href="/settings" className="flex w-full items-center py-2 text-lg font-semibold">
                        Settings
                      </Link>
                      <Button variant="outline">Log out</Button>
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
