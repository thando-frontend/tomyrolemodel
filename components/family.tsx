const family = [
  { name: 'Rachel Makwela', role: 'Our Queen', age: '41', note: 'The heart of everything, she brings all the joy into our happy family' },
  { name: 'Langa Makwela', role: 'Her King', age: '43', note: 'Her partner in all things, 23 years of love' },
  { name: 'Thandolwethu Langa Makwela', role: 'Your Prince', age: '17', note: 'Forever her student and blessed to be her son' },
  { name: 'Minenhle Makwela', role: 'The Princess', age: '7', note: 'The newest addition but definetly our sunshine' },
]

export function Family() {
  return (
    <section className="bg-secondary px-6 md:px-12 lg:px-20 py-24 md:py-32" aria-labelledby="family-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">{'The family you built'}</p>
        <h2
          id="family-heading"
          className="font-serif text-4xl md:text-6xl text-secondary-foreground mb-16 max-w-3xl text-balance"
        >
          {'Four hearts, held together '}
          <span className="italic text-primary">{'by yours'}</span>
        </h2>

        <div className="bg-card p-3 md:p-5 shadow-xl rounded-lg rotate-[1deg] hover:rotate-0 transition-transform duration-500 mb-16">
          <img
            src="/images/family-together.png"
            alt="Our whole family together — Mom, Dad, me and Enhle"
            className="w-full rounded-md object-cover aspect-[16/9]"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {family.map((member) => (
            <div key={member.name} className="border-t border-primary/30 pt-5">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary mb-2">{member.role}</p>
              <h3 className="font-serif text-xl md:text-2xl text-secondary-foreground leading-snug text-balance">
                {member.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                {member.age}
                {' — '}
                {member.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
