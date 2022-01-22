import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { DealsType } from 'src/types/deals';

export function getDealsData(type: 'featured' | 'all' = 'all') {
  // get deal file names
  const asmlDealsDir = path.join(process.cwd(), 'src/content/asml');
  const asmlDealsFiles = fs.readdirSync(asmlDealsDir);

  const allDealsData = asmlDealsFiles
    .map(fileName => {
      const filePath = path.join(`${asmlDealsDir}/${fileName}`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const matterResult = matter(fileContents);
      const matterContent = matterResult.content;
      const matterData = matterResult.data as DealsType;

      return {
        publish: matterData.publish,
        featured: matterData.featured,
        title: matterData.title,
        image: matterData.image,
        links: matterData.links,
        content: matterContent.slice(1),
      };
    })
    .filter(deal => deal.publish)
    .filter(deal => (type === 'featured' ? deal.featured : true))
    .map(deal => ({
      title: deal.title,
      image: deal.image,
      links: deal.links,
      content: deal.content,
    }));

  return allDealsData;
}
