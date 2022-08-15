
import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';

import donateImg from 'public/donate-page-photo.jpg';

export default function DonatePage() {
  return (
    <>
      <PageSEO
        title="CollAction | Become a supporter"
        description="Help us on our mission to make doing fun and easy"
      />

      <main className="bg-secondary p-5 pt-10 md:pt-11">
        <div className="mx-auto w-744 rounded-3xl overflow-hidden">
          <Image src={donateImg} alt="Support us" layout="responsive" />
        </div>

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
