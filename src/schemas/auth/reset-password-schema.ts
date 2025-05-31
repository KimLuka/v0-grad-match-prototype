import z from 'zod'

export const resetPasswordSchema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요.').email('올바른 이메일 형식이 아닙니다.'),
})

export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>
