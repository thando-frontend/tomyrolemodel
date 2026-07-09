export function Letter() {
  return (
    <section id="letter" className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">{'A letter to my mother'}</p>
        <h2 className="font-serif text-4xl md:text-5xl italic text-foreground mb-12 text-balance">
          {'Dear Mama,'}
        </h2>

        <div className="space-y-6 font-serif text-xl md:text-2xl leading-relaxed text-foreground/90">
          <p>
            {
              "You have been my role model for as long as I can remember. Before I even had the words for it, I knew I wanted to be like you Ma. The way you think, the way you love, the way you laugh and in the way you pray."
            }
          </p>
          <p>
            {
              'Your intelligence amazes me. You carry wisdom so effortlessly and you have taught me that a sharp mind means the most when it is paired with a soft heart. You always pushed me to be proud to be unique and creative.'
            }
          </p>
          <p>
            {
              'Your kindness has shaped every room you have ever walked into. I have watched you give of yourself over and over, never asking for anything back and it has taught me what real love looks like.'
            }
          </p>
          <p>
            {
              "Your humour is the soundtrack of our home. Nobody makes me laugh like you do (not even Marinel) and no laughter feels quite like the one we share together."
            }
          </p>
          <p>
            {
              'And your faith, your connection to God is the quiet strength beneath it all. Watching you walk with Him has shown me what it means to trust, to hope and to stand firm in my own belief. You are whatI strive to be as a Christian.'
            }
          </p>
          <p>
            {
              "You are all I strive to be and more. I love you so so much Ma and I can't imagine life with anyone else as my mother."
            }
          </p>
        </div>

        <p className="mt-12 font-serif text-2xl md:text-3xl italic text-primary">
          {'Forever your boobooshka,'}
          <br />
          {'Thandolwethu Langa Makwela'}
        </p>
      </div>
    </section>
  )
}
