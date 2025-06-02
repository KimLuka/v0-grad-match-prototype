import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground font-semibold',
        secondary: 'border-transparent bg-secondary text-secondary-foreground font-semibold',
        destructive: 'bg-destructive text-destructive-foreground font-bold',
        outline: 'text-foreground font-semibold',
        success: 'border-blue-400 text-blue-600 font-semibold',
        transparent:
          'border-transparent shadow-lg bg-transparent/50 text-foreground font-semibold shadow-sm',
        ghost: 'border-transparent bg-transparent font-semibold',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-sm',
        lg: 'px-2.5 py-1 text-sm sm:px-3 sm:py-1.5 sm:text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
