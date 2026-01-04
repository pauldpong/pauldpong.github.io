import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@components/PostMetadata";
import path from "path";
import { parse } from "yaml";

export default class Retrivers {
  static getPostMetadata(postDirPath: string): PostMetadata[] {
    const postDir = path.join(process.cwd(), postDirPath);
    const files = fs.readdirSync(postDir);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`${postDir}/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        slug: matterResult.data.slug,
      };
    });

    return posts;
  }

  static getYaml(filePath: string) {
    const fullFilePath = path.join(process.cwd(), filePath);
    const file = fs.readFileSync(fullFilePath, "utf8");

    return parse(file);
  }
}
