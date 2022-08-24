import Image from 'next/image';
import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import Card1Img from 'public/home/home-card-1.png';
import Card2Img from 'public/home/home-card-2.png';
import Card3Img from 'public/home/home-card-3.png';

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
      </main>
    </>
  );
}
