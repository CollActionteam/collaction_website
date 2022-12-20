import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { UspsType } from 'src/types/usps';

export function getUspsData(type: 'featured' | 'all' = 'all') {
  // get usp file names
  const uspsDir = path.join(process.cwd(), 'src/content/usps');
  const uspFiles = fs.readdirSync(uspsDir);

  const allUspData = uspFiles
    .map(fileName => {
      const filePath = path.join(`${uspsDir}/${fileName}`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const matterResult = matter(fileContents);
      const matterContent = matterResult.content;
      const matterData = matterResult.data as UspsType;

      return {
        publish: matterData.publish,
        featured: matterData.featured,
        title: matterData.title,
        icon: matterData.icon,
        content: matterContent.slice(1, -1),
      };
    })
    .filter(usp => usp.publish)
    .filter(usp => (type === 'featured' ? usp.featured : true))
    .map(usp => ({
      title: usp.title,
      icon: usp.icon,
      content: usp.content,
    }));

  return allUspData;
}
