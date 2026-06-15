import fs from "fs";
import path from "path";
import { TravelMetadata } from "data/TravelMetadata";
import { getTravelMetadata } from "utils/markdown-utils";

export interface GeoCache {
  [city: string]: {
    lat: number;
    lon: number;
  };
}

const CACHE_PATH = path.join(process.cwd(), "./content/cache.json");

export const loadCache = (): GeoCache => {
  if (fs.existsSync(CACHE_PATH)) {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  }
  return {};
};

const saveCache = (cache: GeoCache): void => {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
};

async function getGeoData(): Promise<void> {
  const postDir = path.join(process.cwd(), "content/travels");
  const entires = fs.readdirSync(postDir, { withFileTypes: true });

  const markdownFiles = entires
    .filter((entry) => entry.isFile())
    .filter((file) => file.name.endsWith(".md"));

  const publishedTravel: TravelMetadata[] = markdownFiles.map((file) => {
    return getTravelMetadata(`content/travels/${file.name}`);
  });

  const visitedCities = publishedTravel.flatMap((travel) =>
    travel.cities.map((city) => `${city}, ${travel.title}`),
  );

  const cache = loadCache();
  let updated = false;

  for (const city of visitedCities) {
    if (!cache[city]) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`,
        {
          headers: {
            "User-Agent": "StaticSite",
          },
        },
      );
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        cache[city] = { lat: parseFloat(lat), lon: parseFloat(lon) };
        updated = true;
      }
    }
  }

  if (updated) {
    saveCache(cache);
    console.log("✅ Cache updated.");
  }
}

getGeoData();
