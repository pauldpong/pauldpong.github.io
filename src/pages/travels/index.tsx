import Header from "components/common/Header";
import Scaffold from "components/common/Scaffold";
import Head from "next/head";

import path from "path";
import fs from "fs";
import dynamic from "next/dynamic";

import { City } from "@components/ui/WorldMap";
import ImageCard from "@components/ui/ImageCard";
import { TravelMetadata } from "data/TravelMetadata";
import { getTravelMetadata } from "utils/markdown-utils";
import { GeoCache, loadCache } from "scripts/geo-fetch";

interface TravelIndexProps {
  travels: TravelMetadata[];
  cache: GeoCache;
}

const WorldMap = dynamic(() => import("@components/ui/WorldMap"), {
  ssr: false,
});

function TravelIndex({ travels, cache }: TravelIndexProps) {
  const travelCards = travels.map((travel) => (
    <ImageCard
      key={travel.slug}
      imageSrc={travel.image_url}
      imageAlt="a"
      title={travel.title}
      slug={travel.slug}
    />
  ));

  const visitedCities = Object.entries(cache).map(
    ([name, coords]): City => ({
      name,
      ...coords,
    }),
  );

  return (
    <div>
      <Head>
        <title>Paul&apos;s Travels</title>
      </Head>
      <Scaffold>
        <Header headerTitle="PAUL'S TRAVELS" />
        <div className="mb-5">
          {`My travel journal that includes places I have visited, but also lived
          I'm writing some of the entries retroactively, so they can be sparse
          at times. My goal is to look back and store the memories of my
          travels, as well as have a place to come back to if I forget some of
          my favorite spots. Hopefully, for others, it can be a small source of
          inspiration on what to see, what to do, and where to eat.`}
        </div>
        <div className="pb-10">
          <WorldMap cities={visitedCities} />
          <div className="pt-10">
            <div className="grid grid-cols-3 gap-4">{travelCards}</div>
          </div>
        </div>
      </Scaffold>
    </div>
  );
}

export async function getStaticProps() {
  const postDir = path.join(process.cwd(), "content/travels");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const publishedTravel: TravelMetadata[] = markdownFiles.map((file) => {
    return getTravelMetadata(`content/travels/${file.name}`);
  });

  const cache = loadCache();

  return {
    props: {
      travels: publishedTravel,
      cache: cache,
    },
  };
}

export default TravelIndex;
