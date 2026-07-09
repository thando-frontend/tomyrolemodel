const qualities = [
  {
    number: '01',
    title: 'Her Intelligence',
    text: 'Wise beyond measure, she sees to the heart of every matter. Every lesson I have ever needed, she taught me first by living it.',
  },
  {
    number: '02',
    title: 'Her Kindness',
    text: 'She gives without keeping count. Her gentleness is not weakness rather it is the strongest thing about her.',
  },
  {
    number: '03',
    title: 'Her Humour',
    text: 'She can turn the heaviest day light with a single joke. Our home is full of laughter because she has built it that way.',
  },
  {
    number: '04',
    title: 'Her Faith',
    text: 'Her connection to God anchors our whole family. My mother prays for us before we even know we need it.',
  },
]

export function Qualities() {
  return (
    <section className="bg-secondary px-6 md:px-12 lg:px-20 py-24 md:py-32" aria-labelledby="qualities-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">{'Everything she is'}</p>
        <h2
          id="qualities-heading"
          className="font-serif text-4xl md:text-6xl text-secondary-foreground mb-16 max-w-2xl text-balance"
        >
          {'All I strive to be, '}
          <span className="italic text-primary">{'and more'}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {qualities.map((q) => (
            <div key={q.number} className="border-t border-primary/30 pt-6">
              <span className="font-sans text-sm tracking-widest text-primary">{q.number}</span>
              <h3 className="font-serif text-3xl md:text-4xl italic text-secondary-foreground mt-2 mb-4">{q.title}</h3>
              <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
                {q.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
