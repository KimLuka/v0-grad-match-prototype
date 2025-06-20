'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils/cn'

const Accordion = AccordionPrimitive.Root

const AccordionItem = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={cn('border-b', className)} {...props} />
)

AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
)

AccordionContent.displayName = AccordionPrimitive.Content.displayName
;(Accordion as any).Item = AccordionItem
;(Accordion as any).Trigger = AccordionTrigger
;(Accordion as any).Content = AccordionContent

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
