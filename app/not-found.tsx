import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen text-foreground flex items-center justify-center overflow-hidden">
      {/* Textures */}
      <div
        className="absolute inset-0 pointer-events-none bg-dot-grid mask-radial-fade"
      />

      {/* Soft glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255, 0.1), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <h1 className="mt-8 text-[80px] sm:text-[120px] md:text-[160px] font-semibold tracking-[-0.04em] leading-none text-balance select-none"
          style={{
            background: "linear-gradient(to bottom, oklch(0.985 0 0), oklch(0.62 0 0 / 0.35))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base sm:text-lg text-[oklch(0.62_0_0)] leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="group mt-4 inline-flex items-center gap-2 rounded-full bg-[oklch(0.985_0_0)] text-[oklch(0.145_0_0)] text-sm font-medium px-5 h-11 hover:bg-[oklch(0.985_0_0)]/90 transition"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Return home
        </Link>
      </div>
    </main>
  );
}
