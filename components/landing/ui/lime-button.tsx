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
        "border border-white/15 bg-zinc-50 text-zinc-950 transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-white/30 hover:bg-[#b9bec6] hover:shadow-[0_12px_44px_rgba(255,255,255,0.18)]",
        glow && "shadow-[0_10px_40px_rgba(255,255,255,0.12)]",
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

