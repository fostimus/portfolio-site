import fs from "fs";
import path from "path";

const filePath = process.cwd() + "/public/resume.png";
const imageBuffer = fs.readFileSync(filePath);

export default async (req, res) => {
  res.setHeader("Content-Type", "image-png");
  res.send(imageBuffer);
};
