import React from 'react';
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';

import PageHero from 'src/components/PageHero';
import HeroImg from 'public/greenlands_website.jpg';

import Program1 from 'public/GreenlandsWebsiteSlide11.png';
import Program2 from 'public/GreenlandsWebsiteSlide2.png';

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
          {/* <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-750 mx-auto mt-6 mb-6"> */}
          {/* <div className="pb-2 mx-auto sm:max-w-11/12 md:max-w-640 lg:max-w-720 py-5 px-5"> */}
          {/* mx-auto max-w-700 sm:max-w-400 lg:max-w-600
          relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6 */}

          <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-750 mx-auto mt-8 mb-6">
            <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 mt-4 px-5">
              {/* <h4 className="text-collaction mt-6 mb-2">
              Go Green at Greenlands 2023
            </h4>
            <p className="mb-2">Location: Uilenstede</p>
            <p className="mb-6">Time: April 15, 13:00 - 23:00</p> */}
              <p className="mb-2 text-center">
                <strong>Location: Uilenstede</strong>
              </p>
              <p className="mb-2 text-center">
                <strong>Time: April 15, 13:00 - 23:00</strong>
              </p>
            </div>

            <h4 className="mt-8 mb-6 text-center">Program</h4>
            <Image
              priority
              src={Program1}
              alt="Program Greenlands"
              className="rounded-1"
              sizes="(max-width: 830px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-750 mx-auto mt-6 mb-6">
            <h4 className="mt-6 mb-6 text-center">Stands</h4>
            <Image
              priority
              src={Program2}
              alt="Program Greenlands"
              className="rounded-1"
              sizes="(max-width: 830px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <div className="mx-auto w-full max-w-536 sm:max-w-600 md:max-w-600 lg:max-w-600 pt-10 px-5">
            {/* <h4 className="text-collaction mt-6 mb-2">
              Go Green at Greenlands 2023
            </h4>
            <p className="mb-2">Location: Uilenstede</p>
            <p className="mb-6">Time: April 15, 13:00 - 23:00</p> */}
            <p className="mb-11 text-center">
              <strong>
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
              </strong>
            </p>
          </div>
        </section>

        {/* <section>
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
        </section> */}
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
