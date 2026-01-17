import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Retrivers from "posts/retrievers";
import Link from "next/link";
import Head from "next/head";

export default function Notes({ notes }) {
  const a = notes.map((note) => (
    <li key={note.slug} className="">
      <Link href={`/notes/${note.slug}`}>
        <span className="text-xl">{note.title}</span>
      </Link>
    </li>
  ));

  return (
    <div>
      <Head>
        <title>Paul&apos;s Notes</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S NOTES" />
        <div className="">
          <p className="pb-10">
            This page is work in progress.
            <br />
            <br />
            Collection of my notes.
          </p>
          <ul className="list-disc list-inside">{a}</ul>
        </div>
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const notes = Retrivers.getPostMetadata("content/notes");

  console.log(notes);

  return {
    props: {
      notes,
    },
  };
}
