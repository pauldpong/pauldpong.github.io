import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Retrivers from "posts/retrievers";
import Head from "next/head";
import path from "path";

export default function Travel({ title, matterResult }) {
  console.log(matterResult);

  return (
    <div>
      <Head>
        <title>Paul&apos;s Work</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S TRAVELS" />
        <h1 className="text-5xl">{title}</h1>
        <article className="prose font-sans">
          <Markdown>{matterResult}</Markdown>
        </article>
      </Scaffold>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = Retrivers.getPostMetadata("content/travels");

  const paths = posts.map((post) => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postDir = path.join(process.cwd(), "content/travels");

  const file = `${postDir}/${params.id}.md`;
  const content = fs.readFileSync(file, "utf8");
  const m = matter(content);
  const title = m.data.title;
  const matterResult = m.content;

  return {
    props: {
      title: title,
      matterResult: matterResult,
    },
  };
}
