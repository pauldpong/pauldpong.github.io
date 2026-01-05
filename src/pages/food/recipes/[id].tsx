import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Retrivers from "posts/retrievers";
import path from "path";

export default function Recipe({ matterResult }) {
  console.log(matterResult);

  return (
    <div>
      <article className="prose font-sans">
        <Markdown>{matterResult}</Markdown>
      </article>
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
  const matterResult = matter(content).content;

  return { props: { matterResult } };
}
