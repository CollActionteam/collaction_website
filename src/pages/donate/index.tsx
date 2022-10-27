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
        {/* try adding gradient and setting the z-index
        for this div and using align-item to set the headline
        and the byline before attempting to use css-grid */}
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

        <div className="mx-auto max-w-600 my-11">
          <h3 className="mb-7 text-title-2">Headline</h3>
          <p className="mb-7 text-body-short-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mb-7 text-body-short-1">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        {/* use flexbox with flex direction row for this layout  */}
        <div className="mx-auto max-w-864">Donation component go here</div>

        <div className="mx-auto max-w-864 my-11">
          <h3 className="text-center text-title-1">
            Frequently asked questions
          </h3>
          FAQ components go here
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
