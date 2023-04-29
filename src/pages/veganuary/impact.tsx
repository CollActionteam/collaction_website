import React from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'use-count-up';

import PageSEO from 'src/components/PageSEO';
import * as Icons from 'src/components/Icons';

import AirplaneImg from 'public/impact/airplane.jpeg';
import AnimalsImg from 'public/impact/animals.jpeg';
import CO2Img from 'public/impact/co2.jpeg';
import WaterImg from 'public/impact/water.jpeg';
import CollActionLogoWithText from 'public/logo-white-small.png';

export default function ImpactPage() {
  return (
    <>
      <PageSEO title="Your Impact | Veganuary" />

      <div className="bg-primary-0 p-5 pt-26 md:pt-32">
        <div className="w-full max-w-400 md:max-w-500 text-center mx-auto">
          {/* MAIN HEADING */}
          <h1 className="text-center mb-7 md:mb-8 break-words">
            Congratulations!
          </h1>
          <p className="mb-15 md:mb-18 lg:mb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
            amet ultrices risus. Phasellus augue eros, bibendum non viverra ut,
            posuere vel risus.
          </p>
        </div>

        {/* IMAGE CARDS */}
        <div className="flex flex-wrap md:flex-row justify-center max-w-864 mx-auto mb-10 lg:mb-14">
          {imgCards.map((card, i) => (
            <ImageCard key={card.bottom} card={card} index={i} />
          ))}
        </div>

        {/* YOUR INDIVIDUAL IMPACT */}
        <div className="w-full max-w-400 md:max-w-500 text-center mx-auto">
          <h1 className="text-center mb-7 md:mb-8">Your individual impact</h1>
          <p className="lg:mb-15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
            amet ultrices risus. Phasellus augue eros, bibendum non viverra ut,
            posuere vel risus.
          </p>
        </div>

        {/* ICON IMPACT CARDS */}
        <div className="flex justify-center lg:justify-start flex-wrap mx-auto max-w-864 md:px-7 lg:p-0">
          {iconCards.map((card, i) => (
            <IconCard key={card.top} card={card} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

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
    value: 123,
    bottom: 'tons of CO2e',
  },
  {
    image: AirplaneImg,
    top: 'the CO2 equivalent of',
    value: 123,
    bottom: 'Continental flights',
  },
  {
    image: AnimalsImg,
    top: '',
    value: 123,
    bottom: 'animal lives saved',
  },
  {
    image: WaterImg,
    top: '',
    value: 123,
    bottom: 'liters of water saved',
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
          src={CollActionLogoWithText}
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

const iconCards: IconCard[] = [
  {
    icon: <Icons.Vegan />,
    top: 'Vegan',
    value: 123,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoBeef />,
    top: 'No Beef',
    value: 468,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.Vegetarian />,
    top: 'Vegetarian',
    value: 48,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoCheese />,
    top: 'No Cheese',
    value: 498,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.NoDairy />,
    top: 'No Diary',
    value: 321,
    bottom: 'kgCO2e/mth',
  },
  {
    icon: <Icons.Pescatarian />,
    top: 'Pescatarian',
    value: 54545,
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
