import remark from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";

export const markdownParser = async contentPath => {
  // Get file names under /skills
  const fileNames = fs.readdirSync(contentPath);
  const allMarkdownData = await Promise.all(
    fileNames.map(async fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(contentPath, fileName);

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const processedContent = await remark()
        .use(html)
        .process(fileContents);
      const contentHtml = processedContent.toString();

      const retVal = {
        title: id,
        contentHtml
      };

      return retVal;
    })
  );
  return allMarkdownData;
};
