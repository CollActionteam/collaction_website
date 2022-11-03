import Image from 'next/image';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import Button from 'src/components/Button';
import DonateCard from 'src/components/DonateCard';

import donateImg from 'public/donate-page-photo.jpg';

export default function DonatePage() {
  return (
    <>
      <PageSEO
        title="CollAction | Become a supporter"
        description="Help us on our mission to make doing good fun and easy"
      />

      <main className="bg-secondary md:pt-8 lg:pt-10 py-0 sm:px-32">
        <div className="mx-auto w-full sm:max-w-[400px] lg:max-w-[744px] min-h-[520px] sm:rounded-1 overflow-hidden relative">
          <Image
            src={donateImg}
            alt="collaction team members standing"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 top-0 w-full hero-linear-gradient "></div>
          <div className="absolute bottom-14 lg:bottom-18 w-full text-center px-6">
            <h3 className="mb-6 text-secondary text-title-lg">
              Become a supporter
            </h3>
            <p className="text-secondary text-xl">
              Help us on our mission to make doing good fun & easy
            </p>
          </div>
        </div>

        <div className="pt-10 lg:pt-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[520px] px-6 sm:px-0">
            <h3 className="mb-7 text-3xl">Headline</h3>
            <p className="mb-7 text-body-short-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-body-short-1">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>

        {/* donation toggler element */}
        <div className="flex gap-4 mt-10 mb-6 mx-auto max-w-[350px] h-[47px] px-5">
          <Button
            text="Recurring donation"
            style="bg-primary-500 text-primary-0"
          />
          <Button text="One-time donation" style="bg-primary-0" />
        </div>

        <div className="px-6 sm:px-0 pb-10 lg:pb-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[744px] bg-primary-0 rounded-1 p-6">
            <DonateCard headline="Recurring donation" donation="monthly" />
          </div>
        </div>

        <div className="mx-auto sm:max-w-[400px] lg:max-w-[744px]">
          <h3 className="lg:text-center text-4xl px-6 sm:px-0 pb-8 lg:pb-9">
            Frequently asked questions
          </h3>
          FAQ components go here
        </div>

        <div className="pt-7 lg:pt-9 px-6 sm:px-0">
          <InfoCard
            isSecondaryBg
            title="Our individual actions are a drop in the ocean. But together, we make waves!"
          >
            <div className="flex justify-center">
              <AppLinkApple className="mr-4 sm:mr-5" />
              <AppLinkGoogle />
            </div>
          </InfoCard>
        </div>
      </main>
    </>
  );
}
