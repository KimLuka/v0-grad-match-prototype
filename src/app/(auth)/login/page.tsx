'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Lock, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { unstable_PasswordToggleField as PasswordToggleField } from 'radix-ui'
import { useForm } from 'react-hook-form'

import { login } from '@/api/auth/login'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import FacebookIcon from '@/components/ui/icons/facebook-icon'
import GoogleIcon from '@/components/ui/icons/google-icon'
import { LoginForm, loginSchema } from '@/schemas/auth/login-schema'

export default function LoginPage() {
  const router = useRouter()

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginForm) => {
    await login(data)
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
                <FacebookIcon />
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email">이메일</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <FormControl>
                            <input
                              {...field}
                              type="email"
                              id="email"
                              placeholder="이메일"
                              className="pl-9"
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">비밀번호</FormLabel>
                        <PasswordToggleField.Root>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <PasswordToggleField.Input
                                {...field}
                                id="password"
                                placeholder="비밀번호"
                                className="pl-9"
                              />
                            </FormControl>
                            <PasswordToggleField.Toggle className="absolute right-2 top-1/2 -translate-y-1/2">
                              <PasswordToggleField.Icon
                                visible={<EyeOpenIcon />}
                                hidden={<EyeClosedIcon />}
                              />
                            </PasswordToggleField.Toggle>
                          </div>
                        </PasswordToggleField.Root>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    로그인
                  </Button>
                </form>
              </Form>
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
