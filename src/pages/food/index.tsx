import Header from "@components/common/Header";
import Scaffold from "@components/common/Scaffold";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import fs from "fs";
import { FrontmatterMetadata } from "data/FrontmatterMetadata";
import { getFrontmatterMetadata } from "utils/markdown-utils";

interface FoodIndexProps {
  recipes: FrontmatterMetadata[];
}

function FoodIndex({ recipes }: FoodIndexProps) {
  return (
    <div>
      <Head>
        <title>Paul&apos;s Food</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S FOOD" />
        <p className="">This page is work in progress.</p>
        <br />
        <h1 className="mb-2 text-3xl">Recipes</h1>
        <p className="mb-2">
          Collection of recipes I found online, and put here for easy access
          when shopping and thinking about what to make.
        </p>
        <ul className="list-disc list-inside">
          {recipes.map((receipe) => (
            <li key={receipe.slug}>
              <Link href={`/food/${receipe.slug}`}>
                <span className="text-xl">{receipe.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <br />
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const postDir = path.join(process.cwd(), "content/recipes");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const recipes: FrontmatterMetadata[] = markdownFiles.map((file) => {
    return getFrontmatterMetadata(`content/recipes/${file.name}`);
  });

  console.log(recipes);

  return {
    props: {
      recipes,
    },
  };
}

export default FoodIndex;
