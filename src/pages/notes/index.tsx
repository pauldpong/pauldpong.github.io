import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Link from "next/link";
import Head from "next/head";
import path from "path";
import fs from "fs";
import { FrontmatterMetadata } from "data/FrontmatterMetadata";
import { getFrontmatterMetadata } from "utils/markdown-utils";

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
            Collection of my notes. This page is work in progress.
          </p>
          <ul className="list-disc list-inside">{a}</ul>
        </div>
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const postDir = path.join(process.cwd(), "content/notes");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const notes: FrontmatterMetadata[] = markdownFiles.map((file) => {
    return getFrontmatterMetadata(`content/notes/${file.name}`);
  });

  return {
    props: {
      notes,
    },
  };
}
