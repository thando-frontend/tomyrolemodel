export function Closing() {
  return (
    <section className="relative overflow-hidden px-6 md:px-12 lg:px-20 py-28 md:py-40" aria-labelledby="closing-heading">
      <img
        src="/images/florals.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 w-64 md:w-96 opacity-50"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="bg-card p-3 shadow-lg rounded-full mb-12">
          <img
            src="/images/mother-portrait.png"
            alt="Portrait of Mama, radiant and smiling"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover"
          />
        </div>

        <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/90 text-pretty max-w-2xl">
          {
            '"She is clothed with strength and dignity; she can laugh at the days to come. She speaks with wisdom, and faithful instruction is on her tongue... Her children arise and call her blessed."'
          }
        </blockquote>
        <cite className="not-italic font-sans text-sm tracking-[0.25em] uppercase text-primary mt-6">
          {'Proverbs 31:25-28'}
        </cite>

        <h2
          id="closing-heading"
          className="font-serif font-medium text-5xl md:text-7xl text-foreground mt-16 text-balance"
        >
          {'Happy birthday, '}
          <span className="italic text-primary">{'Mama'}</span>
        </h2>
        <p className="font-serif text-xl md:text-2xl text-muted-foreground mt-6 max-w-xl leading-relaxed text-pretty">
          {'May this year bring you even a fraction of the joy you have always given us. We arise and call you blessed.'}
        </p>

        <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mt-16">
          {'Made with all my love — Olwethu'}
        </p>
      </div>
    </section>
  )
}
