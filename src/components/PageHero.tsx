import Image from "next/image";

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2744] via-[#243558] to-[#1e2d4a] overflow-hidden pt-32">
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

      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.12] hidden lg:block">
        <Image src="/logo.png" alt="" width={600} height={600} className="object-contain brightness-0 invert w-full h-full" />
      </div>

      <div className="absolute right-10 top-20 w-48 h-48 border border-white/8 rounded-full hidden lg:block" />
      <div className="absolute right-32 top-32 w-24 h-24 border border-gold/15 rounded-full hidden lg:block" />

      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 py-20 sm:py-28">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-[2px] bg-gold" />
          <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">Önizler Vakfı</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-white/50 font-light max-w-2xl">{subtitle}</p>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </div>
    </section>
  );
}
