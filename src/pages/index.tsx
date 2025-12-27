import Link from 'next/link'

export default function Page() {
  return <div className="h-screen content-center">
    <div className="grid grid-cols-1 gap-8 justify-items-center">
      <h1 className="text-5xl tracking-widest">PAUL DAMRONGPIRIYAPONG</h1>
      <div className="text-2xl pb-5 space-x-5">
        <Link href="/travels">[travels]</Link>
        <Link href="/notes">[notes]</Link>
        <Link href="/food">[food]</Link>
        <Link href="/work">[work]</Link>
      </div>
    </div>
  </div>
}
