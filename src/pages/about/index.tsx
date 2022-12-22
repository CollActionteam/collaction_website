import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/uilenstede_banner.png';
import CollActionGraphic from 'public/collaction_graphic.png';
import RubenAboutImgXl from 'public/ruben-xl.png';
import RubenAboutImgLg from 'public/ruben-lg.png';
import RubenAboutImgSm from 'public/ruben-sm.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import { UspCard } from 'src/components/UspCard';
import { getProjectsData } from 'src/lib/getProjects';
import { getUspsData } from 'src/lib/getUsps';
import Link from 'next/link';
import PageHero from 'src/components/PageHero';
import TwoColumnSection from 'src/components/TwoColumnSection';
import InfoCard from 'src/components/InfoCard';
import ContentBlock from 'src/components/ContentBlock';

export default function AboutUsPage({
  projects,
  usps,
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
        <PageHero image={HeroImg} title={t('about:hero.title')} />

        {/* <TwoColumnSection
          first={
            <Image
              className="mx-auto absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              src={SolveCollectiveActionProblemsImg}
              alt={''}
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('about:whatWeDo.title')}
              body={t('about:whatWeDo.description')}
            />
          }
        /> */}

        {/* Mission Vision  */}
        {/* <ContentBlock
          className="pt-10"
          title={t('about:missionVision.title')}
          body={t('about:missionVision.description')}
          // hasBg={false}
        /> */}

        <TwoColumnSection
          isReverseOrder={false}
          isWhiteBg={false}
          mobile={
            <div>
              {/* History  */}
              <ContentBlock
                title={t('about:history.title')}
                body={t('about:history.description')}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
              />
              {/* WhatWeDo  */}
              <ContentBlock
                title={t('about:whatWeDo.title')}
                body={t('about:whatWeDo.description')}
                className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
              />
            </div>
          }
          first={
            <ContentBlock
              title={t('about:history.title')}
              body={t('about:history.description')}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
            />
          }
          second={
            <ContentBlock
              title={t('about:whatWeDo.title')}
              body={t('about:whatWeDo.description')}
              className="w-5/6 flex flex-col lg:flex-row lg:items-center mt-10"
            />
          }
        />

        <div className="h-[24.375rem] sm:h-[34.375rem] relative">
          <Image
            className="hidden xl:block"
            src={RubenAboutImgXl}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            alt={''}
            fill
          />
          <Image
            className="hidden sm:block xl:hidden"
            src={RubenAboutImgLg}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            alt={''}
            fill
          />
          <Image
            className="sm:hidden"
            src={RubenAboutImgSm}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            alt={''}
            fill
          />
          <div className="absolute bottom-6 left-[1.25rem] sm:bottom-[3.75rem] sm:left-[3.5rem] xl:left-[10.75rem] z-50 text-white text-md">
            <blockquote className="text-headline-m-1 mb-0 max-w-350">
              “{t('about:memberQuote.quote')}„
            </blockquote>
            <span className="font-light">
              {t('about:memberQuote.firstName')}, {t('about:memberQuote.title')}
            </span>
          </div>
        </div>

        {/* View the Whole Team Button*/}
        <div className="pt-24 pb-10">
          <Link
            href="/team"
            className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 w-80 shadow-lg inset-x-0 mx-auto z-40"
          >
            {t('about:wholeteam.title')}
          </Link>
        </div>

        {/* USP  */}
        <ContentBlock
          className="pb-16"
          title={t('about:usp.title')}
          body={t('about:usp.description')}
          // hasBg={false}
          leftAlign={false}
        />

        <div className="mb-0 last:mb-0">
          {/* <div className="flex flex-wrap justify-center mx-auto md:max-w-864"> */}
          <div className="flex flex-wrap justify-center mx-auto md:max-w-1064">
            {usps.map(usp => (
              <UspCard key={usp.title} {...usp} />
            ))}
          </div>
        </div>

        {/* Our Projects  */}
        <ContentBlock
          className="pt-10"
          title={t('about:projects.title')}
          body={t('about:projects.description')}
          // hasBg={false}
          leftAlign={false}
        />

        {/* <div className="mb-0 last:mb-0">
          <div className="flex flex-wrap justify-center mx-auto md:max-w-864">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} whiteBg={true} />
            ))}
          </div>
        </div> */}

        {/* SEE MORE DEALS */}
        <div className="py-8">
          <Link
            href="/projects"
            className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 w-72 shadow-lg inset-x-0 mx-auto z-40"
          >
            See All Projects
          </Link>
        </div>

        <TwoColumnSection
          isReverseOrder={true}
          isWhiteBg={true}
          mobile={
            <div className="bg-white pt-6">
              <Image
                className="mx-auto py-4"
                src={CollActionGraphic}
                alt={''}
                width={80}
              />
              <InfoCard hasBg={false} title={t('about:collAction.title')} />
            </div>
          }
          first={
            <Image
              className="mx-auto absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              src={CollActionGraphic}
              alt={''}
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('about:collAction.title')}
            />
          }
        />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projects = getProjectsData('featured');
  const usps = getUspsData('featured');

  return {
    props: {
      projects,
      usps,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  };
}
