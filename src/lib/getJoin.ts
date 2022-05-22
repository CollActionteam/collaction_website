import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { JoinType } from 'src/types/joins';

export function getJoinData(title: string) {
  const filePath = path.join(process.cwd(), `src/content/join/${title}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const matterResult = matter(fileContents);
  const matterContent = matterResult.content;
  const matterData = matterResult.data as JoinType;

  if (!matterData.publish) return null;

  return {
    title: matterData.title,
    description: matterData.description,
    tags: matterData.tags,
    location: matterData.location,
    pay: matterData.pay,
    contact: matterData.contact,
    aboutYou: matterData.aboutYou,
    content: matterContent.slice(1, -1),
  };
}
