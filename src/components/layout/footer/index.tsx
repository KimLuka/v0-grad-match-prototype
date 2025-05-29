import Link from 'next/link'

import { ShortCut } from './short-cut'

const FOOTER_LINKS = [
  { href: '/terms', label: '개인정보처리방침' },
  { href: '/privacy', label: '이용약관' },
  { href: '/contact', label: '회원약관' },
] as const

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted px-8 py-6">
      <div className="container flex-1 flex-row items-center justify-between pb-28">
        <div className="flex gap-16">
          {FOOTER_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <ShortCut />

      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        © 2025 Grad Match. All rights reserved.
      </p>
    </footer>
  )
}
