export function Hero() {
  return (
    <header className="relative min-h-svh flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-20">
      <img
        src="/images/florals.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 w-72 md:w-[28rem] lg:w-[34rem] opacity-70"
      />
      <img
        src="/images/florals.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-32 w-72 md:w-[26rem] rotate-180 opacity-50"
      />

      <div className="relative max-w-5xl">
        <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6">
          {'For the woman who is our whole world'}
        </p>
        <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance text-foreground">
          {'Happy Birthday,'}
          <br />
          <span className="italic text-primary">{'Mama'}</span>
        </h1>
        <p className="mt-8 font-serif text-2xl md:text-3xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
          {'Rachel Makwela — mother, wife, teacher of hearts and the most remarkable woman I have ever known.'}
        </p>
        <p className="mt-10 font-sans text-sm tracking-[0.25em] uppercase text-muted-foreground">
          {'With all my love, from Thandolwethu Langa Makwela'}
        </p>
      </div>

      <a
        href="#letter"
        className="relative mt-16 inline-flex items-center gap-3 font-sans text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors w-fit"
      >
        <span className="h-px w-12 bg-primary" aria-hidden="true" />
        {'Read my letter to you'}
      </a>
    </header>
  )
}
