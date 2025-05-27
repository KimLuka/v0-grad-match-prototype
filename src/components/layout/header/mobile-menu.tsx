import Link from 'next/link'

import { Button } from '@/components/ui/button'
import type { NavItem, UserMenuItem } from '@/components/layout/header'

interface MobileMenuProps {
  isLoggedIn: boolean
  navItems: readonly NavItem[]
  userMenuItems: readonly UserMenuItem[]
}

export default function MobileMenu({ isLoggedIn, navItems, userMenuItems }: MobileMenuProps) {
  return (
    <div className="grid gap-6 pt-8">
      <div className="grid gap-2">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="flex w-full items-center py-2 text-lg font-semibold text-foreground/90 transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
