import { ResetPasswordForm } from '@/schemas/auth/reset-password-schema'

export async function resetPassword(data: ResetPasswordForm) {
  const response = await fetch('/api/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to reset password')
  }

  return response.json()
}
