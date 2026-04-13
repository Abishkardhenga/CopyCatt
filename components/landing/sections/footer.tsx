import { Container } from "@/components/landing/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-glass bg-void py-10">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-sm font-semibold tracking-[-0.02em] text-zinc-50">
          Copy<span className="text-[var(--copycatt-lime)]">Catt</span>
          <span className="text-zinc-400">.fun</span>
        </div>
        <div className="font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} CopyCatt · Not financial advice · Trade responsibly
        </div>
      </Container>
    </footer>
  )
}

