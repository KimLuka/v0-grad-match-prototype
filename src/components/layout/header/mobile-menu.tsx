import Link from 'next/link'

import { NAV_ITEMS } from '@/components/layout/header'
import { SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function MobileMenu() {
  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>메뉴</SheetTitle>
      </SheetHeader>
      <nav className="mt-8 flex flex-col gap-4">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </SheetContent>
  )
}
