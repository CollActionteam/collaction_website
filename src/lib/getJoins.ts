import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JoinType } from 'src/types/joins';

export function getJoinsData() {
  // get join file names
  const joinDir = path.join(process.cwd(), 'src/content/join');
  const joinFiles = fs.readdirSync(joinDir);

  const allJoinsData = joinFiles
    .map(fileName => {
      const filePath = path.join(`${joinDir}/${fileName}`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const matterResult = matter(fileContents);
      const matterContent = matterResult.content;
      const matterData = matterResult.data as JoinType;

      return {
        publish: matterData.publish,
        title: matterData.title,
        description: matterData.description,
        tags: matterData.tags,
        content: matterContent.slice(1, -1),
      };
    })
    .filter(deal => deal.publish)
    .map(deal => ({
      title: deal.title,
      description: deal.description,
      tags: deal.tags,
      content: deal.content,
    }));

  return allJoinsData;
}
