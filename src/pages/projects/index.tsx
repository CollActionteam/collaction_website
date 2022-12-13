import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/uilenstede_banner.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import { ProjectCard } from 'src/components/ProjectCard';
import { getProjectsData } from 'src/lib/getProjects';
import Link from 'next/link';
import PageHero from 'src/components/PageHero';

export default function ProjectListPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO
        title="CollAction | Projects organised by CollAction"
        description="View a selection of projects that CollAction organised. "
      />

      <main className="bg-secondary">
        {/* HERO SETION */}
        <PageHero
          image={HeroImg}
          title={t('projects:hero.title')}
          description={t('projects:hero.description')}
        />

        {/* BUSINESS/EDUCATION/GOVERNANCE SECTION */}
        <div className="text-left mx-auto max-w-350 sm:max-w-400 lg:max-w-500 pt-10 pb-6 ">
          <h1 className="text-headline-m-1 md:text-headline-lg-1 mb-6">
            {t('projects:begSection.title')}
          </h1>
          <p className="text-body-short-1 text-primary-200">
            {t('projects:begSection.description')}
          </p>
        </div>

        <h4 className="max-w-600 mx-auto mb-7">
          BUSINESS/EDUCATION/GOVERNANCE SECTION
        </h4>

        {/* LIST PROJECTS SECTION */}
        <div className="text-left mx-auto max-w-350 sm:max-w-400 lg:max-w-500 pt-10 pb-6 ">
          <h1 className="text-headline-m-1 md:text-headline-lg-1 mb-6">
            {t('projects:projectSection.title')}
          </h1>
          <p className="text-body-short-1 text-primary-200">
            {t('projects:projectSection.description')}
          </p>
        </div>

        <div className="mb-13 last:mb-0">
          <div className="flex flex-wrap justify-center mx-auto md:max-w-864 mt-12 lg:mt-15">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        {/* SEE MORE DEALS */}
        <Link
          href="/projects/all"
          className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mt-5 w-72 shadow bottom-7 inset-x-0 mx-auto z-40"
        >
          See All Projects
        </Link>

        <h4 className="max-w-600 mx-auto mb-7">Contact form should be here</h4>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projects = getProjectsData('featured');

  return {
    props: {
      projects,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}
