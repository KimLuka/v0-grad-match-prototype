import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GradMatch - 한국 대학원 프로그램 매칭 플랫폼',
  description: '한국의 최고 대학교들과 연결되어 완벽한 대학원 프로그램을 찾아보세요',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
