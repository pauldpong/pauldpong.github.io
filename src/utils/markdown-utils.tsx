import { FrontmatterMetadata } from "data/FrontmatterMetadata";
import matter from "gray-matter";
import { getFileContent } from "./file-utils";
import { TravelMetadata } from "data/TravelMetadata";

/** */
export function getFrontmatterMetadata(filePath: string): FrontmatterMetadata {
  const fileContent = getFileContent(filePath);
  const matterResult = matter(fileContent);
  const frontMatter = matterResult.data;
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateAsFormattedString = dateFormatter.format(
    new Date(frontMatter.date),
  );

  return {
    slug: frontMatter.slug,
    title: frontMatter.title,
    description: frontMatter.description,
    date: dateAsFormattedString,
    published: frontMatter.published,
  };
}

export function getTravelMetadata(filePath: string): TravelMetadata {
  const fileContent = getFileContent(filePath);
  const matterResult = matter(fileContent);
  const frontMatter = matterResult.data;
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const dateAsFormattedString = dateFormatter.format(
    new Date(frontMatter.last_updated),
  );

  return {
    slug: frontMatter.slug,
    title: frontMatter.title,
    image_url: frontMatter.image_url,
    cities: frontMatter.cities,
    last_updated: dateAsFormattedString,
  };
}
