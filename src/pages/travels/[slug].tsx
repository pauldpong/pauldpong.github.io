import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Retrivers from "posts/retrievers";
import Head from "next/head";
import path from "path";

export default function Travel({ title, date, matterResult }) {
  console.log(matterResult);

  return (
    <div>
      <Head>
        <title>{title} - Paul&apos;s Travels</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S TRAVELS" />
        <div className="mb-8">
          <h1 className="mb-3 text-5xl">{title}</h1>
          <h2 className="italic text-xl">{date}</h2>
        </div>
        <article className="prose max-w-none">
          <Markdown>{matterResult}</Markdown>
        </article>
      </Scaffold>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = Retrivers.getPostMetadata("content/travels");

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postDir = path.join(process.cwd(), "content/travels");

  const file = `${postDir}/${params.slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const m = matter(content);
  const title = m.data.title;
  const matterResult = m.content;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateAsFormattedString = dateFormatter.format(new Date(m.data.date));

  return {
    props: {
      title: title,
      date: dateAsFormattedString,
      matterResult: matterResult,
    },
  };
}
