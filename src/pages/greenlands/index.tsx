import React from 'react';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import PageHero from 'src/components/PageHero';
import HeroImg from 'public/greenlands_website.png';

import collactionTranslations from 'src/helpers/collactionTranslations';

export default function ActionIndexPage() {
  return (
    <>
      <PageSEO
        title="Greenlands 2023 | CollAction x Uilenkatten"
        description="We make doing good fun & easy"
      />

      <main className="mb-12">
        <PageHero image={HeroImg} title={''} overlay={false} />

        <section>
          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 py-5 px-5">
            <h4 className="text-collaction mt-6 mb-2">
              Go Green at Greenlands 2023
            </h4>
            <p className="mb-2">Location: Uilenstede</p>
            <p className="mb-6">Time: April 15, 13:00 - 04:00</p>
            <p className="mb-2">
              Check out our Instagram{' '}
              <a
                className="text-collaction"
                href="https://www.instagram.com/greenlands.festivals/"
                target="_blank"
                rel="noreferrer"
              >
                Greenlands.festivals
              </a>{' '}
              for more info!
            </p>
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
