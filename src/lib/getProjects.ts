import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectsType } from 'src/types/projects';

export function getProjectsData(type: 'featured' | 'all' = 'all') {
  // get project file names
  const projectsDir = path.join(process.cwd(), 'src/content/projects');
  const projectFiles = fs.readdirSync(projectsDir);

  const allProjectData = projectFiles
    .map(fileName => {
      const filePath = path.join(`${projectsDir}/${fileName}`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const matterResult = matter(fileContents);
      const matterContent = matterResult.content;
      const matterData = matterResult.data as ProjectsType;

      return {
        publish: matterData.publish,
        featured: matterData.featured,
        title: matterData.title,
        image: matterData.image,
        links: matterData.links,
        content: matterContent.slice(1, -1),
      };
    })
    .filter(project => project.publish)
    .filter(project => (type === 'featured' ? project.featured : true))
    .map(project => ({
      title: project.title,
      image: project.image,
      links: project.links,
      content: project.content,
    }));

  return allProjectData;
}
