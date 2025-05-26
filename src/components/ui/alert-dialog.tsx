'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { createContext, useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/utils/cn'

const AlertDialogContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

const AlertDialog = ({ children, ...props }: AlertDialogPrimitive.AlertDialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <AlertDialogContext.Provider value={{ open, onOpenChange: setOpen }}>
      <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
        {children}
      </AlertDialogPrimitive.Root>
    </AlertDialogContext.Provider>
  )
}

const AlertDialogTrigger = ({
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger {...props}>{children}</AlertDialogPrimitive.Trigger>
)

const AlertDialogPortal = ({ children, ...props }: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal {...props}>{children}</AlertDialogPrimitive.Portal>
)

const AlertDialogOverlay = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
)

const AlertDialogContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
)

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)

const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>) => (
  <AlertDialogPrimitive.Title className={cn('text-lg font-semibold', className)} {...props} />
)

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>) => (
  <AlertDialogPrimitive.Description
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
)

const AlertDialogAction = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>) => (
  <AlertDialogPrimitive.Action className={cn(buttonVariants(), className)} {...props} />
)

const AlertDialogCancel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>) => (
  <AlertDialogPrimitive.Cancel
    className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
)

AlertDialog.Trigger = AlertDialogTrigger
AlertDialog.Portal = AlertDialogPortal
AlertDialog.Overlay = AlertDialogOverlay
AlertDialog.Content = AlertDialogContent
AlertDialog.Header = AlertDialogHeader
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Title = AlertDialogTitle
AlertDialog.Description = AlertDialogDescription
AlertDialog.Action = AlertDialogAction
AlertDialog.Cancel = AlertDialogCancel

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
}
