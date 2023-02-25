import React from 'react';
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import PageHero from 'src/components/PageHero';
import HeroImg from 'public/plasticpeople_banner.jpg';
import Collaboration from 'public/uilenstede_collaboration.png';

import collactionTranslations from 'src/helpers/collactionTranslations';

export default function ActionIndexPage() {
  return (
    <>
      <PageSEO
        title="Plastic People | CollAction CrowdAction"
        description="We make doing good fun & easy"
      />

      <main className="mb-12">
        <PageHero image={HeroImg} title={'Plastic People'} overlay={false} />

        <section>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            <h4 className="text-collaction mt-6 mb-2">
              Plastic People focuses on PMD waste
            </h4>

            <p className="mb-2">Location: Uilenstede</p>
            <p className="mb-6">Time: April 1 - April 15</p>

            <p className="mb-2">More info follows soon!</p>
          </div>
        </section>

        <section>
          <InfoCard
            isSecondaryBg
            title="Download the CollAction app"
            body="Enrol for the Plastic People CrowdAction"
          >
            <div className="flex justify-center">
              <AppLinkApple className="mr-4 sm:mr-5" />
              <AppLinkGoogle />
            </div>
          </InfoCard>
        </section>

        <div className="mx-auto w-full max-w-350 sm:max-w-400 lg:max-w-600 mb-6 mt-11">
          <h4 className="text-collaction mb-4">In collaboration with</h4>
        </div>

        <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
          <Image
            priority
            src={Collaboration}
            alt="uilenstede banner"
            className="rounded-1"
            sizes="(max-width: 768px) 90vw, 830px"
            placeholder="blur"
          />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await collactionTranslations(locale)),
    },
  };
}
