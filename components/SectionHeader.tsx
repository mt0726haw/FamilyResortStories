// components/SectionHeader.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COLORS as C } from "@/lib/data";

export default function SectionHeader({
  eyebrow,
  actionLabel,
  actionHref = "#",
}: {
  eyebrow: string;
  actionLabel: string;
  actionHref?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div
        className="text-[11px] tracking-[0.32em] uppercase font-semibold"
        style={{ color: C.inkSoft }}
      >
        {eyebrow}
      </div>
      <Link
        href={actionHref}
        className="hidden sm:inline-flex items-center gap-1 text-[12px] font-semibold transition hover:opacity-70"
        style={{ color: C.goldDeep }}
      >
        {actionLabel} <ArrowRight size={13} />
      </Link>
    </div>
  );
}
