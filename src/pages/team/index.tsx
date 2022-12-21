import Link from 'next/link';
import clsx from 'clsx';
import {
  FiMapPin as MapPinIcon,
  FiDollarSign as DollarSignIcon,
  FiArrowRight as ArrowRightIcon,
} from 'react-icons/fi';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import Team from 'src/components/Team';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import { getJoinsData } from 'src/lib/getJoins';
import { JoinTagTokenType } from 'src/types/joins';
import TwoColumnSection from 'src/components/TwoColumnSection';

import DownloadImg from 'public/download_app.png';
import HeroImg from 'public/collaction_team.png';
import { InferGetStaticPropsType } from 'next';
import PageHero from 'src/components/PageHero';
import ContentBlock from 'src/components/ContentBlock';

type JoinTagsMapType = {
  [K in JoinTagTokenType]: {
    icon: any;
    text: string;
  };
};

const joinTagsMap: JoinTagsMapType = {
  voluntary: {
    icon: <DollarSignIcon />,
    text: 'Voluntary',
  },
  remote: {
    icon: <MapPinIcon />,
    text: 'Remote',
  },
};

export default function JoinListPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation();
  return (
    <>
      <PageSEO
        title="CollAction | Join Our Team"
        description="Want to join our team in making the world a better place? Check out our current openings."
      />

      <main className="bg-secondary">
        {/* HERO SETION */}
        <PageHero
          image={HeroImg}
          title={t('team:hero.title')}
          description={t('team:hero.description')}
        />

        {/* OUR TEAM SECTION */}
        <ContentBlock
          className="pt-10"
          title={t('team:ourTeamSection.title')}
          body={t('team:ourTeamSection.description')}
          // hasBg={false}
        />

        <div className="pb-0">
          <Team name={''} title={''} full_name={''} />
        </div>

        {/* JOIN SECTION */}
        <ContentBlock
          // className="pt-10"
          title={t('team:joinTeamSection.title')}
          body={t('team:joinTeamSection.description')}
          // hasBg={false}
        />

        {/* <div className="text-center mx-auto max-w-350 sm:max-w-400 lg:max-w-500 md:mb-10">
          <h1 className="text-headline-m-1 md:text-headline-lg-1 mb-6">
            {t('team:teamSection.black_title')}
            <span className="before:content-['_'] text-collaction">
              {t('team:teamSection.green_title')}
            </span>
          </h1>
          <p className="text-body-short-1 text-primary-200 pb-8">
            {t('team:teamSection.description')}
          </p>
        </div> */}

        <div className="flex flex-wrap justify-center p-0 gap-x-4 mx-8 pt-10">
          {props.data.map(
            ({
              title,
              description,
              tags,
            }: {
              title: string;
              description: string;
              tags: Array<JoinTagTokenType>;
            }) => (
              <div
                key={`${title} card`}
                className={clsx('bg-primary-0 p-6 mb-6 rounded-1', 'md:w-1/3')}
              >
                <h3 className="text-headline-m-1">{title}</h3>
                <p className="text-body-short-1 text-primary-300 mb-6">
                  {description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {tags.map(tag => {
                    const currentTag = joinTagsMap[tag];
                    return (
                      <div
                        key={title + currentTag.text}
                        className="flex items-center bg-secondary text-primary-400 rounded-1 py-3 px-4 mb-4 mr-4"
                      >
                        {currentTag.icon}
                        <span className="ml-4">{currentTag.text}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="w-full flex justify-end">
                  <Link
                    href={`/team/as/${title
                      .split(' ')
                      .join('-')
                      .toLowerCase()}`}
                    passHref
                    className="bg-collaction h-8 w-8 -mr-4 -mb-4 p-4 rounded-full text-secondary"
                    aria-label={`Visit ${title} posting`}
                  >
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* DOWNLOAD APP SETION */}
        <TwoColumnSection
          isReverseOrder={false}
          first={
            <Image src={DownloadImg} alt="Download App" className="mx-auto" />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              isSecondaryBg
              title={t('common:downloadApp.title')}
              body={t('common:downloadApp.description')}
            >
              <div className="flex justify-center mb-6">
                <AppLinkApple className="mr-4 sm:mr-5" />
                <AppLinkGoogle />
              </div>
            </InfoCard>
          }
        />
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const data = getJoinsData();

  return {
    props: {
      data,
      locale,
      ...(await serverSideTranslations(locale, ['common', 'team'])),
    },
  };
};
