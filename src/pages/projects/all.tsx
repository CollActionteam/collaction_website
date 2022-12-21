import { InferGetStaticPropsType } from 'next';
import PageSEO from 'src/components/PageSEO';
import { ProjectCard } from 'src/components/ProjectCard';
import { getProjectsData } from 'src/lib/getProjects';

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title="CollAction Projects | Make impact together"
        description="CollAction organises projects with companies, municipalities and schools so we can make impact together!"
      />

      <div className="bg-primary-0 p-5 md:p-12">
        <div className="flex flex-wrap justify-center lg:justify-start mx-auto md:max-w-864">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const projects = getProjectsData();

  return {
    props: {
      projects,
    },
  };
};
