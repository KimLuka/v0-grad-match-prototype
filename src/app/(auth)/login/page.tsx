'use client'

import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import GoogleIcon from '@/components/ui/icons/google-icon'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    console.info('Login attempt with:', { email, password })
    router.push('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="container mx-auto flex max-w-7xl items-center justify-center px-6 sm:px-8">
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">로그인</CardTitle>
            <CardDescription>
              로그인 진행 시, 사용자 약관과 개인정보 보호정책에 동의하는 것으로 간주됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button variant="outline" className="w-full">
                <GoogleIcon />
                구글 계정으로 로그인
              </Button>
              <Button variant="outline" className="w-full">
                <Image src="/images/facebook.svg" alt="facebook" width={20} height={20} />
                페이스북 계정으로 로그인
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">또는</span>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="이메일"
                      className="pl-9"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">비밀번호</Label>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="비밀번호"
                      className="pl-9"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">
                        {showPassword ? 'Hide password' : 'Show password'}
                      </span>
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  로그인
                </Button>
              </form>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="flex gap-2 text-center text-sm">
              <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
                회원가입
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/reset-password"
                className="text-primary underline-offset-4 hover:underline"
              >
                비밀번호 찾기
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
