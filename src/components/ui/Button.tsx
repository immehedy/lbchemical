// components/ui/button.tsx
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg" | "sm"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
    }
    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-6 py-3 text-base",
      sm: "h-8 px-3 py-1.5 text-sm"
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"
