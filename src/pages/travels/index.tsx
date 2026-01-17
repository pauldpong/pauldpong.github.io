import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Head from "next/head";
import Retrivers from "posts/retrievers";
import Link from "next/link";

export default function Work({ travels }) {
  const a = travels.map((travel) => (
    <li key={travel.slug}>
      <Link href={`/travels/${travel.slug}`}>
        <span className="text-xl">{travel.title}</span>
      </Link>
    </li>
  ));

  return (
    <div>
      <Head>
        <title>Paul&apos;s Travels</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S TRAVELS" />
        <div className="mb-10">
          This page is work in progress.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="mb-30">
          <h1 className="mb-3 text-3xl">Frequents</h1>
          <ul className="list-disc list-inside">{a}</ul>
        </div>
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const travels = Retrivers.getPostMetadata("content/travels");

  console.log(travels);

  return {
    props: {
      travels,
    },
  };
}
