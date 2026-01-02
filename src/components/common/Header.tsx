import Link from 'next/link'
import HoverText from 'components/ui/HoverText'

interface HeaderProps {
  headerTitle: string
}

export default function Header({ headerTitle }: HeaderProps) {
  return (
    <div className="w-full flex flex-row items-center pb-20">
      <h1 className="flex-auto text-5xl">{headerTitle}</h1>
      <div className="text-2xl space-x-5">
        <Link href="/travels"><HoverText text="travels" /></Link>
        <Link href="/food"><HoverText text="food" /></Link>
        <Link href="/work"><HoverText text="work" /></Link>
        <Link href="/notes"><HoverText text="notes" /></Link>
      </div>
    </div>
  );
}