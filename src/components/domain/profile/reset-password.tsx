import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, ChevronRight, Lock, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signUpSchema } from '@/schemas/auth/signup-schema'

// 회원가입 스키마에서 비밀번호 관련 필드 추출
const passwordChangeSchema = z
  .object({
    password: signUpSchema._def.schema.shape.password,
    confirmPassword: signUpSchema._def.schema.shape.confirmPassword,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })

type PasswordChangeForm = z.infer<typeof passwordChangeSchema>

export default function ResetPassword() {
  const [showPasswordChange, setShowPasswordChange] = useState(false)

  const form = useForm<PasswordChangeForm>({
    resolver: zodResolver(passwordChangeSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: PasswordChangeForm) {
    console.info(values)
    // TODO: 비밀번호 변경 로직 추가
  }

  return (
    <>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setShowPasswordChange(!showPasswordChange)}
      >
        <h2 className="truncate text-sm">비밀번호 변경</h2>
        <Button
          variant="ghost"
          onClick={e => {
            e.stopPropagation()
            setShowPasswordChange(!showPasswordChange)
          }}
        >
          {showPasswordChange ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>

      {showPasswordChange && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="-mt-6 space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">비밀번호</FormLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="비밀번호"
                        className="pl-9 text-sm"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">비밀번호 확인</FormLabel>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="비밀번호 확인"
                        className="pl-9 text-sm"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button variant="secondary" type="submit" size="sm">
                변경
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
