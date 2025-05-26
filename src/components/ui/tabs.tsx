'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { createContext } from 'react'

import { cn } from '@/utils/cn'

type TabsContextValue = {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  children?: ReactNode
}

const Tabs = ({ children, ...props }: TabsProps) => {
  // value와 onValueChange를 context로 전달
  const contextValue = {
    value: props.value || '',
    onValueChange: props.onValueChange || (() => {}),
  }

  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root {...props}>{children}</TabsPrimitive.Root>
    </TabsContext.Provider>
  )
}

const TabsList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className
    )}
    {...props}
  />
)

TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className
    )}
    {...props}
  />
)

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
)

TabsContent.displayName = TabsPrimitive.Content.displayName

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent

export { Tabs, TabsContent, TabsList, TabsTrigger }
