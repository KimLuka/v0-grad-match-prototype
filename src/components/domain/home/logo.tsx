import { GraduationCapIcon } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/utils/cn"

const logoVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      sm: "text-sm [&>svg]:h-5 [&>svg]:w-5",
      md: "text-base [&>svg]:h-6 [&>svg]:w-6",
      lg: "text-lg [&>svg]:h-7 [&>svg]:w-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string
}

export function Logo({ size, className }: LogoProps) {
  return (
    <Link href="/" className={cn(logoVariants({ size }), className)}>
      <GraduationCapIcon />
      <span className="inline-block font-bold">GradMatch</span>
    </Link>
  )
}