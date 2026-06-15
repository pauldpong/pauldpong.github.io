import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";

import path from "path";
import fs from "fs";
import Head from "next/head";
import { TravelMetadata } from "data/TravelMetadata";
import { getTravelMetadata } from "utils/markdown-utils";
import { getFileContent } from "utils/file-utils";
import { formatDate } from "utils/date-utils";

const contentDirectoryPath = "content/travels";

function Travel({ title, date, matterResult }) {
  return (
    <div>
      <Head>
        <title>{`${title} - Paul's Travels`}</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S TRAVELS" />
        <div className="mb-8">
          <h1 className="mb-3 text-5xl">{title}</h1>
          <h2 className="text-xl">Last Updated: {date}</h2>
        </div>
        <article className="prose max-w-none">
          <Markdown>{matterResult}</Markdown>
        </article>
      </Scaffold>
    </div>
  );
}

export async function getStaticPaths() {
  const postDir = path.join(process.cwd(), "content/travels");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const publishedTravel: TravelMetadata[] = markdownFiles.map((file) => {
    return getTravelMetadata(`content/travels/${file.name}`);
  });

  const paths = publishedTravel.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const file = `${contentDirectoryPath}/${params.slug}.md`;
  const fileContent = getFileContent(file);

  const matterContent = matter(fileContent);
  const title = matterContent.data.title;
  const matterResult = matterContent.content;

  const dateAsFormattedString = formatDate(matterContent.data.last_updated);

  return {
    props: {
      title: title,
      date: dateAsFormattedString,
      matterResult: matterResult,
    },
  };
}

export default Travel;
