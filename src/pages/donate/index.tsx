import { useState } from 'react';

import PageSEO from 'src/components/PageSEO';
import InfoCard from 'src/components/InfoCard';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import Button from 'src/components/Button';
import DonateCard from 'src/components/DonateCard';
import Faq from 'src/components/Faq';
import ContactModal from 'src/components/ContactModal';
import { v4 } from 'uuid';
import { toggleBtnState } from 'src/helpers/toggleButtonState';

import HeroImg from 'public/collaction_team.png';
import PageHero from 'src/components/PageHero';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetStaticPropsType } from 'next';

export default function DonatePage(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  // translation
  const { t } = useTranslation();

  // pull out array of FAQ from translation json
  const faqArray: { question: string; answer: string }[] = t(
    'donate:faq.items',
    {
      returnObjects: true,
    }
  );

  // translated donation text
  const singleDonation = t('donate:form.single');
  const monthlyDonation = t('donate:form.monthly');
  const recurring = t('donate:formElements.recurring');

  // state to set donation headline
  const [donateCardHeadline, setDonateCardHeadline] = useState(recurring);

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
    donateCardHeadline !== recurring ? singleDonation : monthlyDonation;

  return (
    <>
      <PageSEO
        title="CollAction | Donate to support our mission"
        description="Help us on our mission to make doing good fun and easy"
      />

      <main className="bg-secondary">
        <PageHero
          image={HeroImg}
          title={t('donate:hero.title')}
          alt="CollAction team members standing"
        />

        <div className="pt-10 lg:pt-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[520px] px-6 sm:px-0">
            <h3 className="mb-7 text-3xl">
              {t('donate:donateTextSection.title')}
            </h3>
            <p className="mb-7 text-body-short-1">
              {t('donate:donateTextSection.paragraphOne')}
            </p>
            <p className="mb-7 text-body-short-1">
              {t('donate:donateTextSection.paragraphTwo')}
            </p>
            <p className="text-body-short-1">
              {t('donate:donateTextSection.contact')}{' '}
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-block"
              >
                {t('donate:donateTextSection.link')}.
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
            {t('donate:formElements.recurring')}
          </Button>
          <Button
            customStyle="w-[169px] rounded-[10px] inactive-btn"
            onClick={donateToggleHandler}
          >
            {t('donate:formElements.oneTime')}
          </Button>
        </div>

        <div className="px-6 sm:px-0 pb-10 lg:pb-[80px]">
          <div className="mx-auto sm:max-w-[400px] lg:max-w-[744px] bg-primary-0 rounded-1 p-6">
            <DonateCard
              headline={donateCardHeadline}
              donation={donationText}
              creditCardText={t('donate:formElements.creditCard')}
              continueBtnText={t('donate:formElements.continue')}
              agreement={t('donate:formElements.agreement')}
              policy={t('donate:formElements.policy')}
            />
          </div>
        </div>

        <div className="w-full px-6 bg-primary-0 py-14">
          <h3
            className="mx-auto max-w-350 md:max-w-400 lg:max-w-[744px] lg:text-center lg:headline-lg-1 pb-8 lg:pb-9
          font-bold text-primary-400"
          >
            {t('donate:faq.title')}
          </h3>
          <div className="mx-auto flex flex-col max-w-350 sm:max-w-400 lg:max-w-[744px] gap-y-4">
            {faqArray.map(({ question, answer }) => (
              <Faq key={v4()} question={question} answer={answer} />
            ))}
          </div>
        </div>

        <div className="pt-7 lg:pt-9 px-6 sm:px-0">
          <InfoCard
            isSecondaryBg
            title={t('common:downloadApp.title')}
            body={t('common:downloadApp.description')}
          >
            <div className="flex justify-center mb-6">
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'donate'])),
    },
  };
}
