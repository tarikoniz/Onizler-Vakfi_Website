import Image from "next/image";

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-[#1E6B7D] via-[#2C7E92] to-[#164D5B] overflow-hidden pt-32">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-56 h-56 opacity-15 hidden lg:block pointer-events-none">
        <Image src="/logo-mark-white.png" alt="" width={224} height={224} className="object-contain w-full h-full" />
      </div>

      <div className="absolute right-10 top-20 w-48 h-48 border border-white/8 rounded-full hidden lg:block" />
      <div className="absolute right-32 top-32 w-24 h-24 border border-gold/15 rounded-full hidden lg:block" />

      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-gold-warm" />
          <span className="text-gold-warm text-sm font-bold tracking-[0.3em] uppercase">Önizler Vakfı</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-white/80 font-light max-w-2xl leading-relaxed">{subtitle}</p>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </div>
    </section>
  );
}
