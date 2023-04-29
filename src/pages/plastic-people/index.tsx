import React from 'react';
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';

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
              Plastic waste made fun & easy
            </h4>
            <p className="mb-2">
              At{' '}
              <a
                className="text-collaction"
                href="https://collaction.org/greenlands"
                target="_blank"
                rel="noreferrer"
              >
                Greenlands Festival
              </a>{' '}
              on April 15, Plastic People are present on the Uilenstede Campus.
              Right next to the Plastic People, CollAction hands out free bins
              and bags for Uilenstede citizens. Furthermore, you can play games
              to win prizes, and ask us anything on how to start separating
              plastic waste. That's how CollAction makes plastic waste fun &
              easy!
            </p>
            <p className="mb-2 mt-6">
              Did you run out of transparent plastic bags? Get new ones for free
              at Sportcentrum VU, DUWO or VBU! Black bags get burned :{'('}
            </p>
            <h4 className="text-collaction mb-4 mt-6">Did you know</h4>
            <ul style={{ listStyleType: 'disc' }} className="pl-7">
              <li className="mb-2">
                <strong>Make your waste valuable by separating it!</strong>{' '}
                Separate your waste to prevent it from being burned or ending up
                in landfills. Help nature by enabling the municipality to
                recycle what you don't use anymore. Your tidy house can equal a
                happy planet!
              </li>

              <li className="mb-2">
                A big problem of recycled plastic is the smell originating from
                organic material. Therefore, clean your plastic a bit before you
                put it in your PMD bag and be careful not to put food in it.
                Furthermore, don't put kit/aerosols/paint cans in PMD, as these
                might explode in the machines
              </li>
              <li className="mb-2">
                Dutch people throw away 120kg of plastic every year{' '}
              </li>
              <li className="mb-2">
                Every municipality has its own waste policy. For example,
                Amstelveen collects plastic seperately from general waste (
                <i>voorsortering</i>), whereas Amsterdam puts everything on one
                big pile (<i>nasortering</i>)
              </li>
              <li className="mb-2">
                There are 4 worm hotels at Uilenstede that collect bio waste. If
                you want to sign up for one, send us a message
              </li>
              <li className="mb-2">
                Paper can be recycled and reused 7 times, aluminium cans
                indefinitely
              </li>
              <li className="mb-2">
                Making one can from raw materials uses the same amount of energy
                that it takes to recycle 20 cans{' '}
              </li>
              <li className="mb-2">
                Pizza boxes from the pizzeria should be placed in general waste
                due to the oil in the paper. Pizza boxes from the supermarket
                are suited for recycling
              </li>

              <li className="mb-2">
                It costs €130 (including taxes!) in NL to burn 1000kg of waste
              </li>

              <li className="mb-2">
                During 2020, more than 100 billion tonnes of raw materials were
                extracted from the Earth. 70% of all 2020 greenhouse gas
                emissions comes from extraction to end use of these materials
              </li>
              <li className="mb-2">
                <a
                  className="text-collaction"
                  href="https://www.knapzak.nl/en/5/5-myths-about-separating-waste.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  5 myths about separating waste by knapzak
                </a>
              </li>
            </ul>
            Would you like to add something to this list? Send us a message at{' '}
            <a
              className="text-collaction"
              href="mailto:tom@collaction.org"
              target="_blank"
              rel="noreferrer"
            >
              tom@collaction.org
            </a>
            .<h4 className="text-collaction mt-8 ">In collaboration with</h4>
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

        <div className="relative block w-full md:w-11/12 lsm:max-w-600 lg:max-w-600 mx-auto mt-6 mb-6">
          <Image
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
