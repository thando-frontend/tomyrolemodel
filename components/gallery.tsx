const memories = [
  {
    src: '/images/mother-child-young.png',
    alt: 'Mama holding me close when I was little',
    caption: 'Where it all began; me and you, Mama',
    note: 'When I was small enough to fit in your arms but your love was already bigger than the world.',
  },
  {
    src: '/images/mother-teen.png',
    alt: 'Mama and me walking arm in arm, laughing together',
    caption: 'Twenty three years of walking beside one another',
    note: 'You and Papa are the examples in my mind of what genuine love will always look like.',
  },
  {
    src: '/images/mother-little-girl.png',
    alt: 'Mama lifting Enhle into the air, both laughing',
    caption: 'You and the PooPoo',
    note: 'Watching you love her the way you loved me, Im so grateful that she is able to experience your love.',
  },
]

export function Gallery() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32" aria-labelledby="gallery-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">{'Our memories'}</p>
        <h2 id="gallery-heading" className="font-serif text-4xl md:text-6xl text-foreground mb-16 max-w-2xl text-balance">
          {'Through the years, '}
          <span className="italic text-primary">{'with you'}</span>
        </h2>

        <div className="space-y-20 md:space-y-28">
          {memories.map((m, i) => (
            <figure
              key={m.src}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-card p-3 md:p-4 shadow-lg rounded-lg rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
                  <img src={m.src || '/placeholder.svg'} alt={m.alt} className="w-full rounded-md object-cover aspect-[4/3]" />
                </div>
              </div>
              <figcaption className="w-full md:w-1/2">
                <h3 className="font-serif text-3xl md:text-4xl italic text-foreground mb-4 text-balance">
                  {m.caption}
                </h3>
                <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
                  {m.note}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
