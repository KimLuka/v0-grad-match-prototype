'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { createContext } from 'react'

import { cn } from '@/utils/cn'

// Select Context 생성
const SelectContext = createContext<{
  value: string
  onValueChange: (value: string) => void
}>({
  value: '',
  onValueChange: () => {},
})

const Select = ({ children, value, onValueChange, ...props }: SelectPrimitive.SelectProps) => {
  return (
    <SelectContext.Provider
      value={{ value: value || '', onValueChange: onValueChange || (() => {}) }}
    >
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} {...props}>
        {children}
      </SelectPrimitive.Root>
    </SelectContext.Provider>
  )
}

const SelectGroup = ({ children, ...props }: SelectPrimitive.SelectGroupProps) => (
  <SelectPrimitive.Group {...props}>{children}</SelectPrimitive.Group>
)

const SelectValue = ({ children, ...props }: SelectPrimitive.SelectValueProps) => (
  <SelectPrimitive.Value {...props}>{children}</SelectPrimitive.Value>
)

const SelectTrigger = ({ className, children, ...props }: SelectPrimitive.SelectTriggerProps) => (
  <SelectPrimitive.Trigger
    className={cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
)

// Select Scroll Up Button 컴포넌트
const SelectScrollUpButton = ({
  className,
  ...props
}: SelectPrimitive.SelectScrollUpButtonProps) => (
  <SelectPrimitive.ScrollUpButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
)

const SelectScrollDownButton = ({
  className,
  ...props
}: SelectPrimitive.SelectScrollDownButtonProps) => (
  <SelectPrimitive.ScrollDownButton
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
)

const SelectContent = ({
  className,
  children,
  position = 'popper',
  ...props
}: SelectPrimitive.SelectContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
)

const SelectLabel = ({ className, ...props }: SelectPrimitive.SelectLabelProps) => (
  <SelectPrimitive.Label
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
)

const SelectItem = ({ className, children, ...props }: SelectPrimitive.SelectItemProps) => (
  <SelectPrimitive.Item
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
)

const SelectSeparator = ({ className, ...props }: SelectPrimitive.SelectSeparatorProps) => (
  <SelectPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
)

Select.Group = SelectGroup
Select.Value = SelectValue
Select.Trigger = SelectTrigger
Select.Content = SelectContent
Select.Label = SelectLabel
Select.Item = SelectItem
Select.Separator = SelectSeparator
Select.ScrollUpButton = SelectScrollUpButton
Select.ScrollDownButton = SelectScrollDownButton

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
