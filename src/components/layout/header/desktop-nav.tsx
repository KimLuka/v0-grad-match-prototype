import Link from 'next/link'

import type { NavItem } from '@/components/layout/header'

interface DesktopNavProps {
  navItems: readonly NavItem[]
}

export default function DesktopNav({ navItems }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
