import { cva, type VariantProps } from 'class-variance-authority'
import { createContext } from 'react'

import { cn } from '@/utils/cn'

const AlertContext = createContext<{
  variant: 'default' | 'destructive' | null
}>({
  variant: 'default',
})

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>) => (
  <AlertContext.Provider value={{ variant: variant || 'default' }}>
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  </AlertContext.Provider>
)

const AlertTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
)

const AlertDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <div className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
)

Alert.Title = AlertTitle
Alert.Description = AlertDescription

export { Alert }
