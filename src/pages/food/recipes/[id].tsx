import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Retrivers from "posts/retrievers";
import path from "path";
import Header from "components/common/Header";
import Head from "next/head";
import Scaffold from "components/common/Scaffold";
import { formatDate } from "utils/date-utils";

export default function Recipe({ title, date, content }) {
  return (
    <div>
      <Head>
        <title>{`${title} - Paul's Recipes`}</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S RECIPES" />
        <div className="mb-8">
          <h1 className="mb-3 text-5xl">{title}</h1>
          <h2 className="text-xl">Last Updated: {date}</h2>
        </div>
        <article className="prose max-w-none">
          <Markdown>{content}</Markdown>
        </article>
      </Scaffold>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = Retrivers.getPostMetadata("content/recipes");

  const paths = posts.map((post) => ({
    params: { id: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postDir = path.join(process.cwd(), "content/recipes");

  const file = `${postDir}/${params.id}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  const title = matterResult.data.title;
  const dateAsFormattedString = formatDate(matterResult.data.date);

  return {
    props: {
      title: title,
      date: dateAsFormattedString,
      content: matterResult.content,
    },
  };
}
