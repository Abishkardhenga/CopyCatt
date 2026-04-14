"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const FORMSPARK_ENDPOINT = "https://submit-form.com/2bRdfJoVc"

export function WaitlistForm() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error" | "success">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setSubmitState("submitting")

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        redirect: "manual",
      })

      const isRedirect =
        res.type === "opaqueredirect" ||
        res.status === 301 ||
        res.status === 302 ||
        res.status === 303 ||
        res.status === 307 ||
        res.status === 308

      if (!isRedirect && !res.ok) throw new Error("Submit failed")

      form.reset()
      setSubmitState("success")
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <div id="waitlist" className="w-full max-w-md scroll-mt-28">
      <p className="mb-3 text-left text-sm font-medium text-zinc-200">Join the waitlist</p>
      <p className="mb-4 text-left text-xs text-zinc-500">
        We’ll reach out when CopyCatt is ready. Your details go only to this form.
      </p>

      <form className="grid gap-3 text-left" onSubmit={onSubmit}>
        <div className="grid gap-1.5">
          <Label htmlFor="waitlist-name" className="text-zinc-200">
            Name
          </Label>
          <Input
            id="waitlist-name"
            name="name"
            type="text"
            placeholder="Name"
            required
            autoComplete="name"
            className="h-10 rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-sm text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="waitlist-email" className="text-zinc-200">
            Email
          </Label>
          <Input
            id="waitlist-email"
            name="email"
            type="email"
            inputMode="email"
            placeholder="Email"
            required
            autoComplete="email"
            className="h-10 rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-sm text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
          />
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="waitlist-message" className="text-zinc-200">
            Message
          </Label>
          <Textarea
            id="waitlist-message"
            name="message"
            placeholder="Message"
            required
            rows={3}
            className="min-h-[72px] rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-sm text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
          />
        </div>

        {submitState === "error" ? (
          <p className="text-sm text-red-400" role="alert">
            Something went wrong. Please try again.
          </p>
        ) : null}

        {submitState === "success" ? (
          <p className="text-sm text-zinc-400" role="status">
            You’re on the list. Thanks!
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={submitState === "submitting"}
          className="h-10 rounded-xl border border-white/15 bg-zinc-50 text-sm font-semibold text-zinc-950 transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-white/30 hover:bg-[#b9bec6] hover:shadow-[0_12px_44px_rgba(255,255,255,0.18)] disabled:opacity-60"
        >
          {submitState === "submitting" ? "Sending…" : "Send"}
        </Button>
      </form>
    </div>
  )
}
