import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import CrowdActionGraphic from 'public/crowdaction_graphic.png';
import CommitmentOptionsGraphic from 'public/commitment_options_graphic.png';
import ParticipantsGraphic from 'public/participants_graphic.png';
import AchievementGraphic from 'public/achievement_graphic.png';
import DownloadImg from 'public/download_app.png';
import HeroImg from 'public/uilenstede_banner.jpg';

import TomTomImg from 'public/actions/tomtom.png';
import CollActionExplanation, {
  Step,
} from 'src/components/CollActionExplanation';
import TwoColumnSection from 'src/components/TwoColumnSection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';
import PageHero from 'src/components/PageHero';
import ContentBlock from 'src/components/ContentBlock';
import Quote from 'src/components/Quote';

import Faq from 'src/components/Faq';
import { v4 } from 'uuid';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'donate',
        'app',
      ])),
    },
  };
}

export default function HomePage(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useTranslation();

  // pull out array of FAQ from translation json
  const faqArray: { question: string; answer: string }[] = t(
    'donate:faq.items',
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <main className="">
        {/* HERO SETION */}
        <PageHero
          image={HeroImg}
          title={t('home:hero.title')}
          description={t('home:hero.description')}
          // textColor="collaction"
        />

        {/* CROWDACTION EXPLANATION SECTION */}
        <div className="bg-primary-0 py-8">
          <div className="flex flex-wrap justify-center mx-auto max-w-7xl">
            <CollActionExplanation
              step={Step.GOAL}
              title={
                <div className="text-2xl font-bold">
                  {/* <span>Step 1: </span> */}
                  <span className="text-primary-400">
                    {t('common:collActionExplanation.goal.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.goal.description')}
            />
            <CollActionExplanation
              step={Step.CROWD}
              title={
                <div className="text-2xl font-bold">
                  {/* <span>Step 2: </span> */}
                  <span className="text-primary-400">
                    {t('common:collActionExplanation.crowd.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.crowd.description')}
            />
            <CollActionExplanation
              step={Step.ACTION}
              title={
                <div className="text-2xl font-bold">
                  {/* <span>Step 3: </span> */}
                  <span className="text-primary-400">
                    {t('common:collActionExplanation.action.title')}
                  </span>
                </div>
              }
              description={t('common:collActionExplanation.action.description')}
            />
          </div>
        </div>

        {/* Quote Sjoerd */}
        <Quote
          // className="pt-10 pb-6"
          isSecondaryBg={true}
          quote={t('home:sjoerd.quote')}
          name={t('home:sjoerd.name')}
          position={t('home:sjoerd.position')}
          hasBg={true}
        />

        {/* Mission Vision  */}
        <ContentBlock
          className="pt-10 pb-10"
          isSecondaryBg={false}
          title={t('home:missionVision.title')}
          body={t('home:missionVision.description')}
          hasBg={true}
        />

        {/* DOWNLOAD APP SETION */}
        <TwoColumnSection
          className="pt-8 pb-6"
          isSecondaryBg={true}
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

        {/* CROWDACTION SECTION */}
        <TwoColumnSection
          className="pt-8 pb-8"
          isReverseOrder={true}
          isSecondaryBg={false}
          mobile={
            <InfoCard
              title={t('home:crowdActionSection.title')}
              body={t('home:crowdActionSection.description')}
              className="mx-auto"
            >
              <Image src={CrowdActionGraphic} alt="Crowdaction Card" />
            </InfoCard>
          }
          first={
            <Image
              src={CrowdActionGraphic}
              alt="CrowdAction"
              className="absolute top-[50%] left-[50%] transform translate-y-[-40%] translate-x-[-50%]"
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('home:crowdActionSection.title')}
              body={t('home:crowdActionSection.description')}
            />
          }
        />

        {/* COMMITMENTOPTIONS SECTION */}
        <TwoColumnSection
          // className="mt-8, mb-8"
          className=""
          isSecondaryBg={true}
          mobile={
            <InfoCard
              title={t('home:commitmentOptionsSection.title')}
              body={t('home:commitmentOptionsSection.description')}
              className="mx-auto mt-8"
            >
              <Image src={CommitmentOptionsGraphic} alt="Crowdaction Card" />
            </InfoCard>
          }
          first={
            <Image
              src={CommitmentOptionsGraphic}
              alt="Commitment Options"
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
            />
          }
          second={
            <InfoCard
              title={t('home:commitmentOptionsSection.title')}
              body={t('home:commitmentOptionsSection.description')}
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              leftAlign={true}
              hasBg={false}
            />
          }
        />

        {/* SOCIAL SECTION */}
        <TwoColumnSection
          className="pt-8"
          isReverseOrder={true}
          isSecondaryBg={false}
          mobile={
            <InfoCard
              title={t('home:socialSection.title')}
              body={t('home:socialSection.description')}
              className="flex flex-col lg:flex-row lg:items-center mt-8"
            >
              <div className="lg:w-11/12 -mb-9">
                <Image src={ParticipantsGraphic} alt="Participants Card" />
              </div>
            </InfoCard>
          }
          first={
            <Image
              src={ParticipantsGraphic}
              alt="Participants"
              height={400}
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('home:socialSection.title')}
              body={t('home:socialSection.description')}
            />
          }
        />

        {/* IMPACT SECTION */}
        <TwoColumnSection
          className="pt-2 pb-10"
          isReverseOrder={false}
          isSecondaryBg={true}
          mobile={
            <InfoCard
              title={t('home:impactSection.title')}
              body={t('home:impactSection.description')}
              className="flex flex-col lg:flex-row lg:items-center mt-8"
            >
              <div className="lg:w-11/12 -mb-9">
                <Image src={AchievementGraphic} alt="Impact Card" />
              </div>
            </InfoCard>
          }
          first={
            <Image
              src={AchievementGraphic}
              // height={300}
              alt="Achievement"
              className="absolute top-[50%] left-[50%] transform translate-y-[-40%] translate-x-[-50%] h-[100%] w-[70%]"
            />
          }
          second={
            <InfoCard
              className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              hasBg={false}
              leftAlign={true}
              title={t('home:impactSection.title')}
              body={t('home:impactSection.description')}
            />
          }
        />

        {/* FAQ */}
        <div className="w-full px-6 bg-primary-0 py-14">
          <h3
            className="mx-auto max-w-350 md:max-w-400 lg:max-w-[744px] lg:text-center lg:headline-lg-1 pb-8 lg:pb-9
          font-bold text-primary-400"
          >
            {t('donate:faq.title')}
          </h3>
          <div className="mx-auto flex flex-col max-w-350 sm:max-w-400 lg:max-w-[744px] gap-y-4">
            {faqArray.map(({ question, answer }) => (
              <Faq key={v4()} question={question} answer={answer} />
            ))}
          </div>
        </div>

        {/* USE COLLACTION SECTION */}
        <div className="bg-secondary pb-11">
          <div
            className="pt-16 relative text-center mx-auto xs:max-w-350 sm:max-w-400 lg:max-w-600 rounded-none xs:rounded-1"
            style={{ height: 450 }}
          >
            <div className="absolute h-full w-full rounded-none xs:rounded-1">
              <Image
                src={TomTomImg}
                alt="CollAction Team"
                fill={true}
                className="rounded-none xs:rounded-1 object-cover"
              />
            </div>
            <div
              className="absolute h-full w-full rounded-none xs:rounded-1"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0) 22.92%, rgba(0, 0, 0, 0.6) 75%)',
              }}
            />

            <div className="absolute bottom-0 left-0 right-0 mb-9 mx-auto text-center w-full px-5 xs:max-w-350 sm:max-w-400 lg:max-w-600">
              <h4 className="text-headline-lg-1 text-secondary mb-6">
                {t('home:useCollActionSection.title')}
              </h4>
              <p className="text-body-short-1 text-secondary">
                {t('home:useCollActionSection.description')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
