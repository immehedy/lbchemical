// components/ui/card.tsx
import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-lg bg-white text-gray-900 shadow-sm", className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

export const CardHeader = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4 border-b", className)} {...props} />
)

export const CardTitle = ({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <div className={cn("text-lg font-semibold", className)} {...props} />
)

export const CardDescription = ({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <div className={cn("text-sm text-gray-500", className)} {...props} />
)

export const CardContent = ({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-4", className)} {...props} />
)
