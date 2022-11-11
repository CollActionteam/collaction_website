import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/uilenstede_banner.png';
import SolveCollectiveActionProblemsImg from 'public/solve_collective_action_problems.png';
import RubenAboutImg from 'public/ruben_about.png';
import RubenAboutWideImg from 'public/ruben_wide.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import { ProjectCard } from 'src/components/ProjectCard';
import { getProjectsData } from 'src/lib/getProjects';
import Link from 'next/link';
import PageHero from 'src/components/PageHero';
import TwoColumnSection from 'src/components/TwoColumnSection';
import InfoCard from 'src/components/InfoCard';
import { useState } from 'react';

export default function AboutUsPage({
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
          title={t('about:hero.title')}
          description={t('about:hero.description')}
        />

        <TwoColumnSection
          first={
            <Image 
            className="mx-auto absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              src={SolveCollectiveActionProblemsImg} alt={''}
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('about:solveProblems.title')}
              body={t('about:solveProblems.description')}
            />
          }
        />

        <TwoColumnSection
          isWhiteBg={true}
          mobile={
            <>
              <div className="relative hidden sm:block">
                <Image 
                  className="w-full h-full"
                  src={RubenAboutWideImg} 
                  alt={''}
                />
                <div className="absolute bottom-6 left-6 z-50 text-white text-md">
                  <h3 className='text-headline-m-1 mb-6'>
                    {t('about:memberQuote.name')}
                  </h3>
                  <blockquote className='mb-4 text-xl max-w-350'>
                    “{t('about:memberQuote.quote')}„
                  </blockquote>
                  <span>{t('about:memberQuote.title')}</span>
                  <span className="block italic">{t('about:memberQuote.location')}</span>
                </div> 
              </div>
              <div className="sm:hidden relative">
                <Image 
                  className="w-full h-full"
                  src={RubenAboutImg} 
                  alt={''}
                />
                <div className="absolute bottom-6 left-6 z-50 text-white text-md">
                  <h3 className='text-headline-m-1 mb-6'>
                    {t('about:memberQuote.name')}
                  </h3>
                  <blockquote className='mb-4 text-xl max-w-350'>
                    “{t('about:memberQuote.quote')}„
                  </blockquote>
                  <span>{t('about:memberQuote.title')}</span>
                  <span className="block italic">{t('about:memberQuote.location')}</span>
                </div>
              </div>
            </>
          }
          first={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('about:memberQuote.name')}
              body={
                <div>
                  <blockquote className='mb-4 text-2xl'>
                    “{t('about:memberQuote.quote')}„
                  </blockquote>
                  <span>{t('about:memberQuote.title')}</span>
                  <span className="block italic">{t('about:memberQuote.location')}</span>
                </div>
              }
            />
          }
          second={
            <Image 
            className="w-full h-full"
              src={RubenAboutImg} 
              alt={''}
            />
          }
        />

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
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  };
}
