import { cn } from "@/lib/utils"

interface CatMarkProps {
  className?: string
}

export function CatMark({ className }: CatMarkProps) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <div className="absolute inset-[-12px] rounded-full border border-[rgba(57,255,20,0.28)] opacity-80 [mask-image:radial-gradient(circle,black_55%,transparent_75%)]" />
      <div className="absolute inset-[-10px] rounded-full border border-[rgba(255,255,255,0.08)] blur-[0.5px]" />
      <svg
        viewBox="0 0 200 200"
        className="size-16 drop-shadow-[0_0_40px_rgba(57,255,20,0.22)]"
        role="img"
        aria-label="CopyCatt mark"
      >
        <ellipse cx="100" cy="140" rx="70" ry="45" fill="#0A0A0A" />
        <ellipse cx="100" cy="90" rx="58" ry="55" fill="#0A0A0A" />
        <polygon points="55,48 42,18 72,42" fill="#0A0A0A" />
        <polygon points="145,48 158,18 128,42" fill="#0A0A0A" />
        <polygon points="55,46 46,24 68,42" fill="#151515" />
        <polygon points="145,46 154,24 132,42" fill="#151515" />
        <rect x="30" y="152" width="40" height="22" rx="10" fill="#0A0A0A" />
        <rect x="130" y="152" width="40" height="22" rx="10" fill="#0A0A0A" />
        <ellipse cx="78" cy="90" rx="16" ry="14" fill="rgba(57,255,20,0.12)" />
        <ellipse cx="122" cy="90" rx="16" ry="14" fill="rgba(57,255,20,0.12)" />
        <ellipse cx="78" cy="90" rx="11" ry="10" fill="#39FF14" />
        <ellipse cx="122" cy="90" rx="11" ry="10" fill="#39FF14" />
        <ellipse cx="78" cy="90" rx="5" ry="8" fill="#000" />
        <ellipse cx="122" cy="90" rx="5" ry="8" fill="#000" />
        <circle cx="74" cy="86" r="2.5" fill="#fff" opacity="0.8" />
        <circle cx="118" cy="86" r="2.5" fill="#fff" opacity="0.8" />
        <polygon points="100,104 96,110 104,110" fill="#2a2a2a" />
        <path
          d="M94,112 Q100,118 106,112"
          stroke="#3a3a3a"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

