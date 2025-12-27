import Link from 'next/link'

export default function Page() {
  return <div className="h-screen content-center">
    <div className="grid grid-cols-1 gap-8 justify-items-center">
      <h1 className="text-5xl tracking-widest">PAUL DAMRONGPIRIYAPONG</h1>
      <div className="text-2xl pb-5 space-x-5">
        <Link href="/travels"><HoverFunction text="travel" /></Link>
        <Link href="/food"><HoverFunction text="food" /></Link>
        <Link href="/work"><HoverFunction text="work" /></Link>
        <Link href="/notes"><HoverFunction text="notes" /></Link>
      </div>
    </div>
  </div>
}

function HoverFunction({ text }: { text: string }) {
  return (
    <div className="group inline-flex cursor-pointer items-center">
      <span className="transition-transform duration-300 ease-out group-hover:-translate-x-1">[</span>
      {text}
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">]</span>
    </div>
  )
}