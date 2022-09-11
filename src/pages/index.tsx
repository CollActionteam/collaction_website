import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import Card1Img from 'public/home/home-card-1.png';
import Card2Img from 'public/home/home-card-2.png';
import Card3Img from 'public/home/home-card-3.png';

import TomTomImg from 'public/actions/tomtom.png';

export default function HomePage() {
  return (
    <>
      <PageSEO title="CollAction | Sustainable choices made easy" />

      <main className="bg-secondary p-5 pt-10">
        {/* FIRST CONTAINER */}
        <InfoCard
          isSecondaryBg
          title="We connect people to solve collective action problems"
          body="We make doing good fun & easy."
        >
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>

        {/* SECOND CONTAINER */}
        <InfoCard
          title="Make a change today"
          body="CollAction organizes monthly challenges to help you in creating more sustainable habits. We help you in reducing the waste you produce or in adopting a more sustainable diet."
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-11/12 -mb-9">
            <Image src={Card1Img} alt="Crowdaction Card" />
          </div>
        </InfoCard>

        {/* THIRD CONTAINER */}
        <InfoCard
          title="Your challenge, your rules"
          body="Every contribution is a step in the right direction. You decide what level of commitment you feel comfortable with and you can track your progress in the CollAction app."
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-full">
            <Image src={Card2Img} alt="Challenge Card" />
          </div>
        </InfoCard>

        {/* FOURTH CONTAINER */}
        <InfoCard
          title="See the impact we make together"
          body="Alone we are a drop in the ocean – together we make waves. CollAction always shows you how much of an environmental impact all participants of a CrowdAction have made collectively."
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-11/12 -mb-9">
            <Image src={Card3Img} alt="Impact Card" />
          </div>
        </InfoCard>

        {/* FIFTH CONTAINER */}
        <InfoCard isSecondaryBg title="Download the app and join the wave!">
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>

        <div
          className="relative text-center mx-auto xs:max-w-350 sm:max-w-400 lg:max-w-600 rounded-none xs:rounded-1"
          style={{ height: 450 }}
        >
          <div className="absolute h-full w-full rounded-none xs:rounded-1">
            <Image
              src={TomTomImg}
              alt="CollAction Team"
              layout="fill"
              objectFit="cover"
              className="rounded-none xs:rounded-1"
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
              Want to use CollAction for your project?
            </h4>
            <p className="text-body-short-1 text-secondary">
              Do you have an initiative for collective action and would you like
              to reach a larger public? Send us a message at{' '}
              {
                <a
                  className="text-collaction"
                  href="mailto:use@collaction.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  use@collaction.org
                </a>
              }
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
