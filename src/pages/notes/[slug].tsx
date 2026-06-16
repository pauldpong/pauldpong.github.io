import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import path from "path";
import Header from "components/common/Header";
import Head from "next/head";
import Scaffold from "components/common/Scaffold";
import { GetStaticPaths } from "next";
import { FrontmatterMetadata } from "data/FrontmatterMetadata";
import { getFrontmatterMetadata } from "utils/markdown-utils";

function Note({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{title} - Paul&apos;s Notes</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S NOTES" />
        <div>
          <div className="mb-8">
            <h1 className="mb-5 text-5xl">{title}</h1>
            <span className="underline text-xl">Last updated</span>
            <span className="text-xl">: {date}</span>
          </div>
          <article className="prose prose-lg text-black max-w-none">
            <Markdown>{content}</Markdown>
          </article>
        </div>
      </Scaffold>
    </div>
  );
}

export const getStaticPaths = (async () => {
  const postDir = path.join(process.cwd(), "content/notes");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const notes: FrontmatterMetadata[] = markdownFiles.map((file) => {
    return getFrontmatterMetadata(`content/notes/${file.name}`);
  });

  const paths = notes.map((note) => ({
    params: { slug: note.slug },
  }));

  return { paths, fallback: false };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }) {
  const postDir = path.join(process.cwd(), "content/notes");

  const file = `${postDir}/${params.slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateAsFormattedString = dateFormatter.format(
    new Date(matterResult.data.date),
  );

  return {
    props: {
      title: matterResult.data.title,
      date: dateAsFormattedString,
      content: matterResult.content,
    },
  };
}

export default Note;
