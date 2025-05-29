import { SignUpForm } from '@/schemas/auth/signup-schema'

export async function signUp(data: SignUpForm) {
  const response = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to sign up')
  }

  return response.json()
}
