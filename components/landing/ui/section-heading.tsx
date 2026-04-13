import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center"

  return (
    <div className={cn("max-w-2xl", isCentered && "mx-auto text-center")}>
      <div
        className={cn(
          "inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.20em] text-[var(--copycatt-lime)]",
          isCentered && "justify-center"
        )}
      >
        <span className="uppercase">{eyebrow}</span>
        <span className="hidden h-px w-10 bg-[var(--copycatt-lime-dim)] sm:inline-block" />
      </div>
      <h2
        className={cn(
          "mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-zinc-50 sm:text-5xl sm:leading-[1.05]",
          isCentered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-base leading-7 text-zinc-400 sm:text-[15px]",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

