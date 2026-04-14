import { Container } from "@/components/landing/ui/container"

export function Footer() {
  return (
    <footer className="shrink-0 border-t border-glass bg-void py-4 sm:py-5">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <a
          href="https://x.com/copycattdotfun"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold tracking-[-0.02em] text-zinc-50 underline-offset-4 hover:underline"
        >
          X
        </a>
        <div className="font-mono text-[11px] text-zinc-600">© {new Date().getFullYear()} CopyCatt</div>
      </Container>
    </footer>
  )
}

