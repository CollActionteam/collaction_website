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
        description="Help us on our mission to make doing good fun and easy"
      />

      <main className="bg-secondary p-5 pt-10 md:pt-11">
        <div className="mx-auto lg:max-w-864 rounded-1 overflow-hidden">
          <Image
            src={donateImg}
            alt="collaction team members standing"
            layout="responsive"
          />
          <div className="absolute bottom-22">
            <h3 className="mb-6 text-secondary">Become a supporter</h3>
            <p className="text-secondary">
              Help us on our mission to make doing good fun & easy
            </p>
          </div>
        </div>

        <div
          className={clsx(
            'relative',
            'mx-auto md:w-3/4 max-w-350 sm:max-w-400 lg:max-w-864',
            'mb-12'
          )}
        >
          <h3>Headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
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
