import remark from "remark";
import html from "remark-html";
import path from "path";
import fs from "fs";

const skillsDirectory = path.join(process.cwd(), `content/skills`);

export const skillsParser = async () => {
  // Get file names under /skills
  const fileNames = fs.readdirSync(skillsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(skillsDirectory, fileName);

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const processedContent = await remark()
        .use(html)
        .process(fileContents);
      const contentHtml = processedContent.toString();

      const retVal = {
        id,
        contentHtml
      };

      return retVal;
    })
  );
  return allPostsData;
};
