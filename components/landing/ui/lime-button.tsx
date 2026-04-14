"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LimeButtonProps extends React.ComponentProps<typeof Button> {
  glow?: boolean
}

export function LimeButton({ className, glow = true, ...props }: LimeButtonProps) {
  return (
    <Button
      className={cn(
        "border border-white/10 bg-white text-black hover:bg-zinc-100",
        glow && "shadow-[0_10px_40px_rgba(255,255,255,0.10)]",
        className
      )}
      {...props}
    />
  )
}

export function GlassButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-glass bg-[rgba(255,255,255,0.03)] text-zinc-50 hover:bg-[rgba(255,255,255,0.06)]",
        className
      )}
      {...props}
    />
  )
}

