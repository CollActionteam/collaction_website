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

      <main className="bg-secondary p-5">
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
          title="Choose a CrowdAction & make a change today"
          body="We make doing good fun & easy"
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-11/12 -mb-9">
            <Image src={Card1Img} alt="Crowdaction Card" />
          </div>
        </InfoCard>

        {/* THIRD CONTAINER */}
        <InfoCard
          title="Participate at your own pace. Your challenge, your rules"
          body="We make doing good fun & easy"
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-full">
            <Image src={Card2Img} alt="Challenge Card" />
          </div>
        </InfoCard>

        {/* FOURTH CONTAINER */}
        <InfoCard
          title="We channel many small individual actions towards the same cause"
          body="We make doing good fun & easy"
          className="flex flex-col lg:flex-row lg:items-center"
        >
          <div className="lg:w-11/12 -mb-9">
            <Image src={Card3Img} alt="Impact Card" />
          </div>
        </InfoCard>

        {/* FIFTH CONTAINER */}
        <InfoCard
          isSecondaryBg
          title="Our individual actions are a drop in the ocean. But together, we make waves!"
        >
          <div className="flex justify-center mb-6">
            <AppLinkApple className="mr-4 sm:mr-5" />
            <AppLinkGoogle />
          </div>
        </InfoCard>
      </main>
    </>
  );
}
