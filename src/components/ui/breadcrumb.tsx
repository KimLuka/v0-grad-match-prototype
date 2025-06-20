import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/utils/cn'

const Breadcrumb = ({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) => (
  <nav aria-label="breadcrumb" className={className} {...props} />
)

const BreadcrumbList = ({ className, ...props }: React.ComponentPropsWithoutRef<'ol'>) => (
  <ol
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      className
    )}
    {...props}
  />
)

const BreadcrumbItem = ({ className, ...props }: React.ComponentPropsWithoutRef<'li'>) => (
  <li className={cn('inline-flex items-center gap-1.5', className)} {...props} />
)

const BreadcrumbLink = ({
  asChild,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean
}) => {
  const Comp = asChild ? Slot : 'a'

  return <Comp className={cn('transition-colors hover:text-foreground', className)} {...props} />
}

const BreadcrumbPage = ({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) => (
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-foreground', className)}
    {...props}
  />
)

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)

Breadcrumb.List = BreadcrumbList
Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Link = BreadcrumbLink
Breadcrumb.Page = BreadcrumbPage
Breadcrumb.Separator = BreadcrumbSeparator
Breadcrumb.Ellipsis = BreadcrumbEllipsis

export { Breadcrumb }
