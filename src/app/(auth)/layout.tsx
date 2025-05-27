import '@/app/globals.css'

import { Inter } from 'next/font/google'
import type React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
