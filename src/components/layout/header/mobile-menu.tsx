import Link from 'next/link'

import type { NavItem } from '@/components/layout/header'

interface MobileMenuProps {
  navItems: readonly NavItem[]
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  return (
    <nav className="flex flex-col gap-6 pt-6">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="text-lg font-medium transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
