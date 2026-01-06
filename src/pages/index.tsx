import Link from "next/link";
import Head from "next/head";
import HoverText from "components/ui/HoverText";

export default function Page() {
  return (
    <div>
      <Head>
        <title>Paul Damrongpiriyapong</title>
      </Head>
      <div className="h-screen content-center">
        <div className="grid grid-cols-1 gap-8 justify-items-center">
          <h1 className="text-3xl xl:text-5xl tracking-wide xl:tracking-widest">
            PAUL DAMRONGPIRIYAPONG
          </h1>
          <div className="text-xl xl:text-2xl pb-5 space-x-5">
            <Link href="/travels">
              <HoverText text="travels" />
            </Link>
            <Link href="/food">
              <HoverText text="food" />
            </Link>
            <Link href="/work">
              <HoverText text="work" />
            </Link>
            <Link href="/notes">
              <HoverText text="notes" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
