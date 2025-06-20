'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { createContext, useState } from 'react'

import { cn } from '@/utils/cn'

// Dialog Context 생성
const DialogContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

// Dialog Root 컴포넌트
const Dialog = ({ children, ...props }: DialogPrimitive.DialogProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DialogContext.Provider value={{ open, onOpenChange: setOpen }}>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  )
}

// Dialog Trigger 컴포넌트
const DialogTrigger = ({ children, ...props }: DialogPrimitive.DialogTriggerProps) => (
  <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>
)

// Dialog Portal 컴포넌트
const DialogPortal = ({ children, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
)

// Dialog Close 컴포넌트
const DialogClose = ({ children, ...props }: DialogPrimitive.DialogCloseProps) => (
  <DialogPrimitive.Close {...props}>{children}</DialogPrimitive.Close>
)

// Dialog Overlay 컴포넌트
const DialogOverlay = ({ className, ...props }: DialogPrimitive.DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
)

// Dialog Content 컴포넌트
const DialogContent = ({ className, children, ...props }: DialogPrimitive.DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
)

// Dialog Header 컴포넌트
const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)

// Dialog Footer 컴포넌트
const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)

// Dialog Title 컴포넌트
const DialogTitle = ({ className, ...props }: DialogPrimitive.DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
)

// Dialog Description 컴포넌트
const DialogDescription = ({ className, ...props }: DialogPrimitive.DialogDescriptionProps) => (
  <DialogPrimitive.Description
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
)

// Compound 컴포넌트 패턴 적용
Dialog.Trigger = DialogTrigger
Dialog.Portal = DialogPortal
Dialog.Close = DialogClose
Dialog.Overlay = DialogOverlay
Dialog.Content = DialogContent
Dialog.Header = DialogHeader
Dialog.Footer = DialogFooter
Dialog.Title = DialogTitle
Dialog.Description = DialogDescription

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
