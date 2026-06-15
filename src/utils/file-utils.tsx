import path from "path";
import fs from "fs";

/** */
export function getFileContent(filePath: string): string {
  const fullFilePath = path.join(process.cwd(), filePath);
  const file = fs.readFileSync(fullFilePath, "utf8");

  return file;
}
