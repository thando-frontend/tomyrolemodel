import { Closing } from '@/components/closing'
import { Family } from '@/components/family'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Letter } from '@/components/letter'
import { Qualities } from '@/components/qualities'

export default function Page() {
  return (
    <main>
      <Hero />
      <Letter />
      <Qualities />
      <Gallery />
      <Family />
      <Closing />
    </main>
  )
}
