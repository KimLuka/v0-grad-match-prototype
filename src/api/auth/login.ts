import { LoginForm } from '@/schemas/auth/login-schema'

export async function login(data: LoginForm) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to sign up')
  }

  return response.json()
}
