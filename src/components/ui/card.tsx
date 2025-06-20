import { cn } from '@/utils/cn'

const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
)

Card.displayName = 'Card'

const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
)

CardHeader.displayName = 'CardHeader'

const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
)

CardTitle.displayName = 'CardTitle'

const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-sm text-muted-foreground', className)} {...props} />
)

CardDescription.displayName = 'CardDescription'

const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)

CardContent.displayName = 'CardContent'

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
)

CardFooter.displayName = 'CardFooter'

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
