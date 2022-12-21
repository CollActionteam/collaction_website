import { InferGetStaticPropsType } from 'next';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCountUp } from 'use-count-up';
import { useInView } from 'react-intersection-observer';

import PageSEO from 'src/components/PageSEO';
import AppLinkApple from 'src/components/AppLinkApple';
import AppLinkGoogle from 'src/components/AppLinkGoogle';
import { DealsCard } from 'src/components/DealsCard';
import { getDealsData } from 'src/lib/getDeals';
import * as Icons from 'src/components/Icons';

import ASMLBanner from 'public/veganuary-ASML-banner.png';
import CollActionLogoWithText from 'public/logo-black-small.png';
import CollActionLogoWithTextWhite from 'public/logo-white-small.png';

import AppPreviewCard1 from 'public/app-preview-card-1.png';
import AppPreviewCard2 from 'public/app-preview-card-2.png';
import AppPreviewCard3 from 'public/app-preview-card-3.png';
import AirplaneImg from 'public/impact/airplane.jpeg';
import AnimalsImg from 'public/impact/animals.jpeg';
import CO2Img from 'public/impact/co2.jpeg';
import WaterImg from 'public/impact/water.jpeg';

export default function ASMLPage({
  deals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title="CollAction meets ASML | Make an impact together"
        description="ASML participates in Veganuary: an annual challenge that promotes veganism and sustainable food consumption. Read recipes, tips, supplements, and more."
      />

      <div>
        <div className="bg-primary-0 px-5 md:px-7 py-28 md:pb-18">
          <div className="max-w-600 mx-auto mb-15 md:mb-18 lg:mb-12">
            <h1 className="text-primary-400 text-center mb-7">
              We connect people to solve collective action problems
            </h1>

            <div className="w-32 mx-auto relative leading-none">
              <Image
                priority
                src={CollActionLogoWithText}
                alt="black CollAction logo with text"
                placeholder="blur"
                sizes="128px"
              />
            </div>
          </div>

          <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
            <Image
              priority
              src={ASMLBanner}
              alt="asml veganuary banner"
              className="rounded-1"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <div className="mt-12 md:mt-15 lg:mt-26">
            <div className="w-full max-w-400 md:max-w-500 text-center mx-auto">
              {/* MAIN HEADING */}
              <h1 className="text-center mb-7 md:mb-8 break-words">
                Congratulations ASML!
              </h1>
              <p className="mb-15 md:mb-18 lg:mb-24">
                Your effort paid off. Based on your individual commitments, we
                calculated the impact of 135 participants in this year’s ASML
                Veganuary challenge. Here are the numbers. Feel free to share
                this and spread the word about your collective impact. Together,
                you made waves!
              </p>
            </div>

            {/* IMAGE CARDS */}
            <div className="flex flex-wrap md:flex-row justify-center max-w-864 mx-auto mb-10 lg:mb-14">
              {imgCards.map((card, i) => (
                <ImageCard key={card.bottom} card={card} index={i} />
              ))}
            </div>

            {/* YOUR INDIVIDUAL IMPACT */}
            {/* <div className="w-full max-w-400 md:max-w-500 text-center mx-auto">
              <h1 className="text-center mb-7 md:mb-8">
                Your individual impact
              </h1>
              <p className="lg:mb-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet ultrices risus. Phasellus augue eros, bibendum non
                viverra ut, posuere vel risus.
              </p>
            </div> */}

            {/* ICON IMPACT CARDS */}
            {/* <div className="flex justify-center lg:justify-start flex-wrap mx-auto max-w-864 md:px-7 lg:p-0">
              {iconCards.map((card, i) => (
                <IconCard key={card.top} card={card} index={i} />
              ))}
            </div> */}

            {/* <div className="max-w-600 mx-auto mb-13">
              <h4 className="mb-7">
                Hi, welcome to the ASML edition of Veganuary!
              </h4>
              <p className="mb-6 last:mb-0">
                Veganuary is an annual challenge that promotes veganism and
                sustainable food consumption. Joining is easy, you will go
                through the following steps:
              </p>
              <ul style={{ listStyleType: 'decimal' }} className="pl-7">
                <li className="mb-2">
                  Choose if you want to participate 5 or 7 days a week
                </li>
                <li className="mb-2">Choose your commitments</li>
                <li className="mb-2">
                  Stay tuned for extra activities and restaurant deals
                </li>
                <li className="mb-2">
                  See the impact of you and your colleagues after the dietary
                  change
                </li>
              </ul>
              <p className="mb-6 last:mb-0">
                <br />
                Veganuary is a month where we can challenge ourselves. Let's try
                it out together and help each other by sharing recipes, tips,
                supplements, and more. Shifting to a more plant-based diet is
                great for your health and the environment. Want to participate?
                Click the participate button and fill out the form.
              </p>
            </div> */}

            {/* <div className="max-w-600 mx-auto mb-13">
              <h4 className="mb-7">Commitments</h4>
              <p className="mb-6 last:mb-0">
                We'd love to optimize your personal impact. Eating vegan for a
                full month can be a difficult task. To maximize the impact of
                the ASML edition of Veganuary, there are multiple levels at
                which you can participate. Your challenge, your rules.
                Therefore, you can join the challenge by eating vegan for a
                month, but eating vegetarian, pescatarian, or simply not eating
                beef/cheese is also possible. Would you like to have the
                weekends off? We've got you covered with a '5/7 days as week'
                option!
              </p>
            </div> */}

            <div className="mb-13 last:mb-0">
              <h4 className="max-w-600 mx-auto mb-7">Restaurant Deals</h4>
              {/* if we add another paragraph, use the commented line in both and remove the used one */}
              {/* <p className="max-w-500 mx-auto mb-6 last:mb-0"> */}
              <p className="max-w-600 mx-auto mb-0">
                Besides us, restaurants would like to motivate you as well! See
                below which deals are on offer. Note that for some restaurants
                you're required to show the password in{' '}
                {
                  <a
                    className="text-collaction"
                    href="https://my.asml.com/Newsroom/Pages/Sustainability/Join-our-Veganuary-journey.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    this MyASML article
                  </a>
                }
                .
              </p>
              <div className="flex flex-wrap justify-center mx-auto md:max-w-864 mt-12 lg:mt-15">
                {deals.map(deal => (
                  <DealsCard key={deal.title} {...deal} />
                ))}
              </div>
            </div>
          </div>

          {/* SEE MORE DEALS */}
          <Link
            href="/asml/deals"
            className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mt-5 w-72 shadow sticky bottom-7 inset-x-0 mx-auto z-40"
          >
            See All Deals
          </Link>
        </div>

        {/* APP SECTION */}
        <div className="bg-primary-400 px-5 md:px-7 pt-20 pb-24 md:pb-22 text-center">
          <div className="max-w-600 mx-auto">
            <h2 className="text-secondary mb-7">
              The CollAction app has launched!
            </h2>
            <p className="text-primary-0">
              We’ve been working very hard and are happy to announce that our
              app is live. We have more updates and improvements coming very
              soon, so stay tuned.
            </p>
          </div>

          {/* APP LINKS */}
          <div className="flex flex-wrap items-center justify-center mt-7 md:mt-8 mb-15 lg:mb-10 mx-auto">
            <AppLinkApple className="inline-flex mb-5 mx-3 xs:mx-0 xs:mr-5" />
            <AppLinkGoogle className="inline-flex mb-5 mx-3 xs:mx-0" />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start md:max-w-400 lg:max-w-4xl lg:w-208 mx-auto">
            {/* APP CARD */}
            <div className="bg-secondary text-primary-400 max-w-400 w-full rounded-1 px-8 lg:px-13 py-7 pb-0 mb-5 md:mb-7 lg:mr-7 overflow-hidden">
              <h4 className="text-primary-400 mb-5">Make a change today</h4>
              <p className="text-primary-300">
                Join a CrowdAction you want to be part of.
              </p>
              <div className="block -mb-8 xs:-mb-12">
                <Image
                  src={AppPreviewCard1}
                  alt="app preview card 1"
                  sizes="(min-width: 769px) 275px, 300px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-primary-400 max-w-400 w-full rounded-1 px-8 lg:px-13 py-7 mb-5 md:mb-7 lg:mr-7 overflow-hidden lg:order-3">
              <h4 className="text-primary-400 mb-5">
                Participate at your own pace
              </h4>
              <p className="text-primary-300 mb-5">
                Choose your commitments for the CrowdAction.
              </p>
              <div className="block">
                <Image
                  src={AppPreviewCard2}
                  alt="app preview card 2"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-primary-400 max-w-400 w-full rounded-1 px-8 lg:px-13 py-7 mb-5 md:mb-7 lg:mr-0 overflow-hidden lg:order-2">
              <div className="block -mt-15 xs:-mt-16">
                <Image
                  src={AppPreviewCard3}
                  alt="app preview card 3"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
              <h4 className="text-primary-400 mb-5">Join the wave</h4>
              <p className="text-primary-300">Make impact together.</p>
            </div>
          </div>
        </div>

        {/* DOWNLOAD THE APP BUTTON */}
        <Link
          href="/download"
          className="block bg-collaction font-bold leading-none text-button text-secondary text-center rounded-full p-3.5 mb-7 w-72 shadow sticky bottom-7 inset-x-0 mx-auto z-40"
          style={{ marginTop: `calc(-52px - 2rem)` }}
        >
          Download The App!
        </Link>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const deals = getDealsData('featured');

  return {
    props: {
      deals,
    },
  };
};

// ===========
// IMAGE CARDS
// ===========
type ImageCard = {
  image: StaticImageData;
  top: string;
  value: number;
  bottom: string;
};

const imgCards: ImageCard[] = [
  {
    image: CO2Img,
    top: '',
    value: 13,
    bottom: 'tons of CO2e',
  },
  {
    image: AirplaneImg,
    top: 'the CO2 equivalent of',
    value: 10,
    bottom: 'Continental flights',
  },
  {
    image: AnimalsImg,
    top: '',
    value: 1200,
    bottom: 'animal lives',
  },
  {
    image: WaterImg,
    top: '',
    value: 4,
    bottom: 'million liters of water',
  },
];

function ImageCard({ card, index }: { card: ImageCard; index: number }) {
  // https://www.npmjs.com/package/react-intersection-observer
  const [cardRef, inView] = useInView();

  // https://www.npmjs.com/package/use-count-up
  const { value } = useCountUp({
    end: card.value,
    start: card.value / 2,
    duration: 2,
    decimalPlaces: 0,
    isCounting: inView,
    thousandsSeparator: ',',
  });

  return (
    <div
      ref={cardRef}
      className="relative flex justify-center items-center w-full max-w-350 md:max-w-400 h-full aspect-[0.7] rounded-1 md:mx-5 mb-5 sm:mb-7"
    >
      <div className="block w-full h-full overflow-hidden rounded-1">
        <Image
          priority={index < 2}
          src={card.image}
          alt={card.bottom}
          placeholder="blur"
          sizes="(max-width: 767px) 350px, 400px"
          className="rounded-1"
        />
      </div>
      <div
        className="absolute w-full h-full rounded-1"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 35.3%, rgba(0, 0, 0, 0.38) 100%)`,
        }}
      />
      <div className="absolute text-secondary text-center text-shadow">
        {/* top text */}
        {card.top && <div className="text-footnote">{card.top}</div>}
        {/* large middle value/text */}
        <div className="text-8xl font-bold mb-[10px]">{value}</div>
        {/* bottom text */}
        <div className="text-headline font-bold">{card.bottom}</div>
      </div>
      <div className="absolute text-center bottom-8 md:bottom-12">
        <Image
          src={CollActionLogoWithTextWhite}
          alt="Collaction White Logo"
          width={96}
          height={24}
        />
      </div>
    </div>
  );
}

// ==========
// ICON CARDS
// ==========
type IconCard = {
  icon: JSX.Element;
  top: string;
  value: number;
  bottom: string;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const iconCards: IconCard[] = [
  {
    icon: <Icons.Vegan />,
    top: 'Vegan',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoBeef />,
    top: 'No Beef',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.Vegetarian />,
    top: 'Vegetarian',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoCheese />,
    top: 'No Cheese',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoDairy />,
    top: 'No Diary',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.Pescatarian />,
    top: 'Pescatarian',
    value: 11,
    bottom: 'kgCO2e/mth',
  },
];

function IconCard({ card, index }: { card: IconCard; index: number }) {
  // https://www.npmjs.com/package/react-intersection-observer
  const [cardRef, inView] = useInView();

  // https://www.npmjs.com/package/use-count-up
  const { value } = useCountUp({
    end: card.value,
    start: card.value / 3,
    duration: 2,
    decimalPlaces: 0,
    isCounting: inView,
    thousandsSeparator: ',',
  });

  return (
    <div
      ref={cardRef}
      className={clsx(
        'relative p-0 py-8 sm:px-7 md:p-8',
        `${index === 0 ? 'before:hidden' : 'before:block'}`,
        `${index === 1 ? 'lg:before:hidden' : ''}`,
        'before:absolute before:top-0 before:inset-x-0 before:mx-auto before:content-[""] before:w-2/3 before:bg-primary-100 before:h-[0.5px]',
        'after:hidden',
        `${index % 2 === 1 ? 'lg:after:block' : ''}`,
        'after:absolute after:left-0 after:inset-y-0 after:my-auto after:content-[""] after:h-5/6 after:bg-primary-100 after:w-[0.5px]'
      )}
    >
      <div className="relative flex flex-col items-center w-80 xs:w-full xs:min-w-350 max-w-350 text-center">
        {/* icon */}
        <div className="flex justify-center w-16 h-16 p-5 bg-secondary rounded-full mb-2">
          {card.icon}
        </div>
        {/* title/top text */}
        <div className="text-primary-300 mb-2">{card.top}</div>
        {/* featured text */}
        <span className="text-collaction text-featured font-bold mb-2">
          {value}
        </span>
        {/* bottom text */}
        <div className="text-primary-300">{card.bottom}</div>
      </div>
    </div>
  );
}
