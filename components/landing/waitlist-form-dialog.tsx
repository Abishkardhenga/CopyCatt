// "use client"

// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// const FORMSPARK_ENDPOINT = "https://submit-form.com/2bRdfJoVc"

// interface WaitlistFormDialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
// }

// export function WaitlistFormDialog({ open, onOpenChange }: WaitlistFormDialogProps) {
//   const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle")

//   function handleOpenChange(next: boolean) {
//     onOpenChange(next)
//     if (!next) setSubmitState("idle")
//   }

//   async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     const form = e.currentTarget
//     setSubmitState("submitting")

//     try {
//       // Formspark returns 302 → thank-you page on `submitted.formspark.io`, which
//       // does not send CORS headers. Following that redirect makes `fetch` fail in
//       // the browser. `manual` keeps the 302; we treat redirect responses as OK.
//       const res = await fetch(FORMSPARK_ENDPOINT, {
//         method: "POST",
//         body: new FormData(form),
//         redirect: "manual",
//       })

//       const isRedirect =
//         res.type === "opaqueredirect" ||
//         res.status === 301 ||
//         res.status === 302 ||
//         res.status === 303 ||
//         res.status === 307 ||
//         res.status === 308

//       if (!isRedirect && !res.ok) throw new Error("Submit failed")

//       form.reset()
//       handleOpenChange(false)
//       setSubmitState("idle")
//     } catch {
//       setSubmitState("error")
//     }
//   }

//   return (
//     <Dialog open={open} onOpenChange={handleOpenChange}>
//       <DialogContent
//         showCloseButton
//         className="glass border-glass max-h-[min(90svh,640px)] overflow-y-auto bg-[rgba(10,10,10,0.94)] text-zinc-50 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:max-w-md"
//       >
//         <DialogHeader>
//           <DialogTitle className="text-lg text-zinc-50">Join the waitlist</DialogTitle>
//           <DialogDescription className="text-zinc-400">
//             We’ll reach out when CopyCatt is ready. Your details go only to this form.
//           </DialogDescription>
//         </DialogHeader>

//         <form className="grid gap-4" onSubmit={onSubmit}>
//           <div className="grid gap-2">
//             <Label htmlFor="waitlist-name" className="text-zinc-200">
//               Name
//             </Label>
//             <Input
//               id="waitlist-name"
//               name="name"
//               type="text"
//               placeholder="Name"
//               required
//               autoComplete="name"
//               className="h-11 rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="waitlist-email" className="text-zinc-200">
//               Email
//             </Label>
//             <Input
//               id="waitlist-email"
//               name="email"
//               type="email"
//               inputMode="email"
//               placeholder="Email"
//               required
//               autoComplete="email"
//               className="h-11 rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
//             />
//           </div>

//           <div className="grid gap-2">
//             <Label htmlFor="waitlist-message" className="text-zinc-200">
//               Message
//             </Label>
//             <Textarea
//               id="waitlist-message"
//               name="message"
//               placeholder="Message"
//               required
//               rows={4}
//               className="min-h-[100px] rounded-xl border-white/10 bg-[rgba(255,255,255,0.04)] text-zinc-50 placeholder:text-zinc-600 focus-visible:border-white/20"
//             />
//           </div>

//           {submitState === "error" ? (
//             <p className="text-sm text-red-400" role="alert">
//               Something went wrong. Please try again.
//             </p>
//           ) : null}

//           <Button
//             type="submit"
//             disabled={submitState === "submitting"}
//             className="h-11 rounded-xl border border-white/15 bg-zinc-50 font-semibold text-zinc-950 transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:border-white/30 hover:bg-[#b9bec6] hover:shadow-[0_12px_44px_rgba(255,255,255,0.18)] disabled:opacity-60"
//           >
//             {submitState === "submitting" ? "Sending…" : "Send"}
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }
