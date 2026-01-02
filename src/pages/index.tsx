import Link from 'next/link'
import HoverText from 'components/ui/HoverText'

export default function Page() {
  return <div className="h-screen content-center">
    <div className="grid grid-cols-1 gap-8 justify-items-center">
      <h1 className="text-3xl tracking-widest">- UNDER CONSTRUCTION -</h1>
      <h1 className="text-5xl tracking-widest">PAUL DAMRONGPIRIYAPONG</h1>
      <div className="text-2xl pb-5 space-x-5">
        <Link href="/travels"><HoverText text="travels" /></Link>
        <Link href="/food"><HoverText text="food" /></Link>
        <Link href="/work"><HoverText text="work" /></Link>
        <Link href="/notes"><HoverText text="notes" /></Link>
      </div>
    </div>
  </div>
}
