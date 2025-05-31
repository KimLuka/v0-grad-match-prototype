'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { createContext, useState } from 'react'

import { cn } from '@/utils/cn'

// DropdownMenu Context 생성
const DropdownMenuContext = createContext<{
  open: boolean
  onOpenChange: (open: boolean) => void
}>({
  open: false,
  onOpenChange: () => {},
})

// DropdownMenu Root 컴포넌트
const DropdownMenu = ({ children, ...props }: DropdownMenuPrimitive.DropdownMenuProps) => {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, onOpenChange: setOpen }}>
      <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen} {...props}>
        {children}
      </DropdownMenuPrimitive.Root>
    </DropdownMenuContext.Provider>
  )
}

// DropdownMenu Trigger 컴포넌트
const DropdownMenuTrigger = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuTriggerProps) => (
  <DropdownMenuPrimitive.Trigger {...props}>{children}</DropdownMenuPrimitive.Trigger>
)

// DropdownMenu Group 컴포넌트
const DropdownMenuGroup = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuGroupProps) => (
  <DropdownMenuPrimitive.Group {...props}>{children}</DropdownMenuPrimitive.Group>
)

// DropdownMenu Portal 컴포넌트
const DropdownMenuPortal = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuPortalProps) => (
  <DropdownMenuPrimitive.Portal {...props}>{children}</DropdownMenuPrimitive.Portal>
)

// DropdownMenu Sub 컴포넌트
const DropdownMenuSub = ({ children, ...props }: DropdownMenuPrimitive.DropdownMenuSubProps) => (
  <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
)

// DropdownMenu Radio Group 컴포넌트
const DropdownMenuRadioGroup = ({
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuRadioGroupProps) => (
  <DropdownMenuPrimitive.RadioGroup {...props}>{children}</DropdownMenuPrimitive.RadioGroup>
)

// DropdownMenu Sub Trigger 컴포넌트
const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSubTriggerProps & { inset?: boolean }) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
)

// DropdownMenu Sub Content 컴포넌트
const DropdownMenuSubContent = ({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSubContentProps) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      'z-50 min-w-fit overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
)

// DropdownMenu Content 컴포넌트
const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-fit overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
)

// DropdownMenu Item 컴포넌트
const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
)

// DropdownMenu Checkbox Item 컴포넌트
const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
)

// DropdownMenu Radio Item 컴포넌트
const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuRadioItemProps) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
)

// DropdownMenu Label 컴포넌트
const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: DropdownMenuPrimitive.DropdownMenuLabelProps & { inset?: boolean }) => (
  <DropdownMenuPrimitive.Label
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
)

// DropdownMenu Separator 컴포넌트
const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
)

// DropdownMenu Shortcut 컴포넌트
const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...props} />
)

// Compound 컴포넌트 패턴 적용
DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Portal = DropdownMenuPortal
DropdownMenu.Sub = DropdownMenuSub
DropdownMenu.RadioGroup = DropdownMenuRadioGroup
DropdownMenu.SubTrigger = DropdownMenuSubTrigger
DropdownMenu.SubContent = DropdownMenuSubContent
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
