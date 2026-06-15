import fs from "fs";
import matter from "gray-matter";
import { FrontmatterMetadata } from "data/FrontmatterMetadata";
import path from "path";

export default class Retrivers {
  static getPostMetadata(postDirPath: string): FrontmatterMetadata[] {
    const postDir = path.join(process.cwd(), postDirPath);
    const files = fs.readdirSync(postDir);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`${postDir}/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
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
        title: matterResult.data.title,
        slug: matterResult.data.slug,
        date: dateAsFormattedString,
      };
    });

    return posts;
  }
}
