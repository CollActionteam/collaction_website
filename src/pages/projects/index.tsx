import PageSEO from 'src/components/PageSEO';

import HeroImg from 'public/uilenstede_banner.png';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

import { getProjectsData } from 'src/lib/getProjects';
import PageHero from 'src/components/PageHero';
import Image from 'next/image';
import CollActionLogoWithText from 'public/crowdaction_graphic.png';

// Images to use
// /Users/margaretmwaura/Projects/website/public/placeholder-hero-bg.png
// /Users/margaretmwaura/Projects/website/public/crowdaction_graphic.png
// /Users/margaretmwaura/Projects/website/public/placeholder-hero-bg-sm.png
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

      {/* TODO: 
       1. Centering of the image
       2. The width of the portions as we change dimensions */}

      <main className="bg-secondary">
        {/* HERO SETION */}
        <PageHero
          image={HeroImg}
          title={t('projects:hero.title')}
          description={t('projects:hero.description')}
        />

        <div className="h-1/2 md:h-auto m-0 w-full">
          <div className="flex flex-row flex-wrap ml-6 mr-6 mt-10 md:m-0 bg-primary-0 rounded-lg md:rounded-none md:bg-white">
            <div className="basis-full md:basis-1/2 flex flex-col p-8">
              <div className="m-0 md:m-auto p-0 md:pl-44 md:pr-44 ">
                <p className="font-bold text-lg text-center md:text-left">
                  Crowdactions
                </p>
                <p className="mt-4 text-primary-200 text-center md:text-left">
                  CrowdActions are the basis of our endeavor. It is the common
                  goal of each CrowdAction that unites people of similar
                  convictions
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-1/2 flex ">
              <Image
                src={CollActionLogoWithText}
                alt="black CollAction logo with text"
                // layout="responsive"
                // placeholder="blur"
                width="400"
                height="400"
              />
            </div>
          </div>
        </div>
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
