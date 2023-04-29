import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import InfoCard from 'src/components/InfoCard';
import PageSEO from 'src/components/PageSEO';
import TwoColumnSection from 'src/components/TwoColumnSection';

import DownloadImg from 'public/download_app.png';
import AvatarCircle from 'src/components/AvatarCircle';
import CrowdActionChipList from 'src/components/CrowdActionChipList';
import collactionTranslations from 'src/helpers/collactionTranslations';

const staticUrl = process.env.NEXT_PUBLIC_STATIC_URL;

export default function CrowdActionPage({ crowdAction, topParticipants }: any) {
  const { t } = useTranslation();

  return (
    <div>
      <PageSEO
        title={`CollAction meets ${crowdAction.title}`}
        description={`${crowdAction.description.substring(0, 100)}...`}
      />

      <div className="w-full min-h-[500px] bg-collaction relative">
        <div className="absolute top-[50%] transform translate-y-[-50%] lg:top-[30%] w-full text-center px-5">
          <h1 className="text-white text-4xl">{crowdAction.title}</h1>
        </div>
      </div>

      <div className="relative w-full min-h-[112px] lg:min-h-[210px]">
        <Image
          src={`${staticUrl}${crowdAction.images.card}`}
          alt={crowdAction.title}
          className="absolute top-[-112px] lg:top-[-210px] left-[50%] transform translate-x-[-50%] h-[225px] lg:h-[420px] w-[350px] sm:w-[400px] lg:w-[744px] bg-white rounded-3xl"
          width={400}
          height={225}
        ></Image>
      </div>

      <div className="relative w-full py-8 lg:py-10 flex justify-center">
        <CrowdActionChipList
          status={crowdAction.status}
          joinStatus={crowdAction.joinStatus}
          category={crowdAction.category}
          subcategory={crowdAction.subcategory}
          onWhite={false}
        ></CrowdActionChipList>
      </div>

      <div className="flex mb-5 -space-x-4 justify-center pb-5">
        {topParticipants.map((participant: any) => {
          return (
            <AvatarCircle
              key={participant.userId}
              participant={participant}
              width={100}
              height={100}
            ></AvatarCircle>
          );
        })}
      </div>

      <div className="mx-auto text-center max-w-350 lg:max-w-500 pb-8">
        <p>{t('crowdaction:participants.joinText')}</p>
      </div>

      <div className="mx-auto max-w-350 lg:max-w-500 pb-8">
        <p>{crowdAction.description}</p>
      </div>

      {/* DOWNLOAD APP SETION */}
      <TwoColumnSection
        isReverseOrder={false}
        first={
          <Image
            src={DownloadImg}
            alt="Download App"
            className="mx-auto"
            width={450}
          />
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
    </div>
  );
}

export async function getServerSideProps({ query, locale }: any) {
  const slug: string = query.slug;

  const crowdAction = await fetch(
    `https://api.collaction.org/v1/crowdactions/slug/${slug}`
  )
    .then(response => response.json())
    .then(data => {
      return data;
    });

  const topParticipants = await fetch(
    `https://api.collaction.org/v1/participations?crowdActionId=${crowdAction.id}&page=1&pageSize=3`
  )
    .then(response => response.json())
    .then(data => {
      return data.items;
    });

  return {
    props: {
      crowdAction,
      topParticipants,
      locale,
      ...(await collactionTranslations(locale, [
        'common',
        'crowdaction',
        'contact',
      ])),
    },
  };
}
