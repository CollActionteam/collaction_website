import { useState } from 'react';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import Button from 'src/components/Button';
import DonateCard from 'src/components/DonateCard';
import Faq from 'src/components/Faq';
import ContactModal from 'src/components/ContactModal';
import { faqData } from 'src/helpers/faqData';
import { toggleBtnState } from 'src/helpers/toggleButtonState';

import HeroImg from 'public/collaction_team.png';
import PageHero from 'src/components/PageHero';

export default function DonatePage() {
  // state to set donation headline
  const [donateCardHeadline, setDonateCardHeadline] =
    useState('Recurring donation');

  const [showContactModal, setShowContactModal] = useState(false);

  // get the textcontent of the button click
  const donateToggleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: activeButton } = event;
    const activeButtonText = activeButton.textContent;
    activeButtonText && setDonateCardHeadline(activeButtonText);
    toggleBtnState(activeButton);
  };

  // set single or monthly donation
  const donationText =
    donateCardHeadline !== 'Recurring donation' ? 'single' : 'monthly';

  return (
    <>
      <PageSEO
        title="CollAction | Become a supporter"
        description="Help us on our mission to make doing good fun and easy"
      />

      <main className="bg-secondary">
        <PageHero
          image={HeroImg}
          title="Become a supporter"
          description="Help us on our mission to make doing good fun & easy"
          alt="CollAction team members standing"
        />

        <div className="pt-10 lg:pt-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[520px] px-6 sm:px-0">
            <h3 className="mb-7 text-3xl">Become a donor</h3>
            <p className="mb-7 text-body-short-1">
              Our donors allow us to keep on solving collective action problems.
              They allow us to reach a bigger audience and run our app in the
              cloud. In short: they allow us to keep trying to make the world a
              better place. In return, if you become a donor you get full
              insight into all our expenses so you know what we do with your
              donation.
            </p>
            <p className="mb-7 text-body-short-1">
              For generous donors we organise a yearly vegan dinner together
              with other donors and the CollAction team. Additionally, these
              donors receive a special upcycled CollAction bag made from
              recycled chips bags!
            </p>
            <p className="text-body-short-1">
              For questions about donating please{' '}
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-block"
              >
                contact us.
              </button>
            </p>
          </div>
        </div>

        {/* donation toggler element */}
        <div className="flex gap-4 mt-10 mb-6 mx-auto max-w-350 h-[47px] px-5">
          <Button
            customStyle="w-[169px] rounded-[10px] active-btn"
            onClick={donateToggleHandler}
          >
            Recurring donation
          </Button>
          <Button
            customStyle="w-[169px] rounded-[10px] inactive-btn"
            onClick={donateToggleHandler}
          >
            One-time donation
          </Button>
        </div>

        <div className="px-6 sm:px-0 pb-10 lg:pb-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[744px] bg-primary-0 rounded-1 p-6">
            <DonateCard headline={donateCardHeadline} donation={donationText} />
          </div>
        </div>

        <div className="w-full px-6 bg-primary-0 py-14">
          <h3
            className="mx-auto max-w-350 md:max-w-400 lg:max-w-[744px] lg:text-center lg:headline-lg-1 pb-8 lg:pb-9
          font-bold text-primary-400"
          >
            Frequently Asked Questions
          </h3>
          <div className="mx-auto flex flex-col max-w-350 sm:max-w-400 lg:max-w-[744px] gap-y-4">
            {faqData.map(({ id, question, answer }) => (
              <Faq key={id} question={question} answer={answer} />
            ))}
          </div>
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
      {showContactModal && (
        <ContactModal setShowContactModal={setShowContactModal} />
      )}
    </>
  );
}
